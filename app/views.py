from app import app
from flask import render_template, send_from_directory

@app.route('/')
def index():
    return app.send_static_file('dist/index.html')

@app.route('/<path:path>')
def static_files(path):
    return app.send_static_file('dist/' + path)