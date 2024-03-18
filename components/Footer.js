import { Image, StyleSheet, View, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.addressStyle}>
        <Image
          source={require("../assets/map.png")}
          style={styles.iconStyle}
        />
        <Text style={styles.iconTagStyle}>San Francisco</Text>
      </View>
      <View style={styles.addressStyle}>
        <Image
          source={require("../assets/chain.png")}
          style={styles.iconStyle}
        />
        <Text style={styles.iconTagStyle}>https://github.blog</Text>
      </View>
      <View style={styles.addressStyle}>
        <Image
          source={require("../assets/twitter.png")}
          style={styles.iconStyle}
        />
        <Text style={styles.iconTagStyle}>Not Available</Text>
      </View>
      <View style={styles.addressStyle}>
        <Image
          source={require("../assets/building-icon.png")}
          style={styles.iconStyle}
        />
        <Text style={styles.iconTagStyle}>@github</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 30
  },
  addressStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  iconStyle: {
    height: 20,
    width: 20,
    borderRadius: 50,
    
  },
  iconTagStyle: {
    marginLeft: 10
  }
});
