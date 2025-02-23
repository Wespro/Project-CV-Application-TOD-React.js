import Input from './Input';
import '../styles Files/FinalApplication.css';
import { FormInputsPassedProps } from '../types';
import React from 'react';
export default function EducationalExp({
  formInputs,
  setFormInputs,
}: FormInputsPassedProps): JSX.Element | null {
  return (
    <div className='generalInfo'>
      <Input
        inputType={'text'}
        placeHolder='Olympus'
        text={'School Name'}
        label={'schoolNameInput'}
        inputOF={'eduInfoInput'}
        contClass={'inputCont'}
        value={formInputs.schoolNameInput}
        setFormInputs={setFormInputs}
        formInputs={formInputs}
        final={false}
      />
      <Input
        inputType={'text'}
        placeHolder='Physics'
        text={'Study title'}
        label={'studyTitleInput'}
        inputOF={'eduInfoInput'}
        contClass={'inputCont'}
        value={formInputs.studyTitleInput}
        setFormInputs={setFormInputs}
        final={false}
        formInputs={formInputs}
      />
      <Input
        inputType={'date'}
        text={'Study date'}
        placeHolder={''}
        label={'studyDateInput'}
        inputOF={'eduInfoInput'}
        contClass={'inputCont'}
        value={formInputs.studyDateInput}
        setFormInputs={setFormInputs}
        final={false}
        formInputs={formInputs}
      />
    </div>
  );
}
