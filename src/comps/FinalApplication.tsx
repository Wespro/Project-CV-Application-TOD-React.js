import React from 'react';
import '../styles Files/FinalApplication.css';
import { FormInputsPassedProps } from '../types';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

export default function FinalApplication({
  formInputs,
  setFormInputs,
}: FormInputsPassedProps) {
  return (
    <div className='finalApplication'>
      <h1 className='finalCVHeader'>Final CV</h1>
      <div className='finalGeneralInfo'>
        <Input
          inputOF={'finalGeneralInfoInput final'}
          value={formInputs.fullNameInput}
          label={'fullNameInput'}
          contClass={'inputContFinal'}
          inputType='text'
          final={true}
          setFormInputs={setFormInputs}
          formInputs={formInputs}
        />
        <div className='email-PhoneWrapper'>
          <Input
            inputOF={'finalGeneralInfoInput final'}
            label={'emailInput'}
            inputType='text'
            value={formInputs.emailInput}
            contClass={'inputContFinal'}
            final={true}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
          />

          <Input
            inputOF={'finalGeneralInfoInput final'}
            label={'phoneNumberInput'}
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
            label={'schoolNameInput'}
            contClass={'inputContFinal'}
            inputOF={'eduSectionContentInput final'}
            value={formInputs.schoolNameInput}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
            final={true}
          />

          <Input
            inputType={'text'}
            text={'Study Title:'}
            label={'studyTitleInput'}
            contClass={'inputContFinal'}
            inputOF={'eduSectionContentInput final'}
            value={formInputs.studyTitleInput}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
            final={true}
          />

          <Input
            inputType={'date'}
            text={'Study Date:'}
            label={'studyDateInput'}
            contClass={'inputContFinal'}
            inputOF={'eduSectionContentInput final'}
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
              label={'companyNameInput'}
              inputOF={'profSectionContentInput final'}
              contClass={'inputContFinal'}
              value={formInputs.companyNameInput}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />

            <Input
              inputType={'text'}
              text={'Position-title'}
              label={'positionTitleInput'}
              contClass={'inputContFinal'}
              inputOF={'profSectionContentInput final'}
              value={formInputs.positionTitleInput}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />
            <TextArea
              text={'Main-responsibility'}
              label={'mainResponsibilityTextArea'}
              contClass={'inputContFinal'}
              textAreaOF={'profSectionContentInput final'}
              value={formInputs.mainResponsibilityTextArea}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              rows={5}
              cols={10}
            />
          </div>
          <div className='profSectionContentBotSide'>
            <Input
              inputType={'date'}
              text={'Start Date'}
              label={'startDateInput'}
              contClass={'inputContFinal'}
              inputOF={'profSectionContentInput final'}
              value={formInputs.startDateInput}
              setFormInputs={setFormInputs}
              formInputs={formInputs}
              final={true}
            />
            <Input
              inputType={'date'}
              text={'End Date'}
              label={'endDateInput'}
              contClass={'inputContFinal'}
              inputOF={'profSectionContentInput final'}
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
