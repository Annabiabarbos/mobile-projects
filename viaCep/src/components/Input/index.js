import { InputText } from "./style";

export const Input = ({
  placeholder,
  editable,
  fieldValue,
  onChangeText,
  keyType,
  maxLenght,
  keyboardType,
  onBlur,
}) => {
  return(
    <InputText
      placeholder={placeholder}
      editable={editable}
      value={fieldValue}
      onChangeText={onChangeText}
      keyType={keyType}
      maxLenght={maxLenght}
      keyboardType={keyboardType}
      onBlur={onBlur}
    />
  );
};