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

### clase 6 - creando un nuevo proyecto RN

antes de instalar RN debemos instalar NODE.js para poder trabajar con modulos.. y RN se instala con NPM

EMPEZANDO -> https://reactnative.dev/docs/environment-setup
INSTALAMOS:
expo: de manera global -> npm install -g expo-cli (para saber si se instalo bien ejecutamos el comando expo en la terminal y nos deben saltar todos los comandos)

ejecutamos -> expo init NOMBREAPP -> dentro de la carpeta que queremos crear la APP
creamos un flujo => EXPO MANAGED WORKFLOW

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
keyExtractor={(i) => i}
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

### SafeAreaView -> area superior de cada telefono

importamos el componente desde react-native -> PONERLE ESTILO flex 1 para pantalla completa
<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>

### clase 63 - colores

al no tener disponible css y sus variables, podemos crear un archivo con todas aquellas constantes.

### clase 68 - simular CSS cascade

el en el elemento que queremos aplicar los estilos le agregamos una prop { style } y luego la usamos dentro del style del mismo componente ej:

export default function InstructionText({ children, style }) { // <---- este style lo pasamos como props
return <Text style={[styles.instructionText, style]}>{children}</Text>; //<---- dsp lo usamos dentro de style como array!!!!
}

### clase 69 - ICONOS

EXPO viene con sus propios iconos -> import { Ionicons } from "@expo/vector-icons"
y lo usamos como componente donde queramos
<Ionicons name="md-add" size={24} color="white" />

### clase 70 - FUENTES LETRAS FONTS - LOADING

es un paquete a instalar -> expo install expo-font
->podemos utilizar las fuentes de google muy facil (ver documentacion)
sino podemos descargar fuentes y agregarlas a una carpeta y luego usarlas con useFonts() en el archivo raiz

import { useFonts } from "expo-font"; -> en App.js o archivo raiz

