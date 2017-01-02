from flask_restful import Resource
from app import api

class Users(Resource):
    # decorators = [jwt_required()]
    def get(self):
        return jsonify({'users': [UserSchema().dump(i).data for i in User.query.all()]})
        
    def post(self):
        username = request.json.get('username')
        password = request.json.get('password')
        email = request.json.get('email')
        if username is None or password is None or email is None:
            return 400
        if User.query.filter_by(username = username).first() is not None:
            return 400
        user = User(username = username, email = email)
        user.hash_password(password)
        db.session.add(user)
        db.session.commit()
        return 200
        
class UsersId(Resource):
    def get(self, user_id):
        return jsonify({'user': UserSchema().dump(User.query.get(user_id)).data})

api.add_resource(Users, '/users')
api.add_resource(UsersId, '/users/<int:user_id>')