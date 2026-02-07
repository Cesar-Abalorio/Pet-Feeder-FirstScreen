import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    console.log(username, password, remember);
  };
  
  return (
    <View style={styles.container}>

      <Image
      source={require("../assets/images/logo.jpg")}
      style={styles.logo}
      />

      <Text style={styles.title}>Log in to your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.row}>
        <View style={styles.rememberRow}>
          <Checkbox
            value={remember}
            onValueChange={setRemember}
            color={remember ? "#2aa8a1" : undefined}
          />
          <Text style={styles.rememberText}>Remember</Text>
        </View>

        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.create}>Create Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#ffffff",
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },

  title: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
    color: "#444",
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#2aa8a1",   
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    fontSize: 14,
    backgroundColor: "#f9fefe",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  rememberText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#333",
  },

  forgot: {
    fontSize: 13,
    color: "#2aa8a1",
  },

  button: {
    backgroundColor: "#2aa8a1", 
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },

  create: {
    textAlign: "center",
    marginTop: 22,
    fontSize: 13,
    color: "#444",
    textDecorationLine: "underline",
  },
});
