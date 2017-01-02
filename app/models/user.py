from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    username = db.Column(db.String(64), unique=True)
    email = db.Column(db.String(64), unique=True)
    password_hash = db.Column(db.String(128))
    flames = db.relationship('Flame', backref='user', lazy='dynamic')
    
    # def hash_password(self, password):
    #     self.password_hash = pwd_context.encrypt(password)
        
    # def verify_password(self, password):
    #     return pwd_context.verify(password, self.password_hash)
        
    # def generate_auth_token(self):
    #     #s = Serializer(app.config['SECRET_KEY'])
    #     payload = {'id': self.id, 'name': self.name, 'email': self.email}
    #     return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
    #     #return s.dumps({'id': self.id, 'name': self.name, 'email': self.email})