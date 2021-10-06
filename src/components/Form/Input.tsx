import { Input as ChackraInput, FormLabel, FormControl, InputProps as ChakrasInputProps, FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakrasInputProps{
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error, ...rest}, ref) => {
  return(
    <FormControl isInvalid={!!error}>
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
        ref={ref}
        {...rest}
      />
      <FormErrorMessage>
        {error?.message}
      </FormErrorMessage>
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);