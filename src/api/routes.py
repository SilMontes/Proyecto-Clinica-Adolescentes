"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Especialistas
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash ##HASH
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required ##TOKEN
import datetime 
import random
import smtplib


api = Blueprint('api', __name__)

#-----------------------------------------------
@api.before_app_first_request
def agregar_especialistas():
    especialistas=[
    {'nombre':'Alejandro',
    'apellido':'Villalobos',
    'especialidad':'Psicología',
    'ubicacion':'Consultorio Médico Corella',
    "provincia":' Alajuela',
    'telefono':'60869050',
    'imagen':'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg',
    'detalles':'Como psicólogo quiero acompañarte tu proceso terapéutico y enseñarte una nueva filosofía de vida que nos permita sacarle el jugo a la vida y vivir más plena y significativamente en conjunto con los altibajos naturales de la vida.'},
    {'nombre':'Adrián',
    'apellido':'Gutiérrez',
    'especialidad':'Psicólogía',
    'ubicacion':'Consultorio Médico Dra Melissa Alfaro',
    'provincia':'San José',
    'telefono':'60869050',
    'imagen':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaDXNpriR-N8OerqKMiYMqKGp_ncnbrdoJA&usqp=CAU',
    'detalles':'Amar lo que hago y hacer lo que amo, representa mi trabajo. Mi objetivo es acompañar a mis pacientes en la eliminación de la ansiedad, por medio del  autoconocimiento y la gestión de sus emociones.'},
    {'nombre':'Vanessa',
    'apellido':'López',
    'especialidad':'Dermatología',
    'provincia':'San José',
    'ubicacion':'Consultorio Médico La Florida,
    'telefono':'60869050',
    'imagen':'https://image.freepik.com/vector-gratis/perfil-avatar-mujer-icono-redondo_24640-14042.jpg',
    'detalles':'Ser psicóloga no es solo mi trabajo, es parte de quien soy, siento mucha pasión y amor por lo que hago, y trato de brindar a los demás lo que la psicología me ha brindado a mi.'},
    {'nombre':'Carmen',
    'apellido':'Villalobos',
    'especialidad':'Psiquiatría',
    'ubicacion':'Laboratorios Jackson Naranjo',
    "provincia":'Alajuela',
    'telefono':'60869050',
    'imagen':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIAsNyRHBPtTu4PIUiEtqG7gfXjfyqEtcfHzV2JYMtWdRiv4WH9id9VdMmDtaLO8F6EY&usqp=CAU',
    'detalles':'Mi objetivo es brindar una atención profesional seria basada en la evidencia científica sin dejar de lado la dimensión humana en la relación terapéutica.'},
    {'nombre':'Adrián',
    'apellido':'Solís',
    'especialidad':'Orientador',
    'ubicacion':'Consultorio Dra. Raquel Ríos Carranza',
    'provincia':'Heredia',
    'telefono':'60869050',
    'imagen':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQdMaIJtfdYVR0fJK7ok7lgdz23YYuB5vrsyhjIN3bSOGf2SaQfMijYZHAe1ygsXn49k&usqp=CAU',
    'detalles':'Como psicólogo quiero acompañarte tu proceso terapéutico y enseñarte una nueva filosofía de vida que nos permita sacarle el jugo a la vida y vivir más plena y significativamente en conjunto con los altibajos naturales de la vida.'},
    {'nombre':'María',
    'apellido':'Vásquez',
    'especialidad':'orientadora',
    'ubicacion':'Vitaliza Consultorios Médicos',
    'provincia':'Limón',
    'telefono':'60869050',
    'imagen':'https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png',
    'detalles':'Ser psicóloga no es solo mi trabajo, es parte de quien soy, siento mucha pasión y amor por lo que hago, y trato de brindar a los demás lo que la psicología me ha brindado a mi.'}
    ]
    grupo_especialistas=Especialistas.query.all()
    todos_especialistas=list(map(lambda persona:persona.serialize(),grupo_especialistas))
    if todos_especialistas == []:
        for elemento in especialistas:
            nuevoEspecialista=Especialistas(nombre=elemento['nombre'],apellido=elemento['apellido'],provincia=elemento['provincia'],especialidad=elemento['especialidad'],ubicacion=elemento['ubicacion'],numero_telefonico=elemento['telefono'],detalles=elemento['detalles'],imagen=elemento['imagen'])
            db.session.add(nuevoEspecialista)
        db.session.commit()

