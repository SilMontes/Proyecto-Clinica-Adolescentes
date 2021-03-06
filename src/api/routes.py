"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import re
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Especialistas,Testimonio,ComentarioEspecialista,ExpertosFavoritos
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash ##HASH
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required ##TOKEN
import datetime 
import random
import smtplib
import time


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
    'ubicacion':'Consultorio Médico La Florida',
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
#-----------------------------------------------------
@api.before_app_first_request
def agregar_usuarios():
    usuarios=[
        {"primer_nombre":"Kloe","apellidos":"Durand","numero_telefonico":"82345678","email": "kloe@gmail.com","password":"Test123@"},
        {"primer_nombre":"Emily","apellidos":"Moreau ","numero_telefonico":"72345678","email": "Emily@gmail.com","password":"Test123@"},
        {"primer_nombre":"Luis","apellidos":"Adams","numero_telefonico":"62345678","email": "Jessica@gmail.com","password":"Test123@"},
        {"primer_nombre":"Jessica","apellidos":"Gagnon","numero_telefonico":"72345678","email": "Calista@gmail.com","password":"Test123@"},
        {"primer_nombre":"José","apellidos":"Rojas","numero_telefonico":"62345678","email": "Priya@gmail.com","password":"Test123@"},
    ]
    usuarios_existentes=User.query.all()
    todos_usuarios=list(map(lambda usuario:usuario.serialize(),usuarios_existentes))
    if todos_usuarios==[]:
        for persona in usuarios:
            nuevoUsuario=User(primer_nombre=persona['primer_nombre'],apellidos=persona['apellidos'],numero_telefonico=persona['numero_telefonico'],email=persona['email'],password=generate_password_hash(persona['password']),is_active=True)
            db.session.add(nuevoUsuario)
        db.session.commit()
