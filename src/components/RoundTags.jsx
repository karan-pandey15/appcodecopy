 

// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const RoundTags = () => {
//   const navigation = useNavigation();

//   const handleImagePress = (screenName) => { 
//     navigation.navigate(screenName);
//   };
//   return (
//     <>
//       <View style={styles.container}>
//         <View style={styles.row}>
//           <ImageContainer name="Attendant" imageSource={require('../assets/images/helper.jpg')} onPress={() => handleImagePress('MilkPrd')} />
//           <ImageContainer name="Driver" imageSource={require('../assets/images/taxi.jpeg')} onPress={() => handleImagePress('VegePrd')} />
//           <ImageContainer name="Driving Teacher" imageSource={require('../assets/images/driver.jpeg')} onPress={() => handleImagePress('skincare')} />
//           <ImageContainer name="Gym Trainer" imageSource={require('../assets/images/gym.jpeg')} onPress={() => handleImagePress('IceCreamScreen')} />
//         </View>
//         <View style={styles.row}>
//         <ImageContainer name="Skating Trainer" imageSource={require('../assets/images/skating.jpeg')} onPress={() => handleImagePress('DailuUsePrd')} />
          
//           <ImageContainer name="Boxing Coach" imageSource={require('../assets/images/boxing.jpeg')} onPress={() => handleImagePress('NoodlesPrd')} />
//           <ImageContainer name="Tution Teacher" imageSource={require('../assets/images/tutionteacher.jpeg')} onPress={() => handleImagePress('FoodOil')} />
//           <ImageContainer name="Dance Teacher" imageSource={require('../assets/images/danceteacher.jpeg')} onPress={() => handleImagePress('BreakFastPrd')} />
//         </View>
//       </View>
//     </>
//   );
// };

// const ImageContainer = ({ name, imageSource, onPress }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.container}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={imageSource}
//             style={styles.image}
//             resizeMode="cover"
//           />
//         </View>
//         <Text style={styles.text}>{name}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     margin: 6
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     marginTop:10
//   },
//   imageContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 50, // Rounded corners
//     overflow: 'hidden', // Clip the content to the rounded border
//     // borderWidth:1,
    
//   },
//   image: {
//     width: '100%',
//     height: '125%',
//     marginTop:4,
//   },
//   text: {
//     marginTop: 5,
//     color: 'gray',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default RoundTags;



import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoundTags = () => {
  const navigation = useNavigation();

  const handleImagePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ImageContainer name="Attendant" imageSource={require('../assets/images/helper.jpg')} onPress={() => handleImagePress('MilkPrd')} />
        <ImageContainer name="Driver" imageSource={require('../assets/images/taxi.jpeg')} onPress={() => handleImagePress('VegePrd')} />
        <ImageContainer name="Driving Teacher" imageSource={require('../assets/images/driver.jpeg')} onPress={() => handleImagePress('skincare')} />
        <ImageContainer name="Gym Trainer" imageSource={require('../assets/images/gym.jpeg')} onPress={() => handleImagePress('IceCreamScreen')} />
      </View>
      <View style={styles.row}>
        <ImageContainer name="Skating Trainer" imageSource={require('../assets/images/skating.jpeg')} onPress={() => handleImagePress('DailuUsePrd')} />
        <ImageContainer name="Boxing Coach" imageSource={require('../assets/images/boxing.jpeg')} onPress={() => handleImagePress('NoodlesPrd')} />
        <ImageContainer name="Tution Teacher" imageSource={require('../assets/images/tutionteacher.jpeg')} onPress={() => handleImagePress('FoodOil')} />
        <ImageContainer name="Dance Teacher" imageSource={require('../assets/images/danceteacher.jpeg')} onPress={() => handleImagePress('BreakFastPrd')} />
      </View>
    </View>
  );
};

const ImageContainer = ({ name, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} resizeMode="cover" />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Distribute space evenly between items
    marginBottom: 20,
    width: '100%',
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
    marginHorizontal: 8, // Add horizontal spacing between the images
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.2, // 20% of screen width to ensure responsive design
    height: Dimensions.get('window').width * 0.2,
    borderRadius: Dimensions.get('window').width * 0.1, // Fully rounded (half of width/height)
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
    width: Dimensions.get('window').width * 0.2, // Ensure text stays within the width of the image
  },
});

export default RoundTags;
