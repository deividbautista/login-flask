from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin


class User(UserMixin):

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