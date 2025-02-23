import { FormInputsPassedProps } from '../types';
import Input from './Input';
import '../styles Files/GeneralInfo.css';
import React from 'react';
export default function GeneralInfo({
  formInputs,
  setFormInputs,
}: FormInputsPassedProps) {
  return (
    <div className='generalInfo'>
      <Input
        inputType={'text'}
        placeHolder='Abdelrahman Mohammed Mohammed'
        text={'Full-Name'}
        inputOF={'generalInfoInput'}
        contClass={'inputCont'}
        label={'fullNameInput'}
        value={formInputs.fullNameInput}
        setFormInputs={setFormInputs}
        formInputs={formInputs}
        final={false}
      />
      <Input
        inputType={'email'}
        placeHolder='superMan@justiceLeague.com'
        text={'E-mail'}
        inputOF={'generalInfoInput'}
        contClass={'inputCont'}
        label={'emailInput'}
        value={formInputs.emailInput}
        setFormInputs={setFormInputs}
        formInputs={formInputs}
        final={false}
      />
      <Input
        inputType={'number'}
        placeHolder='6XX 8XX 888'
        text={'Phone-number'}
        inputOF={'generalInfoInput'}
        contClass={'inputCont'}
        label={'phoneNumberInput'}
        value={formInputs.phoneNumberInput}
        setFormInputs={setFormInputs}
        formInputs={formInputs}
        final={false}
      />
    </div>
  );
}