@api.before_app_first_request
def agregar_testimonio():
    fecha=time.strftime("%d/%m/%Y")
    testimonios=[
        {"usuario_id":"1",
        "experiencia":"Cuando empecé a desarrollar ansiedad, me sentía excesivamente cohibida en los espacios públicos. Los pensamientos empezaban a correr por mi cabeza y me desorientaba si no podía calmarme. Pronto empecé a experimentar ataques de pánico en el día a día. Mi ansiedad hacía que me diera miedo estar con otros y a veces incluso estar sola, porque estar sola significaba estar a solas con mis pensamientos. Conforme crecí, con la ayuda de un terapeuta, aprendí a lidiar con ello. Todavía tengo malos días, pero ¡ahora sé cómo vivir con ello!",
        "titulo":"Estar solo tampoco ayuda",
        "multimedia":"https://image.freepik.com/vector-gratis/foto-perfil-personaje-dibujos-animados-avatar-mujer-joven_18591-55054.jpg"},
        {"usuario_id":"2",
        "experiencia":"Mi madre sufre desorden bipolar, ansiedad, depresión y alcoholismo. Cuando empecé la universidad empecé a tener ataques de pánico y de ansiedad, sobre todo después de las elecciones (estudio ciencias políticas), Como estaba familiarizada con las enfermedades mentales, pude darme cuenta de que la ansiedad que sufría no era terrible y recibí la ayuda que necesitaba. Quiero que la gente entienda que no debe haber prejuicios por sufrir de enfermedades mentales, así estas enfermedades podrían ser abordadas y tratadas",
        "titulo":"No debería haber prejuicios",
        "multimedia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qejyRY3t1rr57OxaHTG-6NWeXnfFs_IIfA&usqp=CAU"},
        {"usuario_id":"3",
        "experiencia":"Desarrollé un desorden de ansiedad cuando tenía 14 años. Empecé a sufrir ataques de ansiedad cuando estudiaba para los exámenes de mates. Fui haciendo terapia intermitentemente durante dos años, y hace poco empecé a tomar medicación para la ansiedad que me ha estado ayudando bastante. Me daba miedo tomar medicación porque no quería que me etiquetaran como una loca o que la gente me juzgara por ello. ¡Pero a quién le importa! Mi lucha todavía no ha terminado, pero estoy mucho mejor",
        "titulo":"La terapia y la medicación pueden ayudar mucho",
        "multimedia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PdCfzNscvmhXtdqwoVhwcvB1-4hIGcdqHA&usqp=CAU"},
        {"usuario_id":"4",
        "experiencia":"En 2005 me diagnosticaron una afección estomacal poco común llamada gastroparesis, lo que supone que mis músculos estomacales están básicamente paralizados. Empecé a experimentar fuertes ataques de ansiedad y tenía miedo de tener náuseas en público. Los sentimientos fueron creciendo hasta que dejé la universidad y mi trabajo y me aislé en casa. Finalmente, mi madre me arrastró a ver a un psicólogo que me hacía terapia de dos a tres veces a la semana durante algunos meses  además, un psiquiatra me recetó algunos medicamentos. Sólo han pasado unos meses y ya estoy haciendo cosas que nunca imaginé que haría. He vuelto a la universidad, me he vuelto a enamorar de la comida, Aún sufro ansiedad y todavía tengo algunos días difíciles, pero soy más feliz de lo que he sido nunca",
        "titulo":"Puede hacer que lo dejes todo",
        "multimedia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FGqhqoKBnA16ort-qgoSz6EgdD35mXdTGA&usqp=CAU"},
        {"usuario_id":"5",
        "experiencia":"Debido a mi desorden de bipolaridad que derivó en ansiedad, y tengo que vivir una vida muy estructurada. Tomo mi medicación por la mañana con el desayuno y no me lo puedo saltar ni un día, apenas bebo, y necesito de 8 a 10 horas de sueño cada noche. Solía pensar que me hacía una persona aburrida en comparación con mi anterior estilo de vida, caracterizado por una gran impulsividad, fiesta, bebiendo alcohol y tomando drogas, pero echando la vista atrás estoy significativamente más sana y feliz por los cambios que he hecho. Mis amigos y familia han sido geniales conmigo en cuanto a mi condición, ofreciéndome apoyo y cariño incondicionales y me siento enormemente afortunada por ello",
        "titulo":"Quizás debas hacer cambios en tu vida para recuperarte",
        "multimedia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZri1QlXqnGchWkz3rYOtcv_Pb0uWaiz8eA&usqp=CAU"},
    ]
    
    testimonios_agregados=Testimonio.query.all()
    todos_testimonio=list(map(lambda testimonio:testimonio.serialize(),testimonios_agregados))
    if todos_testimonio==[]:
        for testimonio in testimonios:
            nuevoTestimonio=Testimonio(usuario_id=testimonio['usuario_id'],experiencia=testimonio['experiencia'],fecha=fecha,titulo=testimonio['titulo'],multimedia=testimonio['multimedia'])
            db.session.add(nuevoTestimonio)
        db.session.commit()

#------------------------ OBTENER TODOS LOS ESPECIALISTAS ---------------------------------------------------------------------------
@api.route('/especialistas',methods=['GET'])
def obtener_especialistas():
    especialistas = Especialistas.query.all()
    lista_especialistas = list(map(lambda especialista:especialista.serialize(),especialistas))
    
    usuarios=User.query.all()
    lista_usuarios=list(map(lambda usuario:usuario.serialize(),usuarios))
    for elemento in lista_especialistas:
        for comentario in elemento['comentarios']:
            for persona in lista_usuarios:
                if persona['id']==comentario['cliente_id']:
                    comentario['nombre_cliente']=persona['primer_nombre']+' '+persona['apellidos']

    return jsonify(lista_especialistas),200

#
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

    return jsonify('Inicio de sesión exitoso', {'token':access_token, 'id_usuario':usuario.id,'nombre':usuario.primer_nombre}),200
#---------- Recuperar Contraseña -----------------------------------
def mail(asunto,mensaje,correo):
    email='emailproyecto2021@gmail.com'
    message=mensaje
    subject=asunto
    message='Subject:{}\n\n{}'.format(subject,message)
    server=smtplib.SMTP('smtp.gmail.com',587)

    server.ehlo()
    server.starttls()
    server.login('','')
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