useFonts({
"open-sans" : require("./asset)
})

a su vez useFonts es como useState => es un array que el primer parametro nos dice si las fuentes estan cargadas o no.. y esto lo podemos usar como setLoading
const [fontsLoaded] = useFonts({
"open-sans" : require("./asset.....)
"open-sans-bold" : require("./asset....)
})

if (!fontsLoaded) {
return <AppLoading> // ==>>> AppLoading lo instalamos --> ver adelante
}

en ->
const styles = StyleSheet.create({
title: {
fontFamily: "open-sans-bold", -> como lo establecimos en el useFonts
}

LOADING
instalamos paquete -->>> expo install expo-app-loading
importamos paquete -->>> import AppLoading from "expo-app-loading"
y usamos loading junto con fonts

## Seccion 5 - RESPONSIVE

seguimos trabajando en la app de la seccion 4

### clase 81 - Dimensions

import {Dimensions} from "react-native
es un Objeto.. como Alert que podemos obtener las dimensiones del dispositivo

const anchoDispositivo = Dimensions.get("screen/window").width => en ios no hay diferencia.. en androis screen es todo.. windows es sin la barra de estado

entonces dsp lo usamos en el stylesheet.create como x ej -> padding: anchoDispositivo < 450 ? 12 : 24,

### clase 83 - ROTACION

app.json en "orientation": "portrait" -> configuracion incial de la app en vertical

para desbloquear ponemos en "default"
el otro es "landscape" -> horizontal

RESPONSIVE dinamico!
usando dimension no se refresca la informacion x ej si rotamos la pantalla.. entonces podemos usar el hook ->

HOOK useWindowDimensions -> importamos de "react-native"

luego dentro del componente lo destructuramos -> const {width, height } = useWindowDimensions()
const marginTopDistance = height < 380 ? 10 : 100

y agregamos la propiedad a style como array
<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>

### clase 85 - TECLADO

import {KeyboardAvoidingView} from "react-native"
envolvemos la vista que queramos se vaya para arriba cuando abrimos teclado

<ScrollView> -> envolvemos en un scroll por si las dudas
<KeyboardAvoidingView style={styles.screen} behavior="position">
</KeyboardAvoidingView>
</ScrollView>

### clase 88 - PLATAFORMAS

import {Platform} from "react-native" -> no es un ajuste dinamico por no cambia!!

entonces lo podemos usar dentro del StylesSheet.create

lo mas facil => borderWidth: Platform.OS === "android" ? 2 : 0,
lo mas ideal => borderWidth: Platform.select({ ios: 0, android: 2 }),
otro ideal => crear dos archivos separados ej title.ios.js y title.android.js y aplicar los estilos para la plataforma segun el archivo que sea

### clase 89 - Status bar

import {StatusBar } from "expo-status-bar"
lo usamos preferiblemente en el archivo raiz y podemos darle estilo claro u obscuro ====>> <StatusBar style="light" />

## SECCION 6 - NAVIGATION NAVEGACION

navigation stack ???

### clase 93 - flatlist

flatlist admite numColumns={2}

### clase 94 - react navigation

hay que instalar la dependencia que es para expo y react native
npm install @react-navigation/native
tmb algunas dependencias que necesita
expo install react-native-screens react-native-safe-area-context

para usarlo 1° importamos el componente que envuelve
import { NavigationContainer } from "@react-navigation/native"

envolvemos la app con
<NavigationContainer> el resto de la app</NavigationContainer>

hay varios comportamientos de navegacion -> ver documentacion
navigacion stack ==>>
instalar => expo install @react-navigation/native-stack => metodo de navegacion
importamos en app.js o archivo raiz
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
Stack.Natigator es un metodo que nos permite navegar entre componentes
despues con stack creamos las rutas
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="mealsCategories" component={CategoriesScreen} />
</Stack.Navigator>
</NavigationContainer>

Stack.Navigator => nos agrega un encabezado.. tmb nos borra el color de fondo
el name="" => ademas de ser encabezado es la direccion que vmaos a usar para redirigirnos

ENCABEZADO -> podemos personalizarlo en Stack.Screen
options={{
  title: "Algun titulo",
  headerStyle: {
    backgroundcolor: "#ccc"
  }
}}

o dar un estilo global en el stack.navigator a todas las rutas  
<Stack.Navigator
screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }} >

los componente que pasamos por Stack.screen tienen la prop navigation
function CategoriesScreen({navigation}){
navigation.navigate("en nombre en name") => podemos usar el metodo en un boton
}

segundo parametro es un objeto que podemos pasar las props
navigation.navigate("en nombre en name", {prop1: dato1})

para acceder a los datos desde el otro componente
OtroComponente({route}) => destructuramos route y lo usamos para los props

podemos usar los HOOKS => useNavigation y useRoute

### clase 102 - Encabezados dinamicos

podemos hacerlo desde archio raiz en stack.screen con el atributo options usandolo como funcion y destructurar para obtener route y navigation

options={({route, navigation}) => {
antes del return podemos hacer logica
return
}}

O PODEMOS HACERLO desde el componente => usando route y navigaation tmb destructuramos las props

navigation.setOptions() => y lo correcto es ahcerlo dentro del useEffect -> como el useeffect se ejecuta dsp de que se monto el componente queda feo entonces se usa useLayoutEffect
useLayoutEffect(() => {
navigation.setOptions({ title: nombreCategoria + " Food" });
}, [navigation]);

NAVIGATION PROPS => como pasar las?
const algo = route.params.algoqueseusocomoruta;

### clase 106 - encabezado header

podemos agregar botones al encabezado agregando options en el stack.screen (si no necesitamos interaccion con el componente)
options={{
headerRight: () => {
return <Text>Home</Text>;
},
}}

si necesitamos interaccion lo hacemos en el componente

useLayoutEffect(() => {
navigation.setOptions({
title: route.params.titulo,
headerRight: () => {
return <Button title="otro boton"/>;
},
});
}, [navigation, titulo]);

### clase 108 -> NAVIGATION => usamos otra app para probar

otros tipos de navegacion

DRAWER -> nos agrega una barra lateral por la que podemos navegar
instalamos el paquete
npm install @react-navigation/drawer

con expo tambien tenemos que instalar
npm install react-native-gesture-handler react-native-reanimated

y como con stack.. importamos NavigationContainer de react-native
importamos => createDrawerNavigator de "@react-navigation/drawer
creamos => const Drawer = createDrawerNavigator() y lo usamos como Objeto con sus metodos
<NavigationContainer>
<Drawer.Navigator>
<Drawer.Screen name="Bienvenido" component={WelcomeScreen} />
</Drawer.Navigator>
</NavigationContainer>

tambien podemos personalizar el drawer
-> individualmente en el Drwaer.Screen  
options={{
headerStyle: {
backgroundColor: "#000",
},
headerTintColor: "white",
drawerLabel: "Pantalla bienvenida", //personalizacion de la barra lateral
drawerActiveBackgroundColor: "#000",
sceneContainerStyle: { backgroundColor: "#000" },
//para agregar iconos a la barra lateral podemos hacerlo asi
drawerIcon: ({ color, size }) => (
<Ionicons name="person" color={color} size={size} />
),

          }}

-> estilos generales en el drawer.navigator

ABRIR EL DRAWER desde componentes
navigation.toggleDrawer(); => podemos usar el metodo toggl... que nos da navigation para abrir el menu lateral

### clase 110 - Bottom Tabs Navigator

instalar => npm install @react-navigation/bottom-tabs
instalado ya se puede usar.
y consiste en lo mismo
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
const BottomTap = createBottomTabNavigator()
<NavigationContainer>
<BottomTap.Navigator>
<BottomTap.Screen>

<BottomTap.Navigator
initialRouteName="Bienvenido"
screenOptions={{
headerStyle: {
backgroundColor: "yellow",
},
headerTintColor: "#f4511e",
tabBarActiveBackgroundColor: "black",
tabBarActiveTintColor: "white",
}} >

<BottomTap.Screen
name="Bienvenido"
component={WelcomeScreen}
options={{
tabBarIcon: ({ color, size }) => (
<Ionicons name="home" color={color} size={size} />
),
}}
/>

### clase 111 - nesting navigators anidar navegadores

==>>>> volvemos a app seccion 6

creamos un componente para mostrar el Drawer
function DrawerNavigator() {
return (
<Drawer.Navigator>
<Drawer.Screen name="Drawer" component={DrawerNavigator} />
<Drawer.Screen name="Favoritos" component={Favoritos} />
</Drawer.Navigator>
);
}

entonces en el navegador inicial mostramos como screen el componente que creamos =>
<Stack.Screen
name="Drawer"
component={DrawerNavigator} />

CADA NAVEGADOR TIENE SU CABECERA.. por lo que si anidamos va haber varias..
podemos eliminar la cabezara que este demas con options en el anidamiento ver app seccion 6 app.js

## SECCION 7 - CONTEXTO REACT - REDUX

--> misma app que seccion 6

### clase 115 - contexto react api

CARPETA store -> context -> favoritos-context.jsx

creamos un contexto
import { createContext } from "react";
export const FavoritosContext = createContext({ids: [],
agregarFavoritos: (id) => {}, //metodos que podemos usar
eliminarFavoritos: (id) => {},})
export default function FavoritosContextoProvider({ children }) {
//aca creamos la logica que tengamos que hacer antes de renderizar
return <FavoritosContexto.Provider>{children}</FavoritosContexto.Provider>;
}

en archivo raiz importamos la funcion del componente que creamos
import FavoritosContextoProvider from "./store/context/favoritos-contexto";
y despues envolvemos la app.. o los componentes que necesiten el contexto con el componente
<FavoritosContextoProvider>
<NavigationContainer>
</NavigationContainer>
</FavoritosContextoProvider>

despues en el componente que necesitemos el estado importamos useContex
import {useContext} from "react"
e importamos tambien el contexto en si para luego usarlo con useContext
import { FavoritosContexto } from "../store/context/favoritos-contexto";
const favoritosContexto = useContext(FavoritosContexto);

## SECCION 8 - app de practica

### clase 136.. pasando un objeto a screenOptions

al pasarle una funcion podes destructurar los parametros para poder pasarle navigation.. y esto lo que hace es permitirnos usar navigation dentro de ese componente.. es igual a usar el hook de useNavigation()

<BottomTabs.Navigator
screenOptions={({ navigation }) => ({
headerStyle: {
backgroundColor: GlobalStyles.colors.primary500,
},}}

### clase 137.. de donde vengo?

navigation.navigate("ManageExpense", {
expenseId: id,
});

en .navigate pasamos un segundo argumento que va a ser un objeto con la propiedad que necesitemos usar para identificar, despues en el componente que pusimos como primer parametro podemos destructurar ManageExpense({route})

### clase 140 - boton reutilizable

    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[s.button, mode === "flat" && s.flat]}>
          <Text style={[s.buttonText, mode === "flat" && s.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>

## seccion 9 - manejar inputs

import { View, TextInput, Text } from "react-native";
export default function Input({ label }, textInputConfig) {
return (
<View>
<Text>{label}</Text>+
<TextInput {...textInputConfig} />
</View>
);

al pasarle un objeto como configuracion.. podemos (donde vamos a usarlo..) pasarle todas las configuraciones que queremos en un solo objeto

### clase 157 - manejo de errores validaciones

convertir cada input en un objeto con la propiedad value y otra isValid !!

### clase 161 - firebase

desde la pagina creamos un proyecto.. desabilitamos analitycs
creamos una Realtima Database -> Crar una base de datos -> comenzar en modo de prueba

en los endpoint de firebase tenemos que poner .json (/expenses.json) para que sepa de que nodo se trata

### clase 168 - loading spinner

react-native tiene spinner propio que es la ruedita girando..

import { View, ActivityIndicator, StyleSheet } from "react-native";

lo importamos y despues lo usamos dentro de un componente

export default function Loading() {
return (
<View style={s.container}>
<ActivityIndicator size="large" color="white" />
</View>
);
}

## seccion 11 - User Autentication

### clase 185 - guardar token en el dispositivo

para guardar el token en el dispositivo usamos una libreria => como x ej =>

Async Storage React Native

instalamos la libreria.. importamos en el archivo que la necesitamos.. y despues la usamos

import AsyncStorage from "@react-native-async-storage/async-storage"

AsyncStorage.setItem("key", "value") => debe ser siempre un string.. por lo que si es un objeto lo podemos pasar a JSON

AsyncStorage.getItem("key") => para recuperar la informacion del storage del dispositivo

AsyncStorage.removeItem("key") => para eliminar el item que queramos del storage

## SECCION 12 - NATIVE DEVICE FEATURES

nueva app

### clase 195 - camara

https://docs.expo.dev/versions/latest/sdk/camera/ => buscar expo camera en google

es un paquete que permite configurar toda una pantalla de camara que no solo permite scar fotos..

ImagePicker => https://docs.expo.dev/versions/v46.0.0/sdk/imagepicker/

este paquete nos permite seleccionar las fotos del dispositivo o abrir la camara para sar una nueva foto

es importante configurar los PERMISOS => cuando una app solicita abrir la camara por ej.. el usuario debe darle permiso

los permisos se agregan en el archivo app.json.. para el imagepicker agregamos

"plugins": [
["expo-image-picker",{"photosPermission": "The app accesses your photos to let you share them with your friends."}]
]

creamos un boton para que cuando lo apretamos nos abra la camara..

import { launchCameraAsync } from "expo-image-picker";

y en la function que llamamos cuando apretamos el boton incluimos la funcion.. y como parametro pasamos un objeto con las configuraciones.. calidad, editar, aspecto, etc...

async function takeImageHandler() {
const image = await launchCameraAsync( {
allowsEditing: true,
aspect: [16, 9],
quality: 0.5,
} );
console.log(image);
}

para IOS debemos hacer otros ajustes => archivo ImagePicker.jsx

### clase 200 => LOCATION UBICACION

https://docs.expo.dev/versions/latest/sdk/location/ => expo location

expo install expo-location

una ves instalada tenemos que ver el tema de los PERMISOS => paral a ubicacion tenemos un permiso especial.. que es para cuando la aplicacion se esta ejecutando en segundo plano.. eso esta en la pagina de arriba, en el titulo => Background Location Methods
Ese es el PERMISO que hay que configurar.. el permiso para el uso comun ya lo hace el paquete.. pero igual tenemos que preguntar por el permiso, s

y despues de eso es parecido a la camara.. importamos y usamos a traves de un boton que ejecute las funciones

import { getCurrentPositionAsync } from "expo-location"; => son funciones asincronicas

### clase 202 => mostar estatico

se usa una API de google Maps.. porque es la mas popular pero SON APIS PAGAS!!!!!!
por lo que tenemos que iniciar sesion en google.. crear o usar un proyecto y habilitar las API KEY

api que devuelve una imagen de un mapa con los marcadores y eso =>
https://developers.google.com/maps/documentation/maps-static
archivo => LocationPicker.jsx

hay otras apis de google que tambien devuelven un mapa interactivo.. ver en google...

### clase 203 => mapa interactivo

para esto instalamos expo-map-view => expo install react-native-maps
https://docs.expo.dev/versions/latest/sdk/map-view/

### clase 206 => useIsFocused

hook de react navigation para re renderizar los componentes por ej en el Stack.navigation.. que una pantalla no se vuelve a montar.. sino que se mantiene en segundo plano y cuando volvemos a ese componente en realidad no se esta volviendo a renderizar sino que simplemente sale del segundo plano

### clase 209 - convertir coordenandas en direccion legible

usamos otra API de google que permite traducir coordenadas a direcciones y viceversa

https://developers.google.com/maps/documentation/geocoding/overview

get start =>

### clase 213 => crear una base de datos local en el dispositivo

SQLite EXPO DOCUMENTATION => una libreria de expo => https://docs.expo.dev/versions/latest/sdk/sqlite/

expo install expo-sqlite

## SECCION 13 - APP SIN EXPO

### clase 222 - como funciona expo?

expo simplifica las cosas para el desarrollo porque instala la app que permite que podamos ir probando el codigo.

PERO cuando creamos aplicaciones con EXPO no creamos aplicaciones reales, no son aplicaciones independientes que se pueden ejecutar por si mismas, necesitan de expo para poder compilarse

### clase 223 - alternativas de flujo

- EXPO "MANAGED WORKFLOW" => la q se usa en el curso
  facil de configurar y trabajar
  rapido y sin fricciones
  pocas configuraciones extra necesarias, especialmente con native features y paquetes de terceros
  podemos crear aplicaciones multiplataformas

- EXPO "BARE WORKFLOW" => cuando se necesita mas control, instala menos configuraciones listas para usar
  se usa cuando necesitamos mezclar el codigo con codigo nativo de ios o android (esto se peude con react native)

- => REAC NATIVE CLI => proyectos sin EXPO en absoluto
  instalacion/configuracion mas compleja
  la ventaja es que se tiene mas control}
  las aplicaciones se crean localmente.. en windows no podemos crear apps para ios

### clase 224 => configuracion entorno

https://reactnative.dev/docs/environment-setup

hay que seguir los pasos de la pagina para configurar el entorno..
como la app de expo go no siempre funciona con el BARE WORKFLOW (y no funciona con el rn cli) necesitamos primero construir la app en nuestra computadora y despues de ahi mandarlo al emulador.

para eso se hacen bastantes configuraciones que son las que hablaba la clase pasada

### clase 225 => crear una app con BARE WORKFLOW

expo init NOMBREAPP
seleccionamos la opcion MINIMAL => de la parte --bare workflow--

diferencias
crea una carpeta android y otra ios => en las que hay codigo nativo - configuraciones y demas

index.js => le avisa a RN que App es el archivo raiz

app.json => es mucho mas corto porque antes las configuraciones se hacian ahi para ambas plataformas.. ahora se hace en la carpeta de cada uno

---

si hicimos todas las configuraciones para trbajar con el bare workflow
en package.json hay 2 script que podemos ejecutar segun la plataforma que tengamos
expo run:ios // expo run:android

### clase 226 - bare workflow y librerias

para usar la ubicacion por ej.. podemos usar el paquete de location

pero tenemos que hacer configuraciones adicionales => que estan en la pagina de expo explicadas => permisos/

### clase 227 => pasar de expo maneged workflow a bare workflow

en la consola ejecutamos => expo eject

nos pide el nombre para la aplicacion => primero para android y dsp para ios
debe ser un identificador unico para las aplicaciones

y listo.. crea las carpetas y demas necesarias para el bare workflow y seguimos trabajando con el bare workflow

### clase 228 - NO EXPO - REACT NATIVE CLI

para configurar el entorno vamos a la pagina y seguimos los pasos para el workflow
https://reactnative.dev/docs/environment-setup => react native CLI quickstart

Creating a new application => npx react-native init NOMPREAPP
si no funciona el compando de npx podemos instalarlo de forma global => npm install -g react-native-cli => y una ves que se instalo ahi hacemos react-native init NOMBREAPP

el proyecto tiene una estructura diferente pero funciona todo de la misma manera.. los componentes son text view etc.. lo que cambia son las configuraciones que hay que hacer y especialmente cuando usamos librerias que hagan uso de las funciones nativas de los dispositivos

para ejecutar.. despues de todas las configuraciones
npm run andoid / npm run ios
aparte de abrirse el simulador se abre la consola de desarrollo.. la tenemos que dehjar abierta

### clase 229 - librerias sin EXPO

podemos pasar de una app sin expo a una de expo bear workflow.. instala algunos modulos de expo y ahi podemos usar los paquetes de expo..

SIN EXPO
podemos buscar paquetes para react-native de acuerdo a lo que necesitemos (ubicacion x ej)
tenemos que seguir todo el tema de las configuraciones/permisos etc

## SECCION 14 - publicacion de aplicaciones

### clase 232 - como publicar?

diferenciar entre aplicaciones creadas con expo / sin expo

- con expo
  configurar el proyecto -> hay un monton de configuraciones q se pueden ahcer pero un par son las importantes
  crear las aplicaciones binarias con los servicios en la nube de expo -> las crea tanto para android como para ios.. si las hacemos localmente no podemos crear una app para ios en windows
  despues queda subir la app a los store.. que lo podemos hacer manualmente o tambien a traves de expo

- sin expo
  tenemos que configurar el proyecto
  hay que compilar las app binarias en nuestra computadora (no tenemos el servicio de expo) hay servicios de terceros en internet que funcionan como expo tambien
  subir lso archivos a los store manualmente

### classe 233 - configuracion para produccion

- PERMISOS => camara, ubicacion
- NOMBRE DE LA APP e IDENTIFICADOR UNICO => tenemos que crear un nombre de vista (como lo ven los usuario) - un identificador para la app unico en el store - y la version (para poder actualizarlo)
- VARIABLES DE ENTORNO => x ej api keys
- ICONOS & PANTALLAS DE CARGA => pantalla de carga cuando la app se esta iniciando (expo tiene una por defecto pero se puede personalizar)

### clase 234 - NOMBRE DE LA APP Y VERSIONES

para CONSTRUIR la app usamos el servicio EXPO APPLICATION SERVICES (EAS)
https://docs.expo.dev/versions/v46.0.0/config/app/

app.json => podemos configurar el nombre de la aplicacion, descripcion, dueño.. ect
version: => podemos poner un numero de version multiplataforma.. o diferenciar entre android e ios
las versiones diferenciadas son solo internas.. no las ven los usuarios pero si los store

### clase 235 - VARIABLES DE ENTORNO

documentacion EAS => https://docs.expo.dev/build-reference/variables/

### clase 236 - iconos y pantalla carga

icon y splash en app.json

"icon": "./assets/icon.png",
"splash": {
"image": "./assets/splash.png",
"resizeMode": "contain",
"backgroundColor": "#ffffff"
},

lo unico que hay que hacer es cambiar los archivos en la carpeta assets por lo que queremos usar

adaptive-icon => es para android
favicon => es solo para cuando estamos usando la app de expo o en el simulador
icon =>
splash =>

si no usamos expo tenemos que crear iconos para cada uno de los tamñanos y resoluciones
al usar expo esto lo hace automaticamente el servicio en la nube

### clase 237 - building expo apps whit eas - construir las app con expo eas

https://docs.expo.dev/build/setup/ => seguir los pasos

- Prerequisites
  un proyecto de react native
  hay q tener usuario y contraseña de expo..

- 1 Install the latest EAS CLI => npm install -g eas-cli
- 2 Log in to your Expo account => eas login
- 3 Configure the project => eas build:configure
  - seleccionar para que plataforma vamos a crear la app
  - esto crear un archivo eas.json q tiene configuraciones extra para las aplicacion expo
- 4 Run a build
  - primero podemos crear una app optimizada para dispositivos y simulador.. para probarla antes de mandarla a las tiendas
  - android => https://docs.expo.dev/build-reference/apk/
    - tenemos que agregar una linea al eas.json => "buildType": "apk"
    - dsp ejecutar => eas build -p android --profile preview => elegimos el id para la app
    - dsp de confirmar tenemos el nombre de la app en el eas.json
      tenemos que generar el android keystore
      si ponemos yes.. la clave se guarda en los servidores de expo.. si ponemos que no tenemos que configurar nuestra propia tienda de claves
  - PRODUCCION
    - android: en eas.json en "production" agregamos => ver en la pagina de eas como es el tema
    - despues corremos el comando que esta en la pagina con el perfil de produccion o sin perfil
    - tenemos que tenes una membresia de desarrollador y hacer un pago unico de 25 dolares

==>> si la compilacion falla.. podemos ir, en el navegador en la pagina de expo al proyecto y ahi ver la informacion sobre la construccion de la app

- ios => https://docs.expo.dev/build-reference/simulators/

  - en eas.json agregamos la configuracion para ios
  - ejecutamos en la terminal => eas build -p ios --profile preview =>

- PRODUCCION
  - no podemos solo ejecutar el comando con el perfil de produccion hay ciertas configuraciones
  - se debe tener una membresia de 99 dolares al año
  - una ves que tenemos la cuenta debemos generar CERTIFICADOS
  - ejecutamos => eas build --platform ios
  - cuando pregunte por los certificados y demas ponemos cancelar y vmaos a la pgina de apple
  - iniciamos sesion.. y despues de pagar por los 99 dolares creamos el "Cretificado de distribucion" y el "perfil de provision" => siempre ligado a la opcion app store
  - cuando creamos estas dos cosas se crean 2 arhcivos que los lleamos a la cafpeta de nuestra app(poner en git ignore) y le avisamos a aes.jsson que estane sos archivos
    => esta configuracion la bvuscamos en la pag de expo

## SECCION 15 - PUSH NOTIFICATIONS (NOTIFICACIONES)

### clase 243 - notificaciones locales

son notificaciones activadas por aplicaciones instaladas en el dispositivo.
Estas notificaciones se programan desde la app

### clase 244

EXPO NOTIFICATIONS => se usa para local y push
https://docs.expo.dev/versions/latest/sdk/notifications/

=> npx expo install expo-notifications

ver la DOCUMENTACION para la CONFIGURACION

en app.json agregamos lo sig... icon y color es solo para android...
"plugins": [
["expo-notifications",{
"icon": "./local/assets/icon.png",
"color": "#ffffff",
"sounds": [
"./local/assets/notification-sound.wav",
"./local/assets/notification-sound-other.wav"]}]]

ESTO ES PARA NOTIFICACAIONES LOCALES.. PARA PUSH NOTIFICATIONS ES NECESARIO SEGUIR OTROS PASOS QUE ESTAN EN LA PAG

- NOTIFIACIONES LOCALES+
  importamos todo de la libreria de expo-notifications.. eso que importamos tiene metodos que podemos usar dentro de una funcion
  import \* as Notifications from "expo-notifications";

scheduleNotificationAsync => es para crear notificaciones.. como parametro recibe un objeto con las configuraciones para la notificacion

function notificacionHandler() {
Notifications.scheduleNotificationAsync({
//content => tiene muchas mas configuraciones que podemos hacer
content: {
title: "mi primer notificaion local",
body: "este es el cuerpo de la notificacion",
data: { userName: "Max" }
},
//trigger
trigger: {seconds: 3,},})}

container => https://docs.expo.dev/versions/latest/sdk/notifications/#notificationcontentinput
trigger => https://docs.expo.dev/versions/latest/sdk/notifications/#notificationtriggerinput
Or you set a specific date (incl. time) at which the notification will be delivered: https://docs.expo.dev/versions/latest/sdk/notifications/#datetriggerinput
Or you set a daily time at which the notification will be sent (Android-only): https://docs.expo.dev/versions/latest/sdk/notifications/#dailynotificationtrigger

Or a weekly trigg
Or a specific date (iOS-only): https://docs.expo.dev/versions/latest/sdk/notifications/#calendarnotificationtrigger

### clase 247 - manejar notificaciones

en el archivo app.js => fuera del componente App => declaramos
Notifications.setNotificationHandler() => esto va hacer que cuando abrimos la aplicacion.. le dice a la app como manejar las notificaciones ralicacionadas con la app.. y de ahi la app le dice al sistema como manejarlas

el metodo recibe un objeto como parametro
setNotificationHandler({
// handleNotification => se activa cada ves que se recibe una noti => recibe una function // OBLIGATORIO

// handleError
handleSuccess: ,
})

### clase 249 - acciones luego de las notificaciones

el objeto que importamos de "expo-notifications" nos provee metodos que son escuchadores de eventos

es buena practica agregar los escuchadores dentro del archivo app.js (en un useEffect()).. ya que esta se renderiza siempre y puede estar escuchando y cuando se cierra se cancelan esos escuchadores.. y no hace falta crear en cada componente (perdida de memoria)

Notifications.addNotificationReceivedListener => es para acciones automaticas
Notifications.addNotificationResponseReceivedListener => es par acuando el usuario responde a la notificacion tocandola

en la respuesta a esos metodos podemos encontrar informacion que se creo cuando se "creo" la notificacion => response.notification.request.content.data.LAINFORMACION

useEffect(() => {
const subscription = Notifications.addNotificationReceivedListener(
(notification) => {
console.log("notificacion recibida");
console.log(notification);
});
return () => {
subscription.remove();
};}, []);

### clase 251 - push notifications

las notificaciones externas pueden proveer de una app que le avisa a otra app como tambien de un backend.. pero no podemos enviar notificaciones directas a las aplicaciones.. si no que las enviamos a los servidores de google y de apple que se encargan de mandar esas notificaciones a los dispositivos

### clase 252 - push token

configuraciones => https://docs.expo.dev/push-notifications/push-notifications-setup/#credentials

> solicitar permisos para IOS
> obtener el ExpoPushToken => actua como la direccion a la que queremos enviar la notificacion

PUSH TOKEN =>
obtener el token => el token es la direccion de un dispositivo.. para obtener la direccion del sipositivo podemos hacerlo desde varias partes de la app, o en alguna accion especifica del usuario etc..

    Notifications.getExpoPushTokenAsync().then((response) =>
      console.log(response)
    );

### clase 253 - permisos

cuando probamos la app en la app de expoGo no hace falta solicitar permisos.. pero para cuando publiquemos la app en las store si va hacer falta preguntar porque ya no corre en expo

async function configurePushNotifications() {
const { status } = await Notifications.getPermissionsAsync();
let finalStatus = status;
if (finalStatus !== "granted") {
const { status } = await Notifications.requestPermissionsAsync();
finalStatus = status;
}
if (finalStatus !== "granted") {
Alert.alert(
"Permiso requerido",
"Las notificaciones necesitan permisos"
);
return;
}
const pushTokenData = await Notifications.getExpoPushTokenAsync();
console.log(pushTokenData);
}
configurePushNotifications();

PARA ANDROID hay que hacer unas configuraciones mas relacionadas al CHANEL por el cual se comunica android.. despues de tener el pushTokenData debemos =>

if (Platform.OS === "android") {
Notifications.setNotificationChannelAsync("default", {
name: "default",
importance: Notifications.AndroidImportance.DEFAULT,
});}}

### clase 254 - enviar notificaciones push

servicio para enviar notificaciones push => https://expo.dev/notifications

para probar si anda la recepcion de las notificaciones en el celular

como generalmente esas notificaciones se van a madar desde un back.. osea con codigo
pero el curso no tiene un back entonces probamos mandando notificaciones desde dentro de la app

function pushNotificationHandler() {
fetch("https://exp.host/--/api/v2/push/send", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
to: "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
title: "holaaaa",
body: "mundillo",
}),
});
