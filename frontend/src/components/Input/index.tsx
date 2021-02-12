import React, { InputHTMLAttributes, useCallback } from 'react';
import { maskCep, maskPhone, maskCurrency } from './masks';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: 'cep' | 'currency' | 'phone';
}

const Input: React.FC<InputProps> = ({ mask, ...props }) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    switch (mask) {
      case 'cep':
        return maskCep(e);
        case 'phone':
          return maskPhone(e);        
      case 'currency':
        return maskCurrency(e);  
      default:  
        return e;
    }
  }, [mask]);

  return (
    <input {...props} onKeyUp={handleKeyUp} />  
  );
}

export default Input;