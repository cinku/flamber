from flask import Flask, send_from_directory, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
api = Api(app)
db = SQLAlchemy(app)

@app.route("/")
def index():
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
            'name': self.name,
            'username': self.username,
            'email': self.email
        }
        
class Flame(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(140))
    pub_date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class Users(Resource):
    def get(self):
        return jsonify({'user': [i.serialize for i in User.query.all()]})
        
api.add_resource(Users, '/users')

if __name__ == "__main__":
    app.run(debug=True)