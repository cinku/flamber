from flask import Flask, send_from_directory, jsonify, request, g, render_template, make_response
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

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
from app.resources import users, flames, auth