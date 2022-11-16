import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function App() {

  const [name, setName] = React.useState("");
  const [des, setDes] = React.useState("");
  const [date, setDate] = React.useState(new Date()); 
  const [isDateVisible, setDateVisible] = React.useState(false); 

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

  return (
    <View style = {styles.main}>

      <View style={styles.header}>
        <Text style={styles.textHeader}>Expense App</Text>
        <StatusBar style="auto" />
      </View>

      <View style = {styles.position}>        

        <Text style = {styles.text}>Name</Text>

        <TextInput 
          style = {styles.input}
          placeholder='Name of Trip' 
          value={name}
          onChangeText={(text) => setName(text)}>
        </TextInput>

        <Text style = {styles.text}>Destination</Text>

        <TextInput 
          style = {styles.input}
          value={des}
          onChangeText={(text) => setDes(text)}>
        </TextInput>

       


        
        
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
    width:'100%',
    height:'10%',
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
    marginTop: 30,
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
    marginBottom: 25,
    marginRight: 20,
    padding: 10,
    borderWidth:1,
    borderColor:'green',
    borderRadius: 12,
    backgroundColor: 'white'
  },
  

});
