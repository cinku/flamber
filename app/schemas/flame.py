from marshmallow import Schema, fields

class FlameSchema(Schema):
    id = fields.Integer()
    text = fields.String()
    pub_date = fields.DateTime()
    user = fields.Nested('UserSchema', only=['id'])