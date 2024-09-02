import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "@/src/components/common/CustomInput";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.fieldLabel}>Email</Text>
        <CustomInput
          icon={<Ionicons name="mail-sharp" size={19} color={Colors.white} />}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark2,
  },
  fieldContainer: {},
  fieldLabel: {},
});
