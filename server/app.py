from flask import Flask, send_from_directory, jsonify, request
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from marshmallow import Schema, fields
from datetime import datetime


app = Flask(__name__)
app.config.from_object('config')
api = Api(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return send_from_directory('static', 'index.html')
    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    username = db.Column(db.String(64), unique=True)
    email = db.Column(db.String(64), unique=True)
    password_hash = db.Column(db.String(128))
    flames = db.relationship('Flame', backref='user', lazy='dynamic')
        
class UserSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    username = fields.String()
    email = fields.Email()
    flames = fields.Nested('FlameSchema', exclude=['user'], many=True)
        
class Flame(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(140))
    pub_date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __init__(self, text, user_id, pub_date=None):
        self.text = text
        if pub_date is None:
            self.pub_date = datetime.utcnow()
        self.user_id = user_id

class FlameSchema(Schema):
    id = fields.Integer()
    text = fields.String()
    pub_date = fields.DateTime()
    user = fields.Nested('UserSchema', only=['id'])

class Users(Resource):
    def get(self):
        return jsonify({'user': [UserSchema().dump(i).data for i in User.query.all()]})
        
class UsersId(Resource):
    def get(self, user_id):
        return jsonify({'user': UserSchema().dump(User.query.get(user_id)).data})
        
class Flames(Resource):
    def post(self):
        flame = request.json['flame']
        f = Flame(text=flame['text'], user_id=1)
        db.session.add(f)
        db.session.commit()
        return 200
    def get(self):
        return jsonify({'flame': [FlameSchema().dump(i).data for i in Flame.query.all()]})
        
class FlamesId(Resource):
    def get(self, flame_id):
        return jsonify({'flame': FlameSchema().dump(Flame.query.get(flame_id)).data})
        
api.add_resource(Users, '/users')
api.add_resource(Flames, '/flames')
api.add_resource(UsersId, '/users/<int:user_id>')
api.add_resource(FlamesId, '/flames/<int:flame_id>')

if __name__ == "__main__":
    app.run(debug=True)