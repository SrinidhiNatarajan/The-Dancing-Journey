import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase/compat/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
import * as DocumentPicker from "expo-document-picker";
import {
  getStorage,
  ref as aref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

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

export default class CreateBioData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: "",
      dropdownHeight: 40,
      name:"",
      experience:"",
      age:"",
      category:"",
      gender:"",
      hobbies:"",
      country:""

    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  async addBio() {
    if (
      this.state.name &&
      this.state.age &&
      this.state.experience &&
      this.state.category && 
      this.state.hobbies && 
      this.state.gender && 
      this.state.country &&
      this.state.previewImage
    ) {
      var d = new Date();
      let bioData = {
        preview_image: this.state.previewImage,
        name:this.state.name,
        age:this.state.age,
        experience:this.state.experience,
        category:this.state.category,
        hobbies:this.state.hobbies,
        gender:this.state.gender,
        country:this.state.country,
        created_on: d.toString(),
        author_uid: uid,
        likes: 0,
      };
      console.log(bioData);

      const db = getDatabase();
      set(ref(db, "/posts/" + Math.random().toString(36).slice(2)), {
        bioData,
      }).then(function (snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Feed");
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }
 
  
  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      let preview_images = {
        image_1: require("../assets/2.jpeg"),
        image_2: require("../assets/3.png"),
        image_3: require("../assets/4.jpg"),
        image_4: require("../assets/5.jpg"),
        image_5: require("../assets/6.jpg"),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/11.webp")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Upload Biodata</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: "Image 1", value: "image_1" },
                  { label: "Image 2", value: "image_2" },
                  { label: "Image 3", value: "image_3" },
                  { label: "Image 4", value: "image_4" },
                  { label: "Image 5", value: "image_5" },
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? "black" : "white",
                  fontFamily: "Bubblegum-Sans",
                }}
                onSelectItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>
            <ScrollView>
              <TextInput
                style={styles.inputFont}
                onChangeText={(name) => this.setState({ name })}
                placeholder={"Name"}
                placeholderTextColor="white"
              />
              <TextInput
                style={styles.inputFont}
                onChangeText={(age) => this.setState({ age })}
                placeholder={"Age"}
                placeholderTextColor="white"
              />
              <TextInput
                style={styles.inputFont}
                onChangeText={(experience) => this.setState({ experience })}
                placeholder={"Experience"}
                placeholderTextColor="white"
              />
              <TextInput
                style={styles.inputFont}
                onChangeText={(country) => this.setState({ country })}
                placeholder={"Country"}
                placeholderTextColor="white"
              />
              <TextInput
                style={styles.inputFont}
                onChangeText={(hobbies) => this.setState({ hobbies })}
                placeholder={"Hobbies"}
                placeholderTextColor="white"
              />
              <TextInput
                style={styles.inputFont}
                onChangeText={(gender) => this.setState({ gender })}
                placeholder={"Gender"}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(category) => this.setState({ category })}
                placeholder={"Category"}
                placeholderTextColor="white"
              />

              <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addBio()}
                  title="Submit"
                  color="#841584"
                />
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    marginTop: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center",
  },
});