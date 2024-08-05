import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  Button,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../redux/actions";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/HomePageStyles";

const HomePage = () => {
  const userName = useSelector((state) => state.userName);
  const saldo = useSelector((state) => state.saldo);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState(userName);

  const handleUserNameChange = () => {
    dispatch(updateUserName(newName));
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("../assets/background_image.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Selamat Datang di Money Tracker
              <Text style={styles.userNameText}> {userName} </Text>
              <Ionicons
                name="pencil"
                size={18}
                color="black"
                onPress={() => setModalVisible(true)}
                style={styles.icon}
              />
            </Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceBackground}>
            <Text style={styles.saldo}>Saldo: Rp {saldo}</Text>
          </View>
        </View>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Name</Text>
              <TextInput
                style={styles.input}
                value={newName}
                onChangeText={setNewName}
              />
              <View style={styles.modalButtons}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} />
                <Button title="Save" onPress={handleUserNameChange} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default HomePage;
