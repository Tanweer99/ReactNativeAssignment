import { useState, useLayoutEffect } from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { View, Text, TextInput, Button, CheckBox } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";

function CreateContact() {
  const [isFavourite, setIsFavourite] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [landlineNumber, setLandlineNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [landlineNumberError, setLandlineNumberError] = useState("");

  const asyncStorage = useAsyncStorage("ALL_CONTACTS");
  const navigator = useNavigation();
  const { params: routeParams } = useRoute();
  const { isEditView = false, item: prevContact } = routeParams ?? {};

  useLayoutEffect(() => {
    if (isEditView) {
      const { name, mobileNumber, landlineNumber, isFavourite } = prevContact;

      setName(name);
      setMobileNumber(mobileNumber);
      setLandlineNumber(landlineNumber);
      setIsFavourite(isFavourite);
    }
  }, []);

  const onNameChange = (value) => {
    setName(value);
    NameValidator(value);
  };

  const onMobileNumberChange = (value) => {
    setMobileNumber(value);
    MobileNumberValidator(value);
  };

  const onLandlineNumberChange = (value) => {
    setLandlineNumber(value);
    LandlineNumberValidator(value);
  };

  const NameValidator = (value) => {
    if (value === "") {
      setNameError("name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  const MobileNumberValidator = (value) => {
    let rgexp = /^[0-9]+$/;
    let numberlength = value.length.toString();
    if (value === "") {
      setMobileNumberError("mobile number is required");
      return false;
    } else if (!rgexp.test(value)) {
      setMobileNumberError("please enter, mobile number in integers ");
      return false;
    } else if (numberlength > 10 || numberlength < 10) {
      setMobileNumberError("please enter mobile number 10 digits");
      return false;
    }
    setMobileNumberError("");
    return true;
  };

  const LandlineNumberValidator = (value) => {
    let rgexp = /^[0-9]+$/;
    let numberlength = value.length.toString();
    if (!rgexp.test(value)) {
      setLandlineNumberError("please enter, landline number in integers");
      return false;
    } else if (numberlength > 10 || numberlength < 10) {
      setLandlineNumberError("please enter landline number 10 digits");
      return false;
    }
    setLandlineNumberError("");
    return true;
  };

  const toggleFavourite = () => setIsFavourite((isFavourite) => !isFavourite);

  const clearInputField = () => {
    setName("");
    setMobileNumber("");
    setLandlineNumber("");
  };

  const saveContact = async () => {
    const hasNameError = NameValidator(name);
    const hasMobileNumberError = MobileNumberValidator(mobileNumber);

    const contact = {
      name,
      mobileNumber,
      landlineNumber,
      isFavourite,
    };

    if (hasNameError && hasMobileNumberError) {
      const allContacts = await getParsedResult();

      if (isEditView) {
        const newAllContacts = allContacts.filter(
          (contact) => contact.mobileNumber !== prevContact.mobileNumber
        );
        newAllContacts.push(contact);
        await asyncStorage.setItem(JSON.stringify(newAllContacts));
      } else {
        const newAllContacts = [...allContacts, contact];
        await asyncStorage.setItem(JSON.stringify(newAllContacts));
      }

      navigator.goBack();
    }
  };

  const getParsedResult = async () => {
    try {
      const response = await asyncStorage.getItem();
      return JSON.parse(response ?? []);
    } catch {
      return [];
    }
  };

  const deleteContact = async () => {
    const allContacts = await getParsedResult();
    const newAllContacts = allContacts.filter(
      (contact) => contact.mobileNumber !== prevContact.mobileNumber
    );
    await asyncStorage.setItem(JSON.stringify(newAllContacts));

    navigator.goBack();
  };

  return (
    <View>
      <View style={styles.outercontainer}>
        <View style={styles.container}>
          <View style={styles.fieldcontainer}>
            <Text style={styles.fieldname}>Name</Text>
            <TextInput
              placeholder="Enter the name"
              style={styles.input}
              value={name}
              onChangeText={onNameChange}
            />
          </View>
          {!!nameError && (
            <Text style={{ color: "red", marginBottom: 5 }}>{nameError}</Text>
          )}

          <View style={styles.fieldcontainer}>
            <Text style={styles.fieldname}>Mobile</Text>
            <TextInput
              value={mobileNumber}
              placeholder="Enter the mobile number"
              keyboardType={"numeric"}
              style={styles.input}
              onChangeText={onMobileNumberChange}
              maxLength={10}
            />
          </View>
          {!!mobileNumberError && (
            <Text style={{ color: "red", marginBottom: 5 }}>
              {mobileNumberError}
            </Text>
          )}

          <View style={styles.fieldcontainer}>
            <Text style={styles.fieldname}>Landline</Text>
            <TextInput
              value={landlineNumber}
              placeholder="Enter the landline number"
              keyboardType={"numeric"}
              style={styles.input}
              maxLength={10}
              onChangeText={onLandlineNumberChange}
            />
          </View>
          {!!landlineNumberError && (
            <Text style={{ color: "red", marginBottom: 5 }}>
              {landlineNumberError}
            </Text>
          )}

          <View style={styles.fieldcontainer}>
            <CheckBox value={isFavourite} onValueChange={toggleFavourite} />
            <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
              Mark as favourite
            </Text>
          </View>
          <View style={styles.savebtn}>
            <Button title="Save" onPress={saveContact} />
          </View>
          {isEditView && (
            <View style={styles.deletebtn}>
              <Button title="Delete" onPress={deleteContact} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
export default CreateContact;
