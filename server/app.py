from flask import Flask, send_from_directory, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
api = Api(app)
db = SQLAlchemy(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return send_from_directory('static', 'index.html')
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    username = db.Column(db.String(64), unique=True)
    email = db.Column(db.String(64), unique=True)
    flames = db.relationship('Flame', backref='user', lazy='dynamic')
        
    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'username': self.username,
            'email': self.email
        }
        
class Flame(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(140))
    pub_date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'text': self.text,
            'pub_date': self.pub_date,
            'user': self.user_id
        }

class Users(Resource):
    def get(self):
        return jsonify({'user': [i.serialize for i in User.query.all()]})
        
class UsersUpdate(Resource):
    def get(self, user_id):
        return jsonify({'user': User.query.get(user_id).serialize})
        
class Flames(Resource):
    def get(self):
        return jsonify({'flame': [i.serialize for i in Flame.query.all()]})
        
class FlamesUpdate(Resource):
    def get(self, flame_id):
        return jsonify({'flame': Flame.query.get(flame_id).serialize})
        
api.add_resource(Users, '/users')
api.add_resource(Flames, '/flames')
api.add_resource(UsersUpdate, '/users/<int:user_id>')
api.add_resource(FlamesUpdate, '/flames/<int:flame_id>')

if __name__ == "__main__":
    app.run(debug=True)