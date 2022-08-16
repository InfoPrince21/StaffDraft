import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import FoodMenuAdditions from "../screens/FoodMenuAdditions";
import FoodMenuKids from "../screens/FoodMenuKids";
import FoodMenuSeafood from "../screens/FoodMenuSeafood";
import FoodMenuSides from "../screens/FoodMenuSides";
import FoodMenuSignatures from "../screens/FoodMenuSignatures";
import FoodMenuDesserts from "../screens/FoodMenuDesserts";
import FoodMenuStatersScreen from "../screens/FoodMenuStartersScreen";

const SignaturesRoute = () => (
  <Animatable.View animation="fadeInUpBig" duration={2000}>
    <FoodMenuSignatures />
  </Animatable.View>
);
const StartersRoute = () => <FoodMenuStatersScreen />;
const SidesRoute = () => <FoodMenuSides />;
const SeafoodRoute = () => <FoodMenuSeafood />;
const AdditonsRoute = () => <FoodMenuAdditions />;
const KidsRoute = () => <FoodMenuKids />;
const DessertsRoute = () => <FoodMenuDesserts />;

const FoodMenuComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "signatures",
      title: "Steaks",
      icon: "food-steak",
    },
    {
      key: "starters",
      title: "Apps",
      icon: "silverware-fork-knife",
    },
    {
      key: "sides",
      title: "Sides",
      icon: "corn",
    },
    {
      key: "seafood",
      title: "Seafood",
      icon: "fish",
  
    },
    {
      key: "additions",
      title: "Addon",
      icon: "plus-box-multiple",
    },
    {
      key: "kids",
      title: "Kids",
      icon: "car-child-seat",
    },
    {
      key: "desserts",
      title: "Desserts",
      icon: "cake",
    },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    signatures: SignaturesRoute,
    starters: StartersRoute,
    sides: SidesRoute,
    seafood: SeafoodRoute,
    additions: AdditonsRoute,
    kids: KidsRoute,
    desserts: DessertsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#040a2e" }}
      inactiveColor="gray"
      shifting={false}
    />
  );
};

export default FoodMenuComponent;
