import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, ToastAndroid } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [name, setName] = React.useState("");
  const [des, setDestination] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [isDateVisible, setDateVisible] = React.useState(false);
  const [risk, setRisk] = React.useState('');
  const [desc, setDesc] = React.useState();

  const showDatePicker = () => {
    setDateVisible(true);
  }
  const hideDatePicker = () => {
    setDateVisible(false);
  }
  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  }
  const checkInput = () => {

    if (!name.trim()) {
      // Alert.alert('Please Enter Name of Trip');
      ToastAndroid.show('Please')
      return;
    }
    if (!des.trim()) {
      Alert.alert('Please Enter Destination');
      return;
    }
    if (!risk.trim()) {
      Alert.alert('Please Require Risks');
      return;
    }
    Alert.alert('Details entered', 'Name: ' + name + '\nDestination: ' + des
      + '\nDate: ' + date + '\nRisks: ' + risk + '\nDescription: ' + desc);
  };

  

  return (
    <View style={styles.main}>

      <View style={styles.header}>
        <Text style={styles.textHeader}>Expense App</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.position}>

        <Text style={styles.text}>Name</Text>

        <TextInput
          style={styles.input}
          placeholder='Name of Trip'
          value={name}
          onChangeText={(text) => setName(text)}>
        </TextInput>

        <Text style={styles.text}>Destination</Text>

        <TextInput
          style={styles.input}
          value={des}
          onChangeText={(text) => setDestination(text)}>
        </TextInput>

        <Text style={styles.text}>Date of the Trip</Text>

        <View style={styles.date}>
          <TextInput
            style={styles.inputDate}
            value={date ? date.toLocaleDateString() : "Date"}
            onChangeText={text => setDate(text)}
          ></TextInput>

          <Button
            style={styles.button}
            color='#6a994e'
            title="Choose date" onPress={showDatePicker}
          ></Button>

          <DateTimePickerModal
            isVisible={isDateVisible}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          ></DateTimePickerModal>
        </View>

        <Text style={styles.text}>Require Risks Assessment</Text>

        <View>
          <RadioButton.Group
            onValueChange={newValue => setRisk(newValue)}
            value={risk}>
            <View style={styles.Group}>
              <View style={styles.risk} >
                <RadioButton value='Yes' />
                <Text style={{ fontSize: 16 }}>Yes</Text>
              </View>
              <View style={styles.risk}  >
                <RadioButton value='No' />
                <Text style={{ fontSize: 16 }}>No</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <Text style={styles.text}>Description</Text>

        <TextInput
          style={styles.inputDesc}
          value={desc}
          onChangeText={(text) => setDesc(text)}>
        </TextInput>
        <View style={styles.buttonAdd}>
          <Button
            color='#6a994e'
            title="Add Trip" onPress={checkInput}
          ></Button>
        </View>

      </View>


    </View>
  );

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#dde5b6',
  },

  header: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#adc178',
  },

  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },

  position: {
    margin: 20,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 10
  },
  input: {
    height: 42,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 12,
    backgroundColor: 'white'
  },
  inputDesc: {
    height: 80,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 12,
    backgroundColor: 'white'
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputDate: {
    height: 42,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 60,
    width: 200,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  risk: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 20,
    marginBottom: 10

  },
  Group:{
    flexDirection: "row",
    alignItems: "center",

  },
  buttonAdd: {
    marginTop: 15,
    marginHorizontal: 130,
    marginLeft: 20,
    marginRight: 20
  }

});
