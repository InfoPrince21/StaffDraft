import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";

const ENTRIES1 = [
  {
    title: "Nike Gift Card",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration:
      "https://assets.listia.com/photos/631736076f3207bc9763/original.png?s=320x320m&sig=76ce5a176d70feb9&ts=1474229657",
  },
  {
    title: "Forver 21 Gift Card",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTL2gL0lxrDt5ZLxZKUl8BVrgLwL23OHkxFkY0gUc08cXfr3wAhrdTia3qXtBtJWfKDxgLljsRSm_FskU8f-Zrp_KLEQafzbw",
  },
  {
    title: "Pappas Gift Card",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration:
      "https://marketingcdn.giftcardgranny.com/merchant-images/lg/pappas-restaurants-gift-card.png",
  },
  {
    title: "Chick-fil-A Gift Card",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration:
      "https://scene7.samsclub.com/is/image/samsclub/0079936618283_A",
  },
  {
    title: "Gucci Gift Card",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://www.cardbear.com/img/large/Gucci-gift-card.png",
  },
  {
    title: "Best Buy Gift Card",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRc7G0UJygQtLO7ytrOGP_GB-UOmQrefDDrW7DyJIQa4KHU4SqkA6aj1NYsqG9Ok70TR0&usqp=CAU",
  },
  {
    title: "Academy Gift Card",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://images.freshop.com/00076750208669/2f42f04856bfb4be03136232ac082b17_large.png",
  },
  {
    title: "Specs Gift Card",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://www.giftcardio.com/cardimage/SPEC.png",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <Animatable.View animation="bounceInLeft" duration={2500} delay={700}>
        <View style={styles.item}>
          <ParallaxImage
            source={{ uri: item.illustration }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <Text style={{ alignSelf: "center", padding: 10 }}>Next</Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
