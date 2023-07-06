import { useState } from "react";
import { useDispatch } from "react-redux";
import { Text, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { addNewBudget } from "../../store/Budgets/action";
import styles from "./styles";
import { APP_ROUTES } from "../../routes";

function AddBudget() {
  const [budgetName, setBudgetName] = useState("");
  const [budgetNameError, setBudgetNameError] = useState("");
  const [plannedValue, setPlannedValue] = useState("");
  const [plannedValueError, setPlannedValueError] = useState("");
  const [actualValue, setActualValue] = useState("");
  const [actualValueError, setActualValueError] = useState("");

  const navigator = useNavigation();

  const dispatch = useDispatch();

  const onBudgetNameChange = (value) => {
    setBudgetName(value);
    budgetNameValidator(value);
  };

  const onPlannedValueChange = (value) => {
    setPlannedValue(value);
    plannedValueValidator(value);
  };

  const onActualValueChange = (value) => {
    setActualValue(value);
    actualValueValidator(value);
  };

  const budgetNameValidator = (value) => {
    if (value === "") {
      setBudgetNameError("Budget name is required");
      return false;
    }
    setBudgetNameError("");
    return true;
  };

  const plannedValueValidator = (value) => {
    let rgexp = /^[0-9]+$/;
    if (value === "") {
      setPlannedValueError("Planned value is required");
      return false;
    } else if (!rgexp.test(value)) {
      setPlannedValueError("Please enter, planned value in numbers ");
      return false;
    }
    setPlannedValueError("");
    return true;
  };

  const actualValueValidator = (value) => {
    let rgexp = /^[0-9]+$/;
    if (value === "") {
      setActualValueError("Actual value is required");
      return false;
    } else if (!rgexp.test(value)) {
      setActualValueError("Please enter, actual value in numbers ");
      return false;
    }
    setActualValueError("");
    return true;
  };
  const clearAllTextBox = () => {
    setBudgetName("");
    setPlannedValue("");
    setActualValue("");
  };
  const saveBudgetToList = () => {
    const hasBudgetNameError = budgetNameValidator(budgetName);
    const hasPlannedValueError = plannedValueValidator(plannedValue);
    const hasActualValueError = actualValueValidator(actualValue);

    const payload = {
      budgetName,
      actualValue,
      plannedValue,
    };

    if (hasBudgetNameError && hasActualValueError && hasPlannedValueError) {
      dispatch(addNewBudget(payload));
      clearAllTextBox();
    }
  };

  const redirectToAllBudgetsPage = () =>
    navigator.navigate(APP_ROUTES.ALL_BUDGETS_PAGE);

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>My Budget App</Text>

      <Text style={styles.fieldname}>Name</Text>
      <TextInput
        value={budgetName}
        placeholder="Enter Budget name"
        placeholderTextColor="white"
        style={styles.inputfields}
        onChangeText={onBudgetNameChange}
      />
      {!!budgetNameError && (
        <Text style={{ color: "red", marginBottom: 5 }}>{budgetNameError}</Text>
      )}

      <Text style={styles.fieldname}>Planned Amount</Text>
      <TextInput
        value={plannedValue}
        placeholder="Enter Planned value"
        placeholderTextColor="white"
        style={styles.inputfields}
        onChangeText={onPlannedValueChange}
        keyboardType={"numeric"}
      />
      {!!plannedValueError && (
        <Text style={{ color: "red", marginBottom: 5 }}>
          {plannedValueError}
        </Text>
      )}

      <Text style={styles.fieldname}>Actual Amount</Text>
      <TextInput
        value={actualValue}
        placeholder="Enter Actual value"
        placeholderTextColor="white"
        style={styles.inputfields}
        onChangeText={onActualValueChange}
        keyboardType={"numeric"}
      />
      {!!actualValueError && (
        <Text style={{ color: "red", marginBottom: 5 }}>
          {actualValueError}
        </Text>
      )}
      <View style={styles.savebtn}>
        <Button
          title={"Save"}
          style={styles.savebtn}
          onPress={saveBudgetToList}
        />
      </View>
      <Button
        title="Get All Budgets"
        onPress={redirectToAllBudgetsPage}
        style={styles.getbudgetbtn}
      />
    </View>
  );
}

export default AddBudget;
