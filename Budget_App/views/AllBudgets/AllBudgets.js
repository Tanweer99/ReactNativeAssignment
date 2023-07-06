import { Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import styles from "./style";

function AllBudgets() {
  const allBudgets = useSelector(getAllBudgetsSelector);
  const hasBudget = Array.isArray(allBudgets) && allBudgets.length > 0;

  if (hasBudget) {
    return (
      <ScrollView>
        <Text style={styles.Heading}>Budget List</Text>

        <View style={styles.itemsContainer}>
          {allBudgets.map((budget, index) => {
            const { budgetName, actualValue, plannedValue } = budget || {};

            return (
              <View key={index} style={styles.item}>
                <Text>
                  <Text style={styles.itemHeading}>Budget Name:</Text>
                  {budgetName}
                </Text>
                <Text>
                  <Text style={styles.itemHeading}>Actual Amount:</Text>
                  {actualValue}
                </Text>
                <Text>
                  <Text style={styles.itemHeading}>Planned Amount:</Text>
                  {plannedValue}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  return (
    <Text style={styles.NoBudget}>No Budget to display, please add new</Text>
  );
}

function getAllBudgetsSelector(state) {
  return state.budget.budgets || [];
}

export default AllBudgets;
