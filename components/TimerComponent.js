import { Text, View, Alert } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useCountdown } from "react-native-countdown-circle-timer";
import { useNavigation } from "@react-navigation/native";


const TimerComponent1 = ({isPlaying}) => {
const navigation = useNavigation();
  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={30}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => {
        console.log("You ran out of time!");

        Alert.alert(
          "Your Time Expired!",
          "You will now be redirected to your home page.",
          [{ text: "OK", onPress: goHome }],
          { cancelable: false }
        );
        return { shouldRepeat: false, delay: 1.5 }; // repeat animation in 1.5 seconds
      }}
    >
      {({ remainingTime }) => <Text>Time Remaining....{remainingTime}</Text>}
    </CountdownCircleTimer>
  );
};
export default TimerComponent1;
