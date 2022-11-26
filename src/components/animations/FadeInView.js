import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const FadeInView = ({children, style}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[style, {opacity: fadeAnim}]}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;