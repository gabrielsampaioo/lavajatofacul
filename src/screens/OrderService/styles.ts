import { StyleSheet, TouchableHighlight } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  icon: {
    width: '40%',
    height: 150,
    marginLeft: 100,
  },
  title: {
    alignSelf: "center",
    backgroundColor: "#25EDBD",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 40,
    fontFamily: theme.fonts.title500,
    fontSize: 20,
    color: theme.colors.black,
  },
  subtitle: {
    alignItems: "center",
    color: theme.colors.white,
    fontFamily: theme.fonts.title400,
    paddingTop: 15,
    paddingLeft: 100,
    fontSize: 22,
  },
  item: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: theme.colors.primary,
    padding: 20,
    margin: 10,
    borderWidth: 3,
    borderColor: theme.colors.secondary,
    borderRadius: 15,
  },
  servicesText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.title500,
    fontSize: 15
  },
  services: {
    color: theme.colors.orange
  },
  button: {
    alignSelf: 'flex-end',
    elevation: 8,
    backgroundColor: "#FF3838",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textButton: {
    fontFamily: theme.fonts.title700,
  },
})

