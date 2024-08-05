import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, addExpense } from "../redux/actions";
import styles from "../styles/MutationPageStyles";
import TransactionItem from "../components/TransactionItem";

const MutationPage = () => {
  const mutasiList = useSelector((state) => state.mutasiList);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [isIncome, setIsIncome] = useState(true);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const parsedAmount = parseInt(amount);
    if (!parsedAmount || parsedAmount <= 0) {
      alert("Jumlah harus berupa angka positif!");
      return;
    }

    if (isIncome) {
      dispatch(addIncome(parsedAmount, description));
    } else {
      dispatch(addExpense(parsedAmount, description));
    }

    setModalVisible(false);
    setAmount("");
    setDescription("");
  };

  const openModal = (income) => {
    setIsIncome(income);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Input Pemasukan" onPress={() => openModal(true)} />
        <Button title="Input Pengeluaran" onPress={() => openModal(false)} />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {isIncome ? "Pemasukan" : "Pengeluaran"}
            </Text>
            <TextInput
              placeholder="Jumlah"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput
              placeholder="Keterangan"
              value={description}
              onChangeText={setDescription}
              style={styles.input}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="OK" onPress={handleSave} />
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        data={mutasiList.slice().reverse()}
        renderItem={({ item }) => (
          <TransactionItem
            type={item.type}
            amount={item.amount}
            description={item.description}
          />
        )}
        keyExtractor={(item, index) =>
          `${item.amount}-${item.description}-${index}`
        }
      />
    </View>
  );
};

export default MutationPage;
