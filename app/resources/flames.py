from flask_restful import Resource
from app import api

class Flames(Resource):
    # decorators = [jwt_required()]
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
        return jsonify({'flames': FlameSchema().dump(Flame.query.get(flame_id)).data})
        
    def delete(self, flame_id):
        f = Flame.query.get(flame_id)
        db.session.delete(f)
        db.session.commit()
        return 200

api.add_resource(Flames, '/flames')
api.add_resource(FlamesId, '/flames/<int:flame_id>')