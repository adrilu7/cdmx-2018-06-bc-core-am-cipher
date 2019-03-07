

# Preámbulo

Está próxima la fecha del cumpleaños de tu novix y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎


# Definición del producto

Códigos secretos fue creada para ayudar a los usuarios a poder cifrar y decifrar
ciertas frases o textos que quieran y compartirlos,en esta ocacion fue diseñada
para jovenes de entre 18 y 30 años, en este caso Alejandra 26 años quiere hacer
una fiesta sorpresa a su novio y no quiere que arruinen la gran sorpresa.
El objetivo de codigos secretos facilitara la organización de cierta fiesta
sorpresa sera muy facil enviarle frases cifradas a familiares y amigos.
algunos usuarios usaron la interfaz conforme a las recomedaciones de los mismos
modificamos eh hicimos mas facil su manejo y a su vez llame la attención del
usuario.


# ¿Cómo se piensa resolver el problema?

Creando una plataforma digital (Cifrado César) donde todxs lxs participantes de la fiesta cifren y descifren los mensajes enviados dentro de un grupo para que el novix no pueda leerlos.

¿Qué es el código César?
En criptografía, el cifrado César, también conocido como cifrado por desplazamiento, es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.
Se analizó paso a paso que se necesitaba para hacer el cifrado, llegando a la conclusión de que era necesario:

Obtener la clave de cifrado/descifrado.

Identificar qué valor en código ASCII corresponde a cada letra del mensaje. Uso del método para obtener un valor ASCII de un carácter (devolver el valor unicode de un carácter)

Transformar el código ASCII encontrado por medio del corrimiento de su valor gracias a las fórmulas:

Para el cifrado: ((x-limite+n)%#elementos)+limite

Para el descifrado: ((x+limite-n)%#elementos)+limite

Donde: x => Valor en ASCII de cada carácter

limite => Valor en ASCII donde comienza el conjunto de valores válidos

n => Valor de espacios para el corrimiento (saltos)

elementos => El número de caracteres válidos a usar. Ej.: 26 para las letras del abecedario o 10 para la cantidad de números.

Devolver al nuevo valor ASCII su forma de carácter (devolver el carácter a partir de un valor unicode).
Mostrar resultados en la pantalla.

# Requerimientos básicos para el desarrollo de la interfaz.

La interfaz debe:

- Permitir al usuario ingresar un mensaje.
- Permitir al usuario ingresar la clave (número) para cifrar o descifrar el mensaje.
- Permitir al usuario decidir entre cifrar o descifrar el mensaje que ingreso.
- Mostrar el resultado del cifrado o descifrado del mensaje.

# ¿Cómo se usa?**

Usuario:
Da click en el siguiente link -> https://adrilu7.github.io/cdmx-2018-06-bc-core-am-cipher/src/index.html
- Escribir texto.
- Dar click en el boton cifrar ó descifrar.

Contribuidor:
- Realiza un fork de este repositorio.
- Clona el fork a tu computadora.
- Instala dependencias del proyecto con el comando npm install.
- Si deseas aportar al proyecto escríbenos un issue o haz un pull request.
