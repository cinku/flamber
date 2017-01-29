from marshmallow import Schema, fields
        
class UserSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    username = fields.String()
    email = fields.Email()
    flames = fields.Nested('FlameSchema', exclude=['user'], many=True)
        