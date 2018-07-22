import { Navigation } from "react-native-navigation";

import Login from "./src/screens/Login";
import NextScreen from "./src/screens/NextScreen";
// Register Screens
Navigation.registerComponent("MyFinalProject.Login", () => Login);
Navigation.registerComponent("MyFinalProject.NextScreen", () => NextScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "MyFinalProject.Login",
    title: "Login"
  }
});