from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    primer_nombre=db.Column(db.String(50),nullable=False)
    apellidos=db.Column(db.String(80),nullable=False)
    numero_telefonico=db.Column(db.String(120), unique=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(100), unique=False, nullable=False)
    codigo_password=db.Column(db.Integer)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            'primer_nombre':self.primer_nombre,
            'apellidos':self.apellidos,
            'numero_telefonico':self.numero_telefonico
            # do not serialize the password, its a security breach
        }
class Especialistas(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(150),nullable=False)
    especialidad=db.Column(db.String(50),nullable=False)
    ubicacion=db.Column(db.String(200))
    numero_telefonico=db.Column(db.String(120), unique=False, nullable=False)
    detalles=db.Column(db.String(500))
    imagen=db.Column(db.String(1000))

    def __repr__(self):
        return '<Especialistas %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            'especialidad':self.especialidad,
            'numero_telefonico':self.numero_telefonico,
            'detalles':self.detalles,
            'imagen':self.imagen,
            'ubicación':self.ubicacion
        }