import { StyleSheet, Image } from "react-native";

export const ImageRender = ({ placeHolderImage, selectedImage }) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeHolderImage;
  return <Image style={style.imagerender} source={imageSource} />;
};

const style = StyleSheet.create({
  imagerender: {
    width: 300,
    height: 400,
    borderRadius: 18,
  },
});
