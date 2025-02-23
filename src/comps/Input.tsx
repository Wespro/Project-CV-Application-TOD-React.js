import React from 'react';
import { InputsInt } from '../types';

export default function Input({
  inputType,
  placeHolder,
  text,
  label,
  inputOF,
  value,
  formInputs,
  setFormInputs,
  contClass,
  final,
}: InputsInt): JSX.Element | null {
  const handleFormInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formInputs && setFormInputs) {
      setFormInputs({ ...formInputs, [name + 'Input']: value });
    }
  };

  function addEventListenersInput(inputClass: string) {
    const input = document.querySelector(`#${inputClass}`) as HTMLInputElement;

    if (input.checkValidity()) {
      (input.nextSibling as HTMLSpanElement).textContent = '';
    } else {
      (input.nextSibling as HTMLSpanElement).textContent =
        'Please fill this input in its intended way';
      (input.nextSibling as HTMLSpanElement).style.color = 'red';
    }
  }
  function putLabel(): JSX.Element | null {
    if (!final) {
      return <label htmlFor={label}>{text}</label>;
    }
    return null;
  }
  return (
    <div className={`${label}Cont ${contClass}`}>
      {putLabel()}
      <input
        name={label}
        onBlur={() => addEventListenersInput(label)}
        onChange={handleFormInputs}
        value={value}
        required
        type={inputType}
        id={label}
        className={inputOF}
        placeholder={placeHolder}
      ></input>
      <span></span>
    </div>
  );
}
