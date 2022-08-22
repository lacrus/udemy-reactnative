import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

import CategoryGridTitle from "../components/CategoryGridTitle";

export default function CategoriesScreen({ navigation }) {
  function renderizarCategorias(itemData) {
    function pressHandler() {
      navigation.navigate("ListadoComidas", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(i) => i.id}
      renderItem={renderizarCategorias}
      numColumns={2}
      style={{ backgroundColor: "#000" }}
    />
  );
}
