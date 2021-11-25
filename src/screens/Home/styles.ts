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
    marginTop: "-70%",
    marginLeft: 75,
  },
  welcomeText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.title500,
    fontSize: 15
  },
  opcoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 50,
    paddingBottom: 50

  },
  opcoes2: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 40
  },
  orderText: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    paddingTop: 10,

  },
  serviceText: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    paddingTop: 10,

  },
  carText: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    paddingTop: 10,

  },
  logoutText: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.white,
    paddingTop: 10,
    paddingLeft: 50,
  }
})