#------------------------------    OBTENER TESTIMONIOS --------
@api.route('/testimonios',methods=['GET'])
def obtener_testimonios():
    usuarios=User.query.all()
    lista_usuarios=list(map(lambda usuario:usuario.serialize(),usuarios))
    lista_testimonios=[]
    for elemento in lista_usuarios:
        if elemento['testimonios'] != []:
            for datos in elemento['testimonios']:
                lista_testimonios.append({'experiencia':datos['experiencia'],'titulo':datos['titulo'],'imagen':datos['multimedia'],'nombre':elemento['primer_nombre'],'fecha':datos['fecha']})
    return jsonify(lista_testimonios),200
#-- NUEVO TESTIMONIO ------------------------
@api.route('/nuevotestimonio',methods=['POST'])
@jwt_required()
def nuevo_testimonio():
    usuario_activo = get_jwt_identity()
    usuario = User.query.filter_by(id=usuario_activo).first()
    fecha=time.strftime("%d/%m/%Y")

    if not usuario:
        return jsonify({"msg":"No estás autorizado para realizar esta acción"}),401
    nuevoTestimonio=request.get_json()
    experiencia = nuevoTestimonio['experiencia']
    titulo=nuevoTestimonio['titulo']
    multimedia=nuevoTestimonio['multimedia']
    if multimedia=='':
        multimedia="https://thumbs.dreamstime.com/b/icono-del-usuario-aislado-en-el-fondo-gris-124431291.jpg"
    if experiencia == '' or titulo == '':
        return jsonify({'msg':"Los campos titulo y experiencia son requeridos"}),404
    else:
        nuevoRelato=Testimonio(usuario_id=usuario.id,experiencia=experiencia,fecha=fecha,titulo=titulo,multimedia=multimedia)
        db.session.add(nuevoRelato)
        db.session.commit()
        return jsonify(nuevoRelato.serialize()), 200
    
#----------------- Modificar perfil-----------
@api.route('/usuario/ajustes',methods=['PUT'])
@jwt_required()
def modificar_perfil():
    usuario_activo=get_jwt_identity()
    usuario=User.query.filter_by(id=usuario_activo).first()

    mensajes_error=[]
    if usuario is None:
        mensajes_error.append({'msg':'No está autorizado para modificar este perfil'})
        return jsonify(mensajes_error),401
    solicitud_ajustes=request.get_json()
    if solicitud_ajustes == {}:
        mensajes_error.append({'msg':'Debe ingresar su nombre, apellidos y correo electrónico'})
        return jsonify(mensajes_error),400

    if 'primer_nombre' in solicitud_ajustes:
        if solicitud_ajustes['primer_nombre']=='':
            mensajes_error.append({"msg":"Debe especificar su nombre"})
            return jsonify(mensajes_error),400
        else:
            usuario.primer_nombre = solicitud_ajustes['primer_nombre']

    if 'apellidos' in solicitud_ajustes:
        if solicitud_ajustes['apellidos']=='':
            mensajes_error.append({"msg":"Debe especificar sus apellidos"})
            return jsonify(mensajes_error),400
        else:
            usuario.apellidos = solicitud_ajustes['apellidos']
    if 'numero_telefonico' in solicitud_ajustes:
        usuario.numero_telefonico = solicitud_ajustes['numero_telefonico']

    if 'email' in solicitud_ajustes:
        if solicitud_ajustes['email']=='':
            mensajes_error.append({"msg":"El email es requerido"})
            return jsonify(mensajes_error),400

        else:
            email_en_uso= User.query.filter_by(email=solicitud_ajustes['email']).first() 
            if email_en_uso:  
                if solicitud_ajustes['email'] == usuario.email: 
                    usuario.email =  solicitud_ajustes['email']
                else:
                    mensajes_error.append({"msg":"Este email está siendo usuado. Por favor, elija otro."})
                    return jsonify(mensajes_error),400

            else:
                if not re.match('^[(a-z0-9\_\-\.)]+@[(a-z0-9\_\-\.)]+\.[(a-z)]{2,15}$',solicitud_ajustes['email'].lower()):
                    mensajes_error.append({'msg':'Ingrese un formato valido para su dirección email'})
                    return jsonify(mensajes_error),400

                else:
                    usuario.email = solicitud_ajustes['email']
    
    db.session.commit()
    return jsonify('Successfully Updated', usuario.serialize()), 200

