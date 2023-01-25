import React from 'react';
import { styles } from './input.css';

type InputProps = {
  placeholder?: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ onChange, type = 'text', placeholder = '' }: InputProps) {
  return (
    <input type={type} className={styles.input} onChange={onChange} placeholder={placeholder} />
  );
}

export { Input };
