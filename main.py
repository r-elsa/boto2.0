'''main webserver'''

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/elsar/dev/boto2/database.db'
app.config['SQL_ALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Chat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    line = db.Column(db.String(50))
   # answer= db.Column(db.String(50))
  

@app.route('/')
def root():
    return 'hello from root'


@app.route('/bot')
def boto():
    line = request.args.get('message')
    line = line[::-1]
    return {'line': line}



@app.route('/message')
def chats():
    chat_list = Chat.query.all()
    message = []
    for chat in chat_list:
        message.append({'line':chat.line})
    return jsonify({'message': message})

@app.route('/add_chat', methods= ['POST'])
def add_chat():
    chat_data = json.loads(request.get_data())
    print('################################################################################3', chat_data)
    #keyvalue = chat_data.get('message')
   # print('KEYVALUE ', chat_data.get('message'))
    new_chat = Chat(line = chat_data["line"])
    db.session.add(new_chat)
    db.session.commit() 
    return'done from addchat'

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True,threaded=True, use_reloader=True, port=5000)


