const {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} = require("react-native");

export default function Input({
  handleTexto,
  handleAgregarTarea,
  input,
  show,
  setShow,
}) {
  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.contenedorInput}>
        <Image
          source={require("../assets/img/Task-PNG-File.png")}
          style={styles.imagen}
        />
        <TextInput
          placeholder="Escribe tu tarea.."
          style={styles.inputTexto}
          onChangeText={handleTexto}
          value={input}
        />
        <View style={styles.botones}>
          <View style={styles.boton}>
            <Button onPress={handleAgregarTarea} title="Agregar tarea" />
          </View>
          <View style={styles.boton}>
            <Button onPress={() => setShow(!show)} title="Cancelar" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  contenedorInput: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    padding: 10,
    paddingTop: "10%",
    backgroundColor: "#311b6b",
  },
  inputTexto: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 16,
    backgroundColor: "#fafafa",
  },
  imagen: {
    width: 150,
    height: 200,
    marginBottom: 15,
  },
  botones: {
    marginTop: 15,
    flexDirection: "row",
  },
  boton: {
    backgroundColor: "#cccccc",
    width: "40%",
    marginHorizontal: 5,
    borderRadius: 16,
  },
});
