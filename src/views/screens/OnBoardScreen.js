import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import COLORS from "../../consts/colors";

export default function OnBoardScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <StatusBar translucent backgroundColor={COLORS.transparent} />
        <Image
          source={require("../../assets/house5.jpg")}
          style={styles.image}
        />
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={[styles.indicator, styles.indicatorActive]} />
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View>
            <Text style={styles.title}> Encuentra tu </Text>
            <Text style={styles.title}> dulce hogar </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textStyle}>Esto es un textito de prueba</Text>
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}
        >
          <Pressable onPress={() =>navigation.navigate("HomeScreen")}>
            <View style={styles.btn}>
              <Text style={{ color: COLORS.white }}>Empezar</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 320,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 16,
    color: COLORS.grey,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
