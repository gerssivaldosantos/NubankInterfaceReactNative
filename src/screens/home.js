import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Touchable,
  Dimensions,
} from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
export default function App() {
  const usuario = "Gerssivaldo";
  const faturaAtual = "R$ 5,31";
  const saldoDisponivel = "R$ 8,90";
  const limite = 'R$ 48,76'
  const [isHidde, setisHidde] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#6a0f8c"
        style={"light"}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, {usuario}</Text>

        <TouchableOpacity
          style={styles.buttonHidde}
          onPress={() => setisHidde(!isHidde)}
        >
          <Ionicons
            size={23}
            style={{ color: "white" }}
            name={isHidde ? "ios-eye-outline" : "ios-eye-off-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSettings}>
          <Ionicons
            name="ios-settings-outline"
            size={23}
            style={{ color: "white" }}
          ></Ionicons>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.cardContainer}>
          <Ionicons style={styles.cardIcon} size={29} name="ios-card-outline" />

          <Text style={styles.cardTitle}> Cartão de Crédito </Text>

          <Text style={styles.cardSubTitle}> Fatura atual</Text>
          <Text style={styles.invoiceTitle}>{faturaAtual}</Text>
          <Text style={styles.limitTitle}>Limite disponível</Text>
          <Text style={styles.limit}>{limite}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8914b5",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    /* backgroundColor:'green', */
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerText: {
    position: "absolute",
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    left: "5%",
  },
  buttonHidde: {
    position: "absolute",
    width: 52,
    height: 52,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
    right: "20%",
    borderRadius: 50,
  
  },
  buttonSettings: {
    position: "absolute",
    width: 52,
    height: 52,
    backgroundColor: "#ffffff20",
    justifyContent: "center",
    alignItems: "center",
    right: "5%",
    borderRadius: 50,
  
  },
  cardContainer: {
    height: deviceHeight * 0.2,
    backgroundColor: "white",
    width: deviceWidth * 0.9,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,

    elevation: 3,
  },
  cardTitle: {
    position: "absolute",
    left: 64,
    top: 25,
    fontSize: 15,
    color: "#828282",
  },
  cardIcon: {
    position: "absolute",
    left: 24,
    top: 22,
    color: "#828282",
  },
  cardSubTitle:{
    position: "absolute",
    left: 22,
    top: 64,
    fontSize: 13,
    color: "#828282",
  },
  invoiceTitle:{
    position: "absolute",
    left: 26.5,
    fontWeight:'bold',
    top: 90,
    fontSize: 25,
    color: "#1fa9de",
  },
  limitTitle:{
    position: "absolute",
    left: 28,
    top: '76%',
    fontSize: 13,
    color: "#454545",
  },
  limit:{
    position: "absolute",
    left: 140,
    top: '76%',
    fontSize: 13,
    color: "green",
    fontWeight:'bold'
  }
});
