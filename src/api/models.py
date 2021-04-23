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
    testimonios = db.relationship('Testimonio', lazy=True, backref='user')

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            'primer_nombre':self.primer_nombre,
            'apellidos':self.apellidos,
            'numero_telefonico':self.numero_telefonico,
            'testimonios':list(map(lambda testimonio:testimonio.serialize(),self.testimonios))
            # do not serialize the password, its a security breach
        }
class Testimonio(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    usuario_id=db.Column(db.Integer, db.ForeignKey(User.id))
    experiencia=db.Column(db.String(1000))
    multimedia=db.Column(db.String(1000))

    def __repr__(self):
        return '<Testimonio %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "experiencia":self.experiencia,
            'multimedia':self.multimedia
        }
class Especialistas(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(150),nullable=False)
    apellido=db.Column(db.String(150),nullable=False)
    especialidad=db.Column(db.String(50),nullable=False)
    ubicacion=db.Column(db.String(200))
    provincia=db.Column(db.String(100))
    numero_telefonico=db.Column(db.String(120), unique=False, nullable=False)
    detalles=db.Column(db.String(500))
    imagen=db.Column(db.String(1000))
    comentarios=db.relationship('ComentarioEspecialista', lazy=True)
    def __repr__(self):
        return '<Especialistas %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            'especialidad':self.especialidad,
            "apellido":self.apellido,
            "provincia":self.provincia,
            'numero_telefonico':self.numero_telefonico,
            'detalles':self.detalles,
            'imagen':self.imagen,
            'ubicación':self.ubicacion,
            'comentarios':list(map(lambda comentario:comentario.serialize(),self.comentarios))
        }
class ComentarioEspecialista(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    cliente_id=db.Column(db.Integer, db.ForeignKey(User.id))
    experto_id=db.Column(db.Integer, db.ForeignKey(Especialistas.id))
    comentario=db.Column(db.String(1000))
    
    def __repr__(self):
        return '<ComentarioEspecialista %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "cliente_id": self.cliente_id,
            "experto_id":self.experto_id,
            "comentario":self.comentario
        }


