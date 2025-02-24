import React from 'react';
import { TextAreaInt } from '../types';

export default function TextArea({
  rows,
  cols,
  text,
  label,
  textAreaOF,
  value,
  formInputs,
  setFormInputs,
}: TextAreaInt): JSX.Element | null {
  function addEventListenersTextArea(): void {
    const textArea = document.querySelector(`textarea`);
    if (textArea) {
      if (textArea.checkValidity()) {
        (textArea.nextSibling as HTMLSpanElement).textContent = '';
      } else {
        (textArea.nextSibling as HTMLSpanElement).textContent =
          'Please fill this input in its intended way';
        (textArea.nextSibling as HTMLSpanElement).style.color = 'red';
      }
    }
  }

  const handleFormTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (formInputs && setFormInputs) {
      setFormInputs({ ...formInputs, [id]: value });
    }
  };
  return (
    <div className={label + 'Cont textArea'}>
      {textAreaOF.includes('final') || <label htmlFor={label}>{text}</label>}
      <textarea
        onBlur={addEventListenersTextArea}
        onChange={handleFormTextArea}
        value={value}
        className={textAreaOF}
        required
        id={label}
        rows={rows}
        cols={cols}
      ></textarea>
      <span></span>
    </div>
  );
}
