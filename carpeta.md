# REACT NATIVE

## Seccion 1 - EMPEZANDO

### clase 2

que es react native? Es una alternativa a React-Dom q brinda una serie de componentes especiales q se uitilizan en el codigo jsx
tmb se realaciona con las API de los dispositivos p usar x ej la camara, etc. react-native es como react dom q conecta el codigo con el exterior

### clase 4

imagen guardada en la carpeta -> seccion 1 - c2 - elementos segun programa...
RN se encarga de compilar elementos especiales de el para traducirlos segun el dispositivo en el cual se va a mostar la app.-
x ej.- un input en react es <TextInput> en RN o EditText en Android

EL resto del codigo?? funciones estado etc...
la logica de JS no se compila.. sino que se ejecuta en un sub-proceso hosteado por RN dentro de la aplicacion que se creo

RN muy en el fondo es un traductor.. traduce el codigo JS usando componentes propios para que pueda ser interpretado por los diferentes dispositivos en donde se va a ejecutar la app

### clase 5 getting started

https://reactnative.dev/docs/environment-setup
hay 2 formar que podemos empezar un proyecto RN

1- npm install -g expo-cli -> RECOMENDADA
es un servicio de terceros que se puede usar de forma gratuita.
Registrandose y pagando se obtienen servicios adicionales

    Si comenzamos un proyecto usando el flujo de Expo podemos mudarnos al otro flujo en cualquier momento

2- RN CLI Quickstart
existia antes de Expo..
se deben hacer mas configuraciones manuales para el setup
para usar algunas funciones nativas de los dispositivos (camara etc) hay que hacer mas trabajo, ya que expo se encarga de eso

    ventaja -> integracion mas sencilla con codigo nativo de los dispositivos

### clase 6 - creando un neuvo proyecto RN

antes de instalar RN debemos instalar NODE-js para poder trabajar con modulos.. y RN se instala con NPM

EMPEZANDO -> https://reactnative.dev/docs/environment-setup
INSTALAMOS:
expo: de manera global -> npm install -g expo-cli (para saber si se instalo bien ejecutamos el comando expo en la terminal y nos deben saltar todos los comandos)

ejecutamos -> expo init NOMBREAPP -> dentro de la carpeta que queremos crear la APP

nos aparece un menu para elegir el tipo de proyecto a crear

- flujo de trabajo manejado
  proyecto en blanco
  proyecto en blanco compatible con typescript
  proyecto con navegacion integrada
  -flujo de trabajo desnudo (BARE) -> proyecto que no usa mucho EXPO

muestra algunos comandos que podemos usar

### clase 7 - analizando el proyecto creado

- dentro del proyecto la unica diferencia con react es el archivo app.json que son configuracion de la aplicacion.. se ve mas adelante

### clase 8

para ver los cambios mienstras estamos trabajando hay que descargar la app de EXPO en la appstore (android o ios)

abrimos la terminal -> npm start
escanear el QR que sale en la terminal

### clase 9

podemos descargar un simulador para ver en tiempo real la app en android o ios
windows - podemos descargr un simulador para android.. no hay simulador para ios, para eso si o si tenemos que tener un iphone y usar la app de expo
simulador android p' windows -> https://developer.android.com/studio

### ACERCA DEL CURSO

repositorio de recursos del curso -> https://github.com/academind/react-native-practical-guide-code

## SECCION 2 -> LO BASICO

### clase 13 - repasando los archivos

los tags html no funcionan dentro de RN, RN tiene componentes propios que despues los traduce a componentes nativos donde se renderiza(dom, ios, android)

COMPONENTES -> https://reactnative.dev/docs/intro-react-native-components
existen uan cuantos componentes basicos que luego se traducen en los elementos nativos de cada plataforma
APP.js como en REACT.. sigue siendo el compoenente raiz quie se renderiza.. por lo que todo lo que hagamos debe estar dentro de app

ESTILOS -> NO hay css se usan 2 metodos
inline styles
stylesheet objects -> como en app.js al hacer init

### clase 14 - componentes basicos

los componentes RN son mas estrictos en cuanto al contenido, un view no permite texto (debe tener un tag text adentro con el texto)
los componentes en RN se IMPORTAN, para usarlos antes hay que importarlos ya que no son tags comunes

View (div) -> los elementos view contienen otros elementos
Text
Button

### clase 15 - estilos a componentes

usando APP1
NO HAY CSS

documentacion oficial de estilos -> https://reactnative.dev/docs/style

- inline styles
  dentro del tag agregamos la propiedad style={{}}, que acepta codigo js que dentro va un obj con las propiedades que queremos establecer como estilo
- stylesheets objects
  se importa el compoentes StyleSheet y a partir de él se crea un objeto con los diferentes estilos que queremos
  luego en el tag agregamos el atributo style={nombreObjEstilo.nombreEstilo}
  style no es aceptado en todos los componentes
  al usar objetos como estilos tenemos la ventaja de tener la validacion de si estamos escribiendo bien los estilos