#------------------------ OBTENER TODOS LOS ESPECIALISTAS ---------------------------------------------------------------------------
@api.route('/especialistas',methods=['GET'])
def obtener_especialistas():
    especialistas = Especialistas.query.all()
    lista_especialistas = list(map(lambda especialista:especialista.serialize(),especialistas))
    return jsonify(lista_especialistas),200

#-------------------- OBTENER ESPECIALISTA POR NOMBRE ----------------------
@api.route('/especialista/<string:nombre>',methods=['GET'])
def obtener_especialista_nombre(nombre):
    especialistas = Especialistas.query.all()
    lista_especialistas = list(map(lambda especialista:especialista.serialize(),especialistas))
    especialistas_encontrados=[]
    for persona in lista_especialistas:
        if nombre in persona['nombre']:
            especialistas_encontrados.append(persona)
    print(especialistas_encontrados)
    return jsonify(especialistas_encontrados),200

#----------------------  obtener todos los usuarios ----------------------------------------------------------------------------------------------------
@api.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    usuarios=User.query.all()
    lista_usuarios=list(map(lambda usuario:usuario.serialize(),usuarios))

    return jsonify(lista_usuarios),200

# Obtener un usuario específico  -------------------------------------------------------------
@api.route('/usuario/<int:usuario_id>', methods=['GET'])
def obtener_usuario(usuario_id):
    usuario_especifico = User.query.get(usuario_id)

    if usuario_especifico is None:
        return jsonify('Este usuario no existe'),404
    else:
        return jsonify(usuario_especifico.serialize()), 200  

# Registrarse ----------------------------------------------------------------------
@api.route('/registrarse', methods=['POST'])
def create_user():

    datos_solicitud = request.get_json()
    primer_nombre = request.json.get("primer_nombre", None)
    apellidos = request.json.get("apellidos", None)
    email = request.json.get("email", None)
    password = request.json.get("contraseña", None)
    consfirmar_contraseña=request.json.get("confirmar_Contraseña", None)
    numero_telefonico=request.json.get('numero_telefonico',None)
    mensajes_error=[]

    if not primer_nombre:
        mensajes_error.append({"msg":"Ingrese su nombre completo"}), 400
    if not apellidos:
        mensajes_error.append({"msg":"Ingrese sus apellidos"}), 400
    if not email:
        mensajes_error.append({"msg":"Ingrese su email"}), 400
    if not password:
        mensajes_error.append({"msg":"Por favor, cree una contraseña"}), 400
    if password != consfirmar_contraseña:
        mensajes_error.append({"msg":"La contraseña y la contraseña de confirmación debe ser iguales"}), 400

    if len(mensajes_error) >0:
        return jsonify(mensajes_error),400
    # verificando el formato del email y la contraseña
    if not re.match('^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,8}$',email.lower()):
        mensajes_error.append({'msg':'Enter a valid email format'}),400
    elif not re.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[^\n\t]{8,20}$', password):
        mensajes_error.append({'msg':'Su contraseña debe contener al menos una letra mayúscula, una letra minúscula, un caracter especial y una longitud mínima de 8 caracteres'}),400
    
    if len(mensajes_error) >0:
        return jsonify(mensajes_error),400

    usuario_existente = User.query.filter_by(email=email).first()
    # asegurandose que el email sea único para cada usuario
    if usuario_existente:
        mensajes_error.append({"msg":"Por favor, elija un email diferente. El que ingresó ya está en uso"})
        return jsonify(mensajes_error),400
    
    #generando hash
    encrypted_password=generate_password_hash(password)

    usuario=User(primer_nombre=primer_nombre,apellidos=apellidos, email=email, password=encrypted_password,numero_telefonico=numero_telefonico, is_active=True)

    db.session.add(usuario)
    db.session.commit()

    return jsonify(datos_solicitud),200
        
