import { Keyframe } from "react-native-reanimated";

export const sppiner = new Keyframe({
    0: {
      transform: [{rotate: '0deg'}],
    },
    100: {
      transform: [{rotate: '360deg'}],
    }
  
})