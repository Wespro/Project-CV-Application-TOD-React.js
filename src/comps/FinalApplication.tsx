import React from 'react';
import '../styles Files/FinalApplication.css';
import { FormInputsPassedProps } from '../types';
import Button from './Button';
import Input from './Input';

export default function FinalApplication({
  formInputs,
  setFormInputs,
}: FormInputsPassedProps) {
  return (
    <div className='finalApplication'>
      <h1 className='finalCVHeader'>Final CV</h1>
      <div className='finalGeneralInfo'>
        <Input
          inputOF={'finalGeneralInfoInput'}
          value={formInputs.fullNameInput}
          label={'fullNameFinal'}
          contClass={'inputContFinal'}
          inputType='text'
          final={true}
          setFormInputs={setFormInputs}
          formInputs={formInputs}
        />
        <div className='email-PhoneWrapper'>
          <Input
            inputOF={'finalGeneralInfoInput'}
            label={'emailFinal'}
            inputType='text'
            value={formInputs.emailInput}
            contClass={'inputContFinal'}
            final={true}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
          />

          <Input
            inputOF={'finalGeneralInfoInput'}
            label={'phoneNumberFinal'}
            final={true}
            contClass={'inputContFinal'}
            inputType='number'
            value={formInputs.phoneNumberInput}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
          />
        </div>
      </div>

      <div className='finalEduInfo'>
        <h1 className='sectionName eduSection'>Education</h1>
        <div className='eduSectionContent'>
          <Input
            inputType={'text'}
            text={'School Name:'}
            label={'schoolNameFinal'}
            contClass={'inputContFinal'}
            inputOF={'eduSectionContentInput'}
            value={formInputs.schoolNameInput}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
            final={true}
          />

          <Input
            inputType={'text'}
            text={'Study Title:'}
            label={'studyTitleFinal'}
            contClass={'inputContFinal'}
            inputOF={'eduSectionContentInput'}
            value={formInputs.studyTitleInput}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
            final={true}
          />

          <Input
            inputType={'date'}
            text={'Study Date:'}
            label={'studyDateFinal'}
            contClass={'inputContFinal'}
            inputOF={'eduSectionContentInput'}
            value={formInputs.studyDateInput}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
            final={true}
          />
        </div>
      </div>

      <div className='finalprofInfo'>
        <h1 className='sectionName profSection'>Career</h1>
        <div className='profSectionContent'>
          <div className='profSectionContentTopSide'>
            <Input
              inputType={'text'}
              text={'Company-name'}
              label={'companyNameFinal'}
              inputOF={'profSectionContentInput'}
              contClass={'inputContFinal'}
              value={formInputs.companyNameInput}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />

            <Input
              inputType={'text'}
              text={'Position-title'}
              label={'positionTitleFinal'}
              contClass={'inputContFinal'}
              inputOF={'profSectionContentInput'}
              value={formInputs.positionTitleInput}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />
            <Input
              inputType={'text'}
              text={'Main-responsibility'}
              label={'mainResponsibilityFinal'}
              contClass={'inputContFinal'}
              inputOF={'profSectionContentInput'}
              value={formInputs.mainResponsibilityTextArea}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />
          </div>
          <div className='profSectionContentBotSide'>
            <Input
              inputType={'date'}
              text={'Start Date'}
              label={'startDateFinal'}
              contClass={'inputContFinal'}
              inputOF={'profSectionContentInput'}
              value={formInputs.startDateInput}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />
            <Input
              inputType={'date'}
              text={'End Date'}
              label={'endDateFinal'}
              contClass={'inputContFinal'}
              inputOF={'profSectionContentInput'}
              value={formInputs.endDateInput}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />
          </div>
        </div>
      </div>
      <Button onClick={() => {}} text='Download' className='download' />
    </div>
  );
}
