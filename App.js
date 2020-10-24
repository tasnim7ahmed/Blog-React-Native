import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./src/navigation/AuthStack";
import AppDrawerScreen from "./src/navigation/AppDrawer";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcOZW6aYmJ0e36FLva9xU89zunyVz1Eh0",
  authDomain: "blog-73682.firebaseapp.com",
  databaseURL: "https://blog-73682.firebaseio.com",
  projectId: "blog-73682",
  storageBucket: "blog-73682.appspot.com",
  messagingSenderId: "806516468868",
  appId: "1:806516468868:web:66fcf360a9caf5740fa6d1",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
