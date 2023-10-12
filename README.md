# login-flask
In the following repository we find the simple login development with the flask framework, to start managing data with python

## Requisitos previos

* Python [python download](https://www.python.org/downloads/release/python-31010/)

<HR>

# Important commands:

## Para intalar flask en el sistema operativo windows

"pip install flask"

## Para instalar virtualenv al igual que flask
Nos permite tener un pequeño espacio o sector con sus propias caractersticas, esto para evitar problemas de compartivilidad

"pip install virtualenv"

## Para crear entornos virtuales

Poniendo en uso la libreria anteriormente descargada, tenemos el presente comando que nos ayuda para generar entornos virtuales
que son esos pequeños espacios de los que hablamos antes

"virtualenv -p python3 [Nombre de la carpeta en este caso env]" or "py -m venv .\[nombre de la carpeta en este caso env]\"

## Para otorgar permisos necesarios

De vital importancia para quienes tenemos antivirus o vindows 11, puesto que cabe la posibilidad de tener un error en el que windows
solicita permisos, por lo que este comando es necesario

"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process"

## Para activar entorno virtual

Este par de comandos nos sirven para activar nuestro entorno virtual :)

.\[Nombre de la carpeta en este caso env]\Scripts\activate or cd.\[Nombre de la carpeta en este caso env] cd.\Scripts\ .\activate

# Instalar las dependencias que necesitaremos en este proyecto
pip install -r requirements.txt 

## Para ejecutar el software y tener acceso al servidor local tendremos que hacer lo siguiente:

Simplemente escribimos la leyenda python, seguido de app.py "python app.py"

## Otros comandos

"pip list" / "pip freeze" / "python" 
