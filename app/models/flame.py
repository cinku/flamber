from app import db
from datetime import datetime

class Flame(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(140))
    pub_date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __init__(self, text, user_id, pub_date=None):
        self.text = text
        if pub_date is None:
            self.pub_date = datetime.utcnow()
        self.user_id = user_id