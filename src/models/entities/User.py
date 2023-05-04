
#-----------------------------------------------------
#Sección donde importaremos Modulos, Instancias y variables, que utilizaresmos.
#-----------------------------------------------------
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin

#Definimos la clase user, con los parametros de userMixin, para autentificar aal usuario.
class User(UserMixin):
    #Utilizamos el metodo __init__, para poder instanciar la función de manera rapida y facil.

    #Esta función nos brinda las funcionalidad de los atributos del usuario.
    def __init__(self, id, NDI, password, fullname= "" ) -> None:
        self.id = id
        self.NDI = NDI
        self.password = password
        self.fullname = fullname

    @classmethod
    def check_password(self, hashed_password, password):
        return check_password_hash(hashed_password, password)

#print(generate_password_hash("12345"))
#pbkdf2:sha256:600000$4KEC0m5pbovSRyDe$2a3cc99f49180b6c63acfa1126ef7ced7c8554ad9112f1aff2a58ded9b25000c