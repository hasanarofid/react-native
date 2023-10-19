import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


const Slider = () => {

    const images = [
        require('./img/rsds1.png'),
        require('./img/rsds2.png'),
        require('./img/rsds3.png'),
      ];

    return (
      <View>
         <SliderBox
            images={images}
            sliderBoxHeight={200}
            
        />

      </View>
    );
  };
  
 
  
  export default Slider;
  