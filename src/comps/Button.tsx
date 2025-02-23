import React from 'react';
import { ButtonType } from '../types';

export default function Button({ text, onClick, className }: ButtonType) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
