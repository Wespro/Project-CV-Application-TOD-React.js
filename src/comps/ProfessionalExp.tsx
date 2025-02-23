import Input from './Input';
import TextArea from './TextArea';
import '../styles Files/ProfessionalExp.css';
import React from 'react';
import { FormInputsPassedProps } from '../types';
export default function ProfessionalExp({
  formInputs,
  setFormInputs,
}: FormInputsPassedProps): JSX.Element | null {
  return (
    <div className='professionalExp'>
      <div className='aboutWork'>
        <Input
          inputType={'text'}
          placeHolder='Google'
          text={'Company-name'}
          label={'companyNameInput'}
          inputOF={'profInfoInput'}
          contClass={'inputCont'}
          value={formInputs.companyNameInput}
          setFormInputs={setFormInputs}
          formInputs={formInputs}
          final={false}
        />
        <Input
          inputType={'text'}
          placeHolder='Front-end web dev'
          text={'Position-title'}
          label={'positionTitleInput'}
          contClass={'inputCont'}
          inputOF={'profInfoInput'}
          value={formInputs.positionTitleInput}
          setFormInputs={setFormInputs}
          formInputs={formInputs}
          final={false}
        />
      </div>
      <div className='jobResponsibility'>
        <TextArea
          text={'Main-responsibility'}
          label={'mainResponsibilityTextArea'}
          textAreaOF={'profInfoInput'}
          value={formInputs.mainResponsibilityTextArea}
          setFormInputs={setFormInputs}
          formInputs={formInputs}
          rows={5}
          cols={10}
        />
      </div>
      <div className='jobDuration'>
        <Input
          inputType={'date'}
          placeHolder='12-12-2011'
          text={'Start Date'}
          label={'startDateInput'}
          contClass={'inputCont'}
          inputOF={'profInfoInput'}
          value={formInputs.startDateInput}
          setFormInputs={setFormInputs}
          formInputs={formInputs}
          final={false}
        />
        <Input
          inputType={'date'}
          placeHolder='12-12-2012'
          text={'End Date'}
          label={'endDateInput'}
          contClass={'inputCont'}
          inputOF={'profInfoInput'}
          value={formInputs.endDateInput}
          setFormInputs={setFormInputs}
          formInputs={formInputs}
          final={false}
        />
      </div>
    </div>
  );
}
