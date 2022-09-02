import { View, StyleSheet, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function expenseRenderItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={expenseRenderItem}
        keyExtractor={(i) => i.id}
      />
    </View>
  );
}

const s = StyleSheet.create({});
