import { Input } from "../Input";
import { Label } from "../Label";
import { FieldContent } from "./style";


export const BoxInput = ({
  textLabel,
  placeholder,
  fieldWidth = 100,
  editable = false,
  fieldValue=null,
  onChangeText=null,
  keyType = 'default',
  maxLength,
  keyboardType = 'default',
  onBlur = null,
}) => {
  return(
    //FieldContent
    <FieldContent fieldWidth= {fieldWidth} >
      <Label textLabel= {textLabel} />
      <Input
        placeholder={placeholder}
        editable={editable}
        keyType={keyType}
        maxLength={maxLength}
        fieldValue={fieldValue}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onBlur = {onBlur}
        
      />
    </FieldContent>
    
  );
};