from app import app
from flask import render_template

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    #return app.send_static_file('sdist/index.html')
    return render_template('index.html')