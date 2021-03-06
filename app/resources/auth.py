from flask_restful import Resource, abort
from flask import request, json, jsonify, make_response
from app import api
from app.models.user import User
from app.schemas.user import UserSchema
from flask_jwt_extended import create_access_token

class Auth(Resource):
    def post(self):
        username = request.json.get('username')
        password = request.json.get('password')
        user = authenticate(username, password)
        if user is not None:
            #token = user.generate_auth_token()
            #return make_response(jsonify({'auth_token': token.decode('ascii')}), 200)
            return make_response(jsonify({'auth_token': create_access_token(identity=username), 'success': 'true', 'profile': UserSchema().dump(user).data}), 200)
        return abort(401, error="user not found")

def authenticate(username, password):
    user = User.query.filter_by(username=username).first()
    if not user or not user.verify_password(password):
        return None
    return user

# def identity(payload):
#     user_id = payload['identity']
#     return User.query.filter_by(user_id=user_id).first()

api.add_resource(Auth, '/login')