### clase 18 - RN Y FLEXBOX

es parecido al flexbox comun de react -> el contenedor padre da estilo flex a los elementos contenidos.. y estos a su ves tienen estilos propios
contenedor -> propiedades
flex: 1 => le decimos que ocupe todo el espacio del eje principal
flexDirection: "column" => cual es el eje principal
justifyContent: "flex-start"
alignItems: "flex-start"

### clase 20 - FLEXBOX particularidades y diferencias con web

el main axis de RN es column no row
las medidas va solo el numero, en algunos casos se usa porcentaje entre "10%"
Buttton componente no admite la propiedad style!!

### clase 22 - manejando eventos

input texto => onChangeText()
button => onPress() => porque no hay clicks

### clase 24 .. estilos

NO HAY CSS... osea que no hay cascada de estilos!!!!

hay que tener en cuenta que no siempre los estilos dados son aceptados por el tag nativo en alguna de las plataformas.. por ej, el tag Text no admite puntas redondeadas en ios pero si en android

### clase 26... mejorando las listas

FLATLIST -> se usa para optimizar las listas.. solo carga la informacion que se esta renderizando.. es para las listas infinitas
2 atributos obligatorios

<FlatList
data={ [1, 2, 3, 4] } // => es la informacion que se va a "mapear"
renderItem={(i) => { // => es la funcion "mapeadora" que va a ir renderizando lso elementos
i.index;
return (
<Items
                  i={i}
                  handleBorrarTarea={handleBorrarTarea}
                  refInput={refInput}
                />
);
}}

>

### Clase 30 - componentes presionables

Pressable -> envuelvo a los demas componentes que van a ser presionados

### clase 32 - estilos presionables

android_ripple={{colo: "#ddddd"}}

Para IOS no sirve.. hay que usar el atributo style con FUNCION style={({pressed}) => pressed && styles.itemPresionado}

### clase 33 - modal

importamos el componente "Modal"
envolvemos lo que quremos en el componente
<Modal visible={show} animationType="slide">

### clase 37 - STATUS BAR from expo

import {StatusBar } from "expo-status-bar"

## SECCION 3 -

manejo errores
devTools

### clase 42 - terminal

? signo pregunta nos muestra el menu
m abre la "terminal" en el celular

### clase 43 - devTools

npm install -g react-devtools

ejecutamos react-devtools en la terminal.. esto abre una ventana
abrimos el menu de desarrollo en el cel -> temminal ? => m
y en el menu ponemos debug remote js -> esto conecta con la ventana que se abrio
y ya tenemos las herramientas de react disponibles

## Seccion 4

### clase 49 - sombras

Android
propiedad { elevation: numeroEntero } mientras mas alto el numero mas elevacion... mas sombra

Ios - usa 4 propiedades diferentes que se pueden configurar
shadowColor
shadowOffset -> { width: 0, height: 2} -> cuantos px se expande a la derecha y abajo
shadowOpacity -> transparencia de la sombra 0 a 1
shadowRadius -> cuanto la sombra se expande -> num redondo 0 1 2 3 4

### clase 50 - TextInput

propiedades principales que admite

- maxLength={2}
- keyboardType="number-pad" -> tipo de teclado que se abre
- autoCapitalize="none" -> que no ponga primera letra mayuscula
- autoCorrect={false} -> para poner mails que no los corrija

### clase 52 - BOTONES

efecto RIPPLE -> clase 32 tmb esta

android

- android_ripple={{ color: "#640233" }} => efecto ripple

Ios
-> hay que crear un estilo especial para cuando el boton este presionado
pressed: {
opacity: 0.75
}
-> al atributo style lo utilizamos como funcion!!
style={({ pressed }) =>
pressed
? [styles.buttonInnerContainer, styles.pressed] ==>>>>> para agregar multiples atributos usamos un array!!
: styles.buttonInnerContainer
}

### clase 54 - FONDOS

podemos aplicar un fondo global a la app en app.json agregando la propiedad "expo": {"backgroundColor": color"}

- GRADIENTES
  expo tiene una dependencia que permite trabajar con gradientes
  expo install expo-linear-gradient

### clase 56 - backgroun image

ImageBackground -> componente de react-native
<ImageBackground
source={imagenFondo}
resizeMode="cover"
style={styles.rootScreen}
imageStyle={{backgroundImage:{opacity: 0.15,}}} >
<OtroComponente/>
</ImageBackground>

### clase 58 - ALERTAS

importamos Alert de react-native -> pero no es un componente
Alert es Objeto que contiene metodos.. contiene .alert Alert.alert()
Alert.prompt() -> podemos ingresar un valor

Alert.alert("Titulo", "Mensaje", [{
text: "Okay", style: "destructive/cancel/default", onPress: (acepta una funcion que podemos hacer al presionar ese boton)
}]) -> 3° parametro es un array por cada index un objeto que es cada boton de la alerta
