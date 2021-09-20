import { Input as ChackraInput, FormLabel, FormControl, InputProps as ChakrasInputProps } from '@chakra-ui/react';

interface InputProps extends ChakrasInputProps{
  name: string;
  label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
  return(
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChackraInput 
        name={name}
        id={name}
        focusBorderColor="pink.500" 
        bgColor="gray.900" 
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}