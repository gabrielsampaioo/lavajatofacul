import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 35,

  },
  icon: {
    width: '40%',
    height: 150,
    marginTop: "-40%",
    marginLeft: 75,
  },
  cpf: {
    paddingTop: "10%",
  },
  cpfInput: {
    borderColor: theme.colors.secondary,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    borderWidth: 1,
    marginRight: 40,
    borderRadius: 15,
    height: 43,

  },
  senha: {
    paddingTop: 10,
  },
  senhaInput: {
    borderColor: theme.colors.secondary,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    borderWidth: 1,
    marginRight: 40,
    borderRadius: 15,
    height: 43,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    paddingBottom: 10,
  },
  containerButton: {
    paddingRight: 50,
    paddingTop: 50,
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
  error: {
    position: 'relative',
    top: 5
  },
  error__text: (text = 'none') => ({
    color: "#800000",
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    fontWeight: 'bold',
    display: text
  })
})