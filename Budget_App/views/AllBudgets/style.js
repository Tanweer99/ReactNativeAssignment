import { StyleSheet } from "react-native";
export default StyleSheet.create({
  Heading: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  itemsContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: "20px",
  },
  item: {
    backgroundColor: "white",
    width: "80%",
    marginBottom: 10,
    color: "white",
    border:1,
    borderColor:'grey',
    padding:10
  },
  itemHeading:{
    fontWeight:550,
  },
  NoBudget:{
    textAlign:'center',
    fontWeight:'bold',
    marginTop:10,
    color:'grey'
  }
});
