import { Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import styles from "./styles";

function Favourite() {
  const isFocused = useIsFocused();
  const [favouritecontact, setFavouriteContact] = useState([]);
  const asyncStorage = useAsyncStorage("ALL_CONTACTS");

  useEffect(() => {
    if (isFocused) {
      getFavouriteContact();
    }
  }, [isFocused]);

  const getFavouriteContact = async () => {
    const resp = await asyncStorage.getItem();
    const favcontact = JSON.parse(resp ?? []);
    const newfavcontact = favcontact.filter((contact) => contact.isFavourite);
    setFavouriteContact(newfavcontact);
  };

  const FlatListItem = ({ item }) => (
    <View style={styles.eachContact}>
      <Text style={styles.contactname}>{item.name}</Text>
      <Text>{item.mobileNumber}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={favouritecontact} renderItem={FlatListItem} />
    </View>
  );
}
export default Favourite;
