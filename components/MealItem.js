import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import CustomText from "../components/CustomText";

const MealItem = ({
  onSelectMeal,
  title,
  duration,
  complexity,
  affordability,
  image
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <CustomText>{duration} minutes</CustomText>
            <CustomText>{complexity.toUpperCase()}</CustomText>
            <CustomText>{affordability.toUpperCase()}</CustomText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 220,
    width: "100%",
    backgroundColor: "#ccc",
    overflow: "hidden",
    borderRadius: 10,
    marginVertical: 10
    // elevation: 6
  },
  mealRow: {
    flexDirection: "row"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%"
  },
  mealHeader: {
    height: "90%"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 6,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  }
});

export default MealItem;
