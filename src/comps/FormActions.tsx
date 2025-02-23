import Button from './Button';
import '../styles Files/FinalApplication.css';
import React from 'react';
import { FormActionsPropsTypes, SectionActions } from '../types';
export default function FormActions({
  sectionsValidity,
  setSectionsValidity,
  setSection,
  section,
  addEventListenersInputs,
  areaActiveFn,
}: FormActionsPropsTypes): JSX.Element | null {
  function isInputsValid() {
    const sectionInputs = document.querySelectorAll(
      `.${section}InfoInput`
    ) as NodeListOf<HTMLInputElement>;

    const sectionInputsArr = [...sectionInputs];

    const validInputs = sectionInputsArr.filter((input) =>
      input.checkValidity()
    );
    return { validInputs, sectionInputsArr };
  }

  function validateSection(direction?: string): void {
    const { validInputs, sectionInputsArr } = isInputsValid();
    const isAllValid = validInputs.length === sectionInputsArr.length;

    const sectionActions: SectionActions = {
      general: {
        next: () => {
          setSection('edu');
          areaActiveFn('edu');
        },
        setValidity: () =>
          setSectionsValidity({
            ...sectionsValidity,
            section1Validity: isAllValid,
          }),
      },
      edu: {
        next: () => {
          setSection('prof');
          areaActiveFn('prof');
        },
        prev: () => {
          setSection('general');
          areaActiveFn('general');
        },
        setValidity: () =>
          setSectionsValidity({
            ...sectionsValidity,
            section2Validity: isAllValid,
          }),
      },
      prof: {
        prev: () => {
          setSection('edu');
          areaActiveFn('edu');
        },
        setValidity: () =>
          setSectionsValidity({
            ...sectionsValidity,
            section3Validity: isAllValid,
          }),
      },
    };

    const currentSectionActions = sectionActions[section];

    if (direction === 'next') {
      currentSectionActions.next && currentSectionActions.next();
    } else if (direction === 'prev') {
      currentSectionActions.prev && currentSectionActions.prev();
    }

    currentSectionActions.setValidity();
  }

  function switchAction(): JSX.Element | null {
    if (section === 'general' || section === 'edu') {
      if (section === 'general') {
        return (
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              addEventListenersInputs();
              validateSection('next');
            }}
            text='Next'
          />
        );
      } else {
        return (
          <>
            <Button
              onClick={(e) => {
                e.preventDefault();
                addEventListenersInputs();
                validateSection('prev');
              }}
              text='Prev'
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                addEventListenersInputs();
                validateSection('next');
              }}
              text='Next'
            />
          </>
        );
      }
    } else {
      return (
        <>
          <Button
            onClick={(e) => {
              e.preventDefault();
              addEventListenersInputs();
              validateSection('prev');
            }}
            text='Prev'
          />
          <Button
            text='Submit'
            onClick={(e) => {
              e.preventDefault();
              validateSection();
            }}
          />
        </>
      );
    }
  }
  return <div className='formActions'>{switchAction()}</div>;
}
