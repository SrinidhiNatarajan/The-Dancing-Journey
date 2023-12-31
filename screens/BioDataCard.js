import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BioDataScreen from "../screens/BioDataScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import firebase from "firebase/compat/app";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};
import { getAuth, onAuthStateChanged } from "firebase/auth";
var uid = "";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

import { getDatabase, ref, onValue, set, update } from "firebase/database";
export default class BioDataCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      light_theme: true,
      bio_id: this.props.bio.key,
      bio_data: this.props.bio.value,
      is_liked: false,
      likes: this.props.bio.value.likes,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.fetchUser();
  }

  likeAction = () => {
    if (this.state.is_liked) {
      const db=getDatabase()
        set(db,"posts")
        .child(this.state.bio_id)
        .child("likes")
        {firebase.database.ServerValue.increment(-1)}
      this.setState({ likes: (this.state.likes -= 1), is_liked: false });
    } else {
      firebase
          const db = getDatabase();
        set("posts")
        .child(this.state.bio_id)
        .child("likes")
        {firebase.database.ServerValue.increment(1)}
      this.setState({ likes: (this.state.likes += 1), is_liked: true });
    }
  };
  
  fetchUser = () => {
let theme;
const db = getDatabase();
const starCountRef = ref(db, "/users/" + uid);
onValue(starCountRef, (snapshot) => {
  theme = snapshot.val().current_theme;
});
  };

  render() {
    let bio = this.state.bio_data;
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      let images = {
        image_1: require("../assets/2.jpeg"),
        image_2: require("../assets/3.png"),
        image_3: require("../assets/4.jpg"),
        image_4: require("../assets/5.jpg"),
        image_5: require("../assets/6.jpg"),
      };
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("BioDataScreen", {
              bio: this.props.bio,
            })
          }
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View
            style={
              this.state.light_theme
                ? styles.cardContainerLight
                : styles.cardContainer
            }
          >
            <Image
              source={images[this.props.bio.value.bioData.preview_image]}
              style={styles.bioImage}
            ></Image>
            <View style={styles.titleContainer}>
              <View style={styles.titleTextContainer}>
                <Text
                  style={
                    this.state.light_theme
                      ? styles.bioTitleTextLight
                      : styles.bioTitleText
                  }
                >
                  Name: {this.props.bio.value.bioData.name}
                </Text>
                <Text
                  style={
                    this.state.light_theme
                      ? styles.bioAuthorTextLight
                      : styles.bioAuthorText
                  }
                >
                 Experience: {this.props.bio.value.bioData.experience}
                </Text>
                <Text
                  style={
                    this.state.light_theme
                      ? styles.descriptionTextLight
                      : styles.descriptionText
                  }
                >
                 Age: {this.props.bio.value.bioData.age}
                </Text>
                <Text
                  style={
                    this.state.light_theme
                      ? styles.descriptionTextLight
                      : styles.descriptionText
                  }
                >
                 Category: {this.props.bio.value.bioData.category}
                </Text>

                <Text
                  style={
                    this.state.light_theme
                      ? styles.descriptionTextLight
                      : styles.descriptionText
                  }
                >
                 Gender: {this.props.bio.value.bioData.gender}
                </Text>

                <Text
                  style={
                    this.state.light_theme
                      ? styles.descriptionTextLight
                      : styles.descriptionText
                  }
                >
                Hobbies: {this.props.bio.value.bioData.hobbies}
                </Text>

                <Text
                  style={
                    this.state.light_theme
                      ? styles.descriptionTextLight
                      : styles.descriptionText
                  }
                >
                 Country: {this.props.bio.value.bioData.country}
                </Text>

              </View>
            </View>

            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={
                  this.state.is_liked
                    ? styles.likeButtonLiked
                    : styles.likeButtonDisliked
                }
              >
                <Ionicons
                  name={"heart"}
                  size={RFValue(30)}
                  color={this.state.light_theme ? "black" : "white"}
                />

                <Text
                  style={
                    this.state.light_theme
                      ? styles.likeTextLight
                      : styles.likeText
                  }
                >
                  {this.state.likes}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
  },
  cardContainerLight: {
    margin: RFValue(13),
    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2),
  },
   bioImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  titleTextContainer: {
    flex: 0.8,
  },
  iconContainer: {
    flex: 0.2,
  },
  bioTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white",
  },
  bioTitleTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "black",
  },
  bioAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
  },
  bioAuthorTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "black",
  },
  descriptionContainer: {
    marginTop: RFValue(5),
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "white",
  },
  descriptionTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "black",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },
  likeButtonLiked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
  },
  likeButtonDisliked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#eb3948",
    borderWidth: 2,
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: 25,
    marginLeft: 25,
    marginTop: 6,
  },
  likeTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 25,
    marginLeft: 25,
    marginTop: 6,
  },
});
