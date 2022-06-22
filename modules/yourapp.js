
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"

const YourApp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.userOuterContainer}>
        <View style={styles.userPictureContainer}>
          <Image
            source={require("../assets/cb-logo.png")}>
          </Image>
        </View>
        <View style={styles.userDetailsOuterContainer}>
          <View style={styles.userDetailsInnerLeftContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              User name
            </Text>
            <Text style={{ fontSize: 12 }}>
              City/Country
            </Text>
          </View>
          <View style={styles.userDetailsInnerRightContainer}>
            <TouchableOpacity>
              <Ionicons name="ios-thumbs-up-sharp" style={{ fontSize: 12, color: "green" }}/>
            </TouchableOpacity>
            <TouchableOpacity> 
              <Ionicons name="ios-thumbs-down-sharp" style={{ fontSize: 12, color: "red" }}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.biographyOuterContainer}>
        <View style={styles.biographyInnerTopContainer}>
          <Text style={{ fontSize: 16 }}>
            Biography
          </Text>
          <TouchableOpacity>
            <Feather name="more-horizontal" style={{ fontSize: 20 }}/>
          </TouchableOpacity>
        </View>
        <View style={styles.biographyInnerBottomContainer}>
          <Text style={{ fontSize: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Massa faucibus nisi egestas quis etiam nec feugiat. 
            Scelerisque pellentesque at in accumsan cras tristique at id. At 
            nullam lectus sapien nulla. At egestas cursus elit, tortor mattis 
            gravida ornare proin ipsum. Duis purus turpis libero
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: "green" }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF"
  },
  userOuterContainer: {
    flex: 3,
    backgroundColor: "#FCE5E4",
  },
  userPictureContainer: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  },
  userDetailsOuterContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: 120,
    flexDirection: "row"
  },
  userDetailsInnerLeftContainer: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "space-around",
    marginVertical: 15
  },
  userDetailsInnerRightContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 35
  },
  usernameText: {
    fontWeight: "bold",
    fontSize: 20
  },
  biographyOuterContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#FFFFFF",
    paddingLeft: 25
  },
  biographyInnerTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 25
  },
  biographyInnerBottomContainer: {
    marginRight: 25,
  },
  postsContainer: {

  },
});

export const YourAppModule = {
  name: "YourApp",
  path: "./",
  package: "@modules",
  value: {
    title: "User Profile",
    navigator: YourApp
  }
}
