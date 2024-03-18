import { Image, StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../assets/orderedlistocat.png")}
          style={styles.imageStyle}
        />
        <View style={styles.headerStyle}>
          <Text style={styles.nameStyle}>The Octocat</Text>
          <Text style={styles.userNameStyle}>@Octocat</Text>
          <Text style={styles.dateStyle}>Joined 25 Jan 2011</Text>
        </View>
      </View>
      <Text style={[styles.dateStyle, styles.descriptionStyle]}>
        SoftSync INC is your digital ally. We're providing pixel-perfect and responsive web design and development with the latest technologies.
      </Text>
      <View style={[styles.container, styles.repoStyle]}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.dateStyle}>Repo</Text>
            <Text style={styles.dateStyle}>8</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.dateStyle}>Followers</Text>
            <Text style={styles.dateStyle}>3938</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.dateStyle}>Following</Text>
            <Text style={styles.dateStyle}>9</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  headerStyle: {
    marginTop: 20,
    marginLeft: 10,
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  userNameStyle: {
    color: "blue",
    fontSize: 18,
  },
  dateStyle: {
    color: "gray",
    fontSize: 15,
  },
  descriptionStyle: {
    marginTop: 30,
    lineHeight: 25,
  },
  repoStyle: {
    backgroundColor: '#e0ffff',
    padding: 30,
    justifyContent: "space-evenly",
    marginTop: 50,
    borderRadius: 10
  },
});
