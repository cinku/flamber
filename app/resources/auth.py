from flask_restful import Resource
from flask import request, json, jsonify, make_response
from app import api

class Auth(Resource):
    def post(self):
        username = request.json.get('username')
        password = request.json.get('password')
        user = authenticate(username, password)
        print('hello')
        if user is not None:
            #token = user.generate_auth_token()
            #return make_response(jsonify({'auth_token': token.decode('ascii')}), 200)
            return make_response(jsonify({'auth_token': 'dummy_token', 'success': 'true'}), 200)
        return 401 

def authenticate(username, password):
    if username == 'testUser' and password == '1':
        return True
    else:
        return None

api.add_resource(Auth, '/login')