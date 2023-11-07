import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

const Videos = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  React.useEffect(() => {
    setStatus({ ...status, isPlaying: "Play" });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
          color="red"
        />
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/WORKOUT.mp4")}
        isPlaying
        resizeMode={ResizeMode.STRETCH}
        isLooping
        onFullscreenUpdate
        shouldPlay
        isMuted
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#82EEFD",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "50%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "15%",
  },
});
