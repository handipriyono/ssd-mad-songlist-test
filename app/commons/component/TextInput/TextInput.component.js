import React from "react";
import { TextInput } from "react-native";
import Styles from "./TextInput.style";

const TextInputCustom = ({
  keyboardType,
  placeholder,
  maxLength,
  multiline,
  onChange,
  value,
  autoFocus,
  numberOfLines,
  style,
}) => {
  return (
    <>
      <TextInput
        autoCorrect={false}
        autoFocus={autoFocus}
        textAlignVertical={"center"}
        maxLength={maxLength}
        multiline={multiline}
        keyboardType={keyboardType}
        style={[Styles.default, style]}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        numberOfLines={numberOfLines}
        //   clearButtonMode={'always'}
      />
    </>
  );
};

TextInputCustom.defaultProps = {
  keyboardType: "default",
  placeholder: "",
  maxLength: undefined,
  multiline: false,
  onChange: () => {},
  value: "",
  autoFocus: false,
  style: {},
  size: 12,
};

export default TextInputCustom;
