import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import houses from "../../consts/houses";
import COLORS from "../../consts/colors";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const ListCategories = () => {
    const categoryList = ["Popular", "Recomendado", "Cerca"];
    return (
      <View style={styles.categoryListContainer}>
        {categoryList.map((c, index) => (
          <Pressable key={index} onPress={()=> setSelectedCategory(index)}>
            <Text
              style={[
                styles.categoryListText,
                index == selectedCategory && styles.activeCategoryListText,
              ]}
            >
              {c}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };
  const ListOptions = () => {
    const optionsList = [
      { title: "Comprar Casa", img: require("../../assets/house1.jpg") },
      { title: "Alquilar Casa", img: require("../../assets/hous2.jpeg") },
    ];
    return (
      <View style={styles.optionListContainer}>
        {optionsList.map((o, index) => (
          <View style={styles.optionCard} key={index}>
            <Image source={o.img} style={styles.optionCardImg} />
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              {o.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Location</Text>
          <Text
            style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
          >
            Alcarràs
          </Text>
        </View>
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.profileImage}
        />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.searchInputContainer}>
            <Icon name="search" size={25} color={COLORS.grey} />
            <TextInput placeholder="Buscar en tu ciudad" />
          </View>
          <View style={styles.sortBtn}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>
        <ListOptions />
        <ListCategories />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  optionListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionCardImg: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  categoryListContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
