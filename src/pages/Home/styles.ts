import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    textAlign: 'center',
    backgroundColor: "#4169E1",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  containerforms: {
    margin: 15,
    borderRadius: 20,
    backgroundColor: "#F0F2F5",
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },

  imgcont: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 400,
    height: 100,
  },
});
