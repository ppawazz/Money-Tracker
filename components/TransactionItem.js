import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionItem = ({ type, amount, description }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: type === "pemasukan" ? "lightgreen" : "lightcoral" },
      ]}
    >
      <Text style={styles.amount}>
        {type === "pemasukan" ? "+" : "-"} Rp {amount}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  amount: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
});

export default TransactionItem;
