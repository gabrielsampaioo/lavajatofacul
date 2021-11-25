import { StyleSheet, TouchableHighlight } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 35,
    marginBottom: 10
  },
  icon: {
    width: '40%',
    height: 150,
    marginTop: "5%",
    marginLeft: 75,
  },
  title: {
    alignSelf: "center",
    backgroundColor: "#25EDBD",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 50,
    fontFamily: theme.fonts.title500,
    marginRight: 27,
    fontSize: 20,
    color: theme.colors.black,
  },
  subtitle: {
    alignItems: "center",
    color: theme.colors.white,
    fontFamily: theme.fonts.title400,
    paddingTop: 15,
    paddingLeft: 32,
  },
  scrollview: {
    paddingTop: 25
  },
  registerText: {
    fontFamily: theme.fonts.title400,
    fontSize: 20,
    color: theme.colors.white
  },
  registerInput: {
    borderColor: theme.colors.secondary,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    marginRight: 40,
    borderRadius: 15,
    height: 43,
    margin: 10
  },
  containerButton: {
    paddingRight: 50,
    paddingTop: 30,
  },
  button: {
    alignSelf: "center",
    elevation: 8,
    backgroundColor: "#25EDBD",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
  textButton: {
    fontFamily: theme.fonts.title700,
  },
})