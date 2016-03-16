from flask import Flask, send_from_directory
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

@app.route("/")
def index():
    return send_from_directory('static', 'index.html')
    
class User(Resource):
    def get(self):
        return {'hello': 'world'}
        
api.add_resource(User, '/user')

if __name__ == "__main__":
    app.run(debug=True)