#----- Cambiar Contraseña
@api.route('/actualizar_contraseña',methods=['PUT'])
@jwt_required()
def actualizar_contraseña():
    usuario_activo=get_jwt_identity()
    usuario=User.query.filter_by(id=usuario_activo).first()
    actualContraseña=request.json.get('actualContraseña', None)
    confirmarContraseña=request.json.get('confirmarContraseña', None)
    nueva=request.json.get('nueva', None)
    if not usuario:
        return jsonify({'msg':'No se le permite realizar esta acción'}),401
    solicitud_cambiar=request.get_json()

    if solicitud_cambiar == {} or not actualContraseña or not nueva:
        return jsonify({'msg':'Todos los campos son requerido'}),404
        
    if not check_password_hash(usuario.password,actualContraseña):
        return jsonify({'msg':'Contraseña incorrecta'}),404
    else:
        if nueva != confirmarContraseña:
            return jsonify({'msg':'Ambas contraseñas deben ser iguales'}),404
        else:
            if not re.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[^\n\t]{8,20}$', nueva):
                return jsonify({'msg':'Su contraseña debe contener: una letra mayúscula, una minúcula, un caracter especial y una longitud mínima de 8 caracteres'}),400
            else:
                encrypted_password=generate_password_hash(nueva)
                usuario.password = encrypted_password
            db.session.commit()
    return jsonify({'msg':'Su contraseña se actualizó correctamente'}),200
#------------ crear comentario ---------------------
@api.route('/comentario/experto',methods=['POST'])
@jwt_required()
def comentar_sobre_experto():
    usuario_activo=get_jwt_identity()
    solicitud = request.get_json()
    fecha=time.strftime("%d/%m/%Y")
    usuario=User.query.filter_by(id=usuario_activo).first()
    if not usuario:
        return jsonify({"msg":"No estás autorizado para realizar esta acción"}),401
    nuevo_comentario=request.json.get("comentario", None)

    if not nuevo_comentario:
        return jsonify({"msg":"Por favor, escriba su comentario."}),400
    else:
        agregarComentario=ComentarioEspecialista(cliente_id=usuario.id,experto_id=solicitud['experto_id'],fecha=fecha,comentario=nuevo_comentario)
        db.session.add(agregarComentario)
        db.session.commit()
        return jsonify(agregarComentario.serialize()), 200
#------------ Eliminar Testimonio---------------
@api.route('/eliminar/tetimonio/<int:testimonio_id>',methods=['DELETE'])
@jwt_required()
def eliminar_testimonio(testimonio_id):
    usuario_activo = get_jwt_identity()
    usuario = User.query.filter_by(id=usuario_activo).first()
    elemento_eliminar=Testimonio.query.filter_by(usuario_id=usuario_activo,id=testimonio_id).first()

    if elemento_eliminar is None:
        return jsonify('Elemnto no encontrado'),404
    else:
        db.session.delete(elemento_eliminar)
        db.session.commit()
    return jsonify('Eliminado',elemento_eliminar.serialize()),200

#-------------- Eliminar Comentario -------------
@api.route('/eliminar/comentario/<int:comentario_id>',methods=['DELETE'])
@jwt_required()
def eliminar_comentario(comentario_id):
    usuario_activo = get_jwt_identity()
    usuario = User.query.filter_by(id=usuario_activo).first()
    elemento_eliminar=ComentarioEspecialista.query.filter_by(cliente_id=usuario_activo,id=comentario_id).first()

    if elemento_eliminar is None:
        return jsonify('Elemento no encontrado'),404
    else:
        db.session.delete(elemento_eliminar)
        db.session.commit()
    return jsonify('Eliminado',elemento_eliminar.serialize()),200