#-------- Inicio de Sesión -------------------------------------------
@api.route('/iniciosesion', methods=['POST'])
def login():
    email=request.json.get('email', None)
    password=request.json.get('contraseña', None)

    errores_mensaje=[]
    if not email and not password:
        errores_mensaje.append({'msg':'El email y la contraseña son campos requeridos'}),400
    elif not email:
        errores_mensaje.append({'msg':'Por favor, ingrese su email'}),400
    elif not password:
        errores_mensaje.append({'msg':'La contraseña es requerida'}),400

    if len(errores_mensaje)>0:
        return jsonify(errores_mensaje),400
    #buscando el usuario por email
    usuario = User.query.filter_by(email=email).first()
    if not usuario:
        #user not found
        errores_mensaje.append({'msg': 'Dirección email incorrecta'})
    elif not check_password_hash(usuario.password,password):
        errores_mensaje.append({'msg': 'Contraseña incorrecta'})
    
    if len(errores_mensaje)>0:
        return jsonify(errores_mensaje),400
    #determinar tiempo de expiración
    expiracion = datetime.timedelta(days=2)
    #create token
    access_token = create_access_token(identity=usuario.id, expires_delta=expiracion)

    return jsonify('Inicio de sesión exitoso', {'token':access_token, 'id_usuario':usuario.id}),200
#---------- Recuperar Contraseña -----------------------------------
def mail(asunto,mensaje,correo):
    email='emailproyecto2021@gmail.com'
    message=mensaje
    subject=asunto
    message='Subject:{}\n\n{}'.format(subject,message)
    server=smtplib.SMTP('smtp.gmail.com',587)

    server.ehlo()
    server.starttls()
    server.login('emailproyecto2021@gmail.com','39K+@Came11i40')
    server.sendmail(email,correo,message)
    server.quit
#-----------------------------
@api.route('/recuperarcontraseña',methods=['POST'])
def restore_password():
    if request.method == 'POST':
        body = request.get_json()
        email = body.get('email')
        usuario = User.query.filter_by(email=email).first()
        if not usuario:
            return jsonify({'msg':'Asegurese de digitar correctamente su correco electrónico.'}),400
        usuario_info=usuario.serialize()
        code=round(random.random()*10000)
        usuario.codigo_password=code
        header="Codigo de recuperacion"
        container ="Hola"+" "+usuario_info['primer_nombre']+" "+usuario_info['primer_nombre']+"!"+"\n"+"Este es su codigo de seguridad: "+str(code)
        correo=email
        mail(header,container,correo)
        print(mail)
        db.session.add(usuario)
        db.session.commit()
        return jsonify('Hemos enviado un código de confirmación a su email'),200
#---------------------------------------------
@api.route('/codigo_usuario/<string:email>',methods=['POST'])
def user_verificacion(email):
    body=request.get_json()
    codigo=body.get('codigo')
    # email=body.get('email')
    usuario=User.query.filter(User.email==email).first()
    print(usuario)
    if usuario==None:
        return jsonify({'msg':'Acción imposible de ejecutar'}),404
    if codigo==usuario.codigo_password:
        return jsonify({"msg":"Código correcto","id":usuario.id}),200
    else:
        return jsonify({"msg":"Código incorrecto"}),404

@api.route('/usuario/nuevacontraseña/<int:id>',methods=['PUT'])
def pass_update(id):
    body=request.get_json()
    password=body.get("nuevaContraseña")
    confirm_password=body.get("confirmarNuevaContraseña")
    usuario=User.query.get(id)
    if usuario==None:
        return jsonify({"msg":"Ese usuario no existe"}),404
    if password=='':
        return jsonify({'msg':"Todos lo campos son requeridos"}),404
    if password != confirm_password:
        return jsonify({"msg":"Ambas contraseñas deben ser iguales"}),404

    if not re.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[^\n\t]{8,20}$',  password):
        return jsonify({'msg':'Su contraseña debe contener: una letra mayúscula, una minúcula, un caracter especial y una longitud mínima de 8 caracteres'}),400
    
    hashed_password = generate_password_hash( password)

    usuario.password = hashed_password
    usuario.code=None
    db.session.add(usuario)
    db.session.commit()
    return jsonify({"msg":"La contraseña se actualizó correctamente"}),200