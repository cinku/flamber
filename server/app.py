from flask import Flask, send_from_directory, jsonify
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

@app.route("/")
def index():
    return send_from_directory('static', 'index.html')
    
class User():
    def __init__(self, name):
        self.name = name
        
    @property
    def serialize(self):
        return {
            'name': self.name
        }

user1 = User('andrzej')
user2 = User('adam')
user3 = User('janusz')
userArr = [user1, user2, user3]
class Users(Resource):
    def get(self):
        return jsonify({'user': [i.serialize for i in userArr]})
        
api.add_resource(Users, '/users')

if __name__ == "__main__":
    app.run(debug=True)