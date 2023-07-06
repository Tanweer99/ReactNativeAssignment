import {
  View, 
  Text,
  FlatList,
  TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

import styles from "./styles";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import Icon from 'react-native-vector-icons/FontAwesome';

import {APP_ROUTES} from '../../routes'

import {useIsFocused, useNavigation} from '@react-navigation/native';

function MyContacts() {

  const [mycontact, setMyContact] = useState([]);
  const asyncStorage = useAsyncStorage("ALL_CONTACTS");
  const navigator = useNavigation();
  const isFocused = useIsFocused();

  const redirectToCreateContact = () => navigator.navigate(APP_ROUTES.NEWCONTACT)

  useEffect(() => {
    if(isFocused) {
      getLocalData();
    }
  }, [ isFocused ]);

  function comparer(a,b){
    if(a.name < b.name){
       return -1;
    }
    else if(a.name > b.name){
        return 1;
    }
    return 0;
  }

  const getLocalData = async () => {
    try {
      const response = await asyncStorage.getItem();
      setMyContact((JSON.parse(response ?? [])).sort(comparer));
    } catch {}
  };

  return (
    <View>
      <View style={styles.contactListContainer}>
        <FlatList data={mycontact} renderItem={(props) => <FlatListItem {...props}  />} />
        <TouchableOpacity style={styles.addButton} onPress={redirectToCreateContact}>
          <Icon name="plus" size={20} color='white'/>
        </TouchableOpacity> 
      </View>
    </View>
  );
}

function FlatListItem({ item }) {
  const navigator = useNavigation();

  const redirectToEditContact = () => {
    navigator.navigate(
      APP_ROUTES.EDITCONTACT,
      {
        item,
        isEditView: true
      }
    )
  }

  return (
    <TouchableOpacity onPress={redirectToEditContact}>
      <View style={styles.eachContact}>
        <Text style={styles.contactname}>{item.name}</Text>
        <Text>{item.mobileNumber}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MyContacts;
