import React from "react";
import { Text } from "react-native";

const CustomText = ({
  font,
  value,
  size,
  color,
  fontWeight,
  style,
  numberOfLines,
  ...rest
}) => {
  return (
    <>
      <Text
        numberOfLines={numberOfLines}
        style={[
          {
            color: color,
            fontSize: size,
            fontWeight: fontWeight,
          },
          style,
        ]}
        {...rest}
      >
        {value}
      </Text>
    </>
  );
};

CustomText.defaultProps = {
  font: "regular",
  size: 22,
  color: "#808080",
  fontWeight: "400",
};

export default CustomText;
