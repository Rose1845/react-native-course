import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
const RooyLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  );
};

export default RooyLayout;
