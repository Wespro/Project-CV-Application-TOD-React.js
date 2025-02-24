import React from 'react';

export type sectionsValidity = {
  section1Validity: boolean;
  section2Validity: boolean;
  section3Validity: boolean;
};

export interface FormInputs {
  fullNameInput: string;
  emailInput: string;
  phoneNumberInput: string;
  schoolNameInput: string;
  studyTitleInput: string;
  studyDateInput: string;
  companyNameInput: string;
  positionTitleInput: string;
  mainResponsibilityTextArea: string;
  startDateInput: string;
  endDateInput: string;
}

export interface sectionsInt {
  [key: string]: JSX.Element;
}

export type FormInputsPassedProps = {
  formInputs: FormInputs;
  setFormInputs: React.Dispatch<React.SetStateAction<FormInputs>>;
};
export interface InputsInt {
  inputType: string;
  placeHolder?: string;
  text?: string;
  label: string;
  inputOF: string;
  setFormInputs?: React.Dispatch<React.SetStateAction<FormInputs>>;
  formInputs: FormInputs;
  value: string;
  contClass?: string;
  final: boolean;
}

export type ButtonType = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};
export interface TextAreaInt
  extends Omit<InputsInt, 'inputOF' | 'final' | 'inputType'> {
  rows: number;
  cols: number;
  textAreaOF: string;
}

export interface FormActionsPropsTypes {
  sectionsValidity: sectionsValidity;
  setSectionsValidity: React.Dispatch<React.SetStateAction<sectionsValidity>>;
  setSection: React.Dispatch<React.SetStateAction<string>>;
  section: string;
  displayValidity: () => void;
  areaActiveFn: (sectionName: string) => void;
}

export interface SectionActions {
  [key: string]: {
    next?: () => void;
    prev?: () => void;
    setValidity: (valid?: boolean) => void;
  };
}
