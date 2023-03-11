import { React } from "react";
import { StyleSheet, Modal, Text, TouchableOpacity, Button, View } from "react-native";

function Modal_(p) {
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
            <Text style={styles.textModal}>hii</Text>
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
    backgroundColor:"rgba(0,0,0,0.6)"
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