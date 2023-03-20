import axios from "axios";
import { React, useEffect, useState } from "react";
import { StyleSheet, Modal, Text, Button, View } from "react-native";

function Modal_(p) {
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    axios.get('http://192.168.137.188/api/brief/' + p.id)
      .then((res) => {
        setModalData(res.data);
      })

  }, [p.id])

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        disabled={true}
        visible={p.isModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textModal}>{modalData.name}</Text>
            <Text style={styles.textModal}>{modalData.description}</Text>
            <Text style={styles.textModal} >{modalData.tutor.firstname}</Text>
            <Button title="close" onPress={p.closeModal}></Button>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Modal_

const styles = StyleSheet.create({
  textModal: {
    color: "black"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
  }
})