#-------------- OBTENER COMENTARIOS DE USUARIO --------------------
@api.route('/usuario/obtener_comentarios',methods=['GET'])
@jwt_required()
def obtener_comentarios_usuario():
    usuario_activo = get_jwt_identity()
    usuario = User.query.filter_by(id=usuario_activo).first()
    
    comentarios=ComentarioEspecialista.query.all()
    lista_comentarios=list(map(lambda comentario:comentario.serialize(),comentarios))
    
    especialistas = Especialistas.query.all()
    lista_especialistas = list(map(lambda especialista:especialista.serialize(),especialistas))

    comentarios_usuario=[]
    for elemento in lista_comentarios:
        if elemento['cliente_id'] == usuario.id:
            comentarios_usuario.append(elemento)
    for elemento in comentarios_usuario:
        for persona in lista_especialistas:
            if elemento['experto_id']==persona['id']:
                elemento['nombre_experto']=persona['nombre']+' '+persona['apellido']
                elemento['imagen_experto']=persona['imagen']
                elemento['numero_telefonico']=persona['numero_telefonico']
    

    return jsonify(comentarios_usuario),200

#-------- obtener favoritos de persona----------------
@api.route('/usuario/obtener_favoritos',methods=['GET'])
@jwt_required()
def obtener_favoritos_usuario():
    usuario_activo = get_jwt_identity()
    usuario = User.query.filter_by(id=usuario_activo).first()
    
    favoritos = ExpertosFavoritos.query.filter_by(cliente_id=usuario.id)
    todos_favoritos = list(map(lambda favorito: favorito.serialize(), favoritos))

    especialistas = Especialistas.query.all()
    lista_especialistas = list(map(lambda especialista:especialista.serialize(),especialistas))
    
    regresar_favoritos=[]
    for favorito in todos_favoritos:
        for persona in lista_especialistas:
            if persona['id'] == favorito['experto_id']:
                persona['favorito_id']=favorito['id']
                regresar_favoritos.append(persona)

    return jsonify(regresar_favoritos),200

#------------ Agregar Experto Favorito
@api.route('usuario/nuevo_favorito',methods=['POST'])
@jwt_required()
def agregar_nuevo_favorito():
    usuario_activo = get_jwt_identity()
    usuario = User.query.filter_by(id=usuario_activo).first()
    if not usuario:
        return jsonify({"msg":"No eres un suario registrado"}),401

    nuevoFavorito = request.get_json()

    if nuevoFavorito == '' or nuevoFavorito == {}:
        return jsonify({'msg':'No podemos aceptar su solicitud'}),404
    if nuevoFavorito['experto_id']=='':
        return jsonify({"msg":"Especifica tu favorito"}),400

    favoritos = ExpertosFavoritos.query.filter_by(cliente_id=usuario.id)
    favoritos_existentes = list(map(lambda favorito: favorito.serialize(), favoritos))
    
    for elemento in favoritos_existentes:
        if int(nuevoFavorito['experto_id'])==elemento['experto_id']:
            return jsonify({'msg':'Este elemeto ya se encuantra entre sus favoritos'}),400
    
    nuevoFavoritoElemento=ExpertosFavoritos(cliente_id=usuario.id,experto_id=nuevoFavorito['experto_id'])
    db.session.add(nuevoFavoritoElemento)
    db.session.commit()
    return jsonify(nuevoFavoritoElemento.serialize()), 200
##-------- Eliminar favorito -----------------
@api.route('eliminar/favorito/<int:favorito_id>',methods=['DELETE'])
@jwt_required()
def eliminar_favorito(favorito_id):
    usuario_activo=get_jwt_identity()
    elemento_eliminar=ExpertosFavoritos.query.filter_by(cliente_id=usuario_activo,id=favorito_id).first()

    if elemento_eliminar is None:
        return jsonify('Elemento no encintrado'),404
    else:
        db.session.delete(elemento_eliminar)
        db.session.commit()
    return jsonify('Successfuly deleted',elemento_eliminar.serialize()),200
    
