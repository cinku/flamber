from flask import Flask, send_from_directory, jsonify, request, g, render_template, make_response
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
# from marshmallow import Schema, fields
# from datetime import datetime
# from passlib.apps import custom_app_context as pwd_context
# from flask.ext.httpauth import HTTPBasicAuth
# from itsdangerous import (TimedJSONWebSignatureSerializer
                        #   as Serializer, BadSignature, SignatureExpired)
# from flask_jwt import JWT, jwt_required, current_identity
# import jwt

app = Flask(__name__)
app.config.from_object('config')
api = Api(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)

from app import views
from app.models import user, flame
from app.schemas import user, flame
from app.resources import users, flames
    
# @auth.verify_password
# def verify_password(username_or_token, password):
#     user = User.query.filter_by(username = "asd").first()
#     g.user = user
#     return True

# def authenticate(username, password):
#     user = User.query.filter_by(username=username).first()
#     if not user or not user.verify_password(password):
#         return None
#     # g.user = user
#     return user

# def identity(payload):
#     user_id = payload['identity']
#     return User.query.filter_by(id=user_id).first()
    
#jwt = JWT(app, authenticate, identity)
        
       

# class Auth(Resource):
#     def post(self):
#         username = request.json.get('username')
#         password = request.json.get('password')
#         user = authenticate(username, password)
#         if user is not None:
#             token = user.generate_auth_token()
#             return make_response(jsonify({'token': token.decode('ascii')}), 200)
#         return 401
        
# api.add_resource(Auth, '/auth/login')