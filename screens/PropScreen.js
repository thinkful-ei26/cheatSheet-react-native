import React from 'react';
import { View, Text, Image } from 'react-native';

export default function PropScreen() {
  return (
    <View>
      <Text>
        Props is short for 'Properties'. React components use props like
        functions use arguments. They are bits of data, that get passed around.
        Props are read-only, and so do not change.
      </Text>
        {/* <View>
          <Image source={'../assets/images/robot-dev.png'} />
        </View> */}
    </View>
  );
}
