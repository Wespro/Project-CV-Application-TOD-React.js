import { useEffect, useState } from 'react';

import './App.css';
//Comps
import Nav from './comps/Nav';
import GeneralInfo from './comps/GeneralInfo';
import EducationalExp from './comps/EducationalExp';
import FormActions from './comps/FormActions';
import ProfessionalExp from './comps/ProfessionalExp';
import FinalApplication from './comps/FinalApplication';
import { FormInputs, sectionsInt, sectionsValidity } from './types';
import React from 'react';

function App(): JSX.Element | null {
  const [section, setSection] = useState<string>('general');

  const [submit, setSubmit] = useState<boolean>(false);
  const [sectionsValidity, setSectionsValidity] = useState<sectionsValidity>({
    section1Validity: false,
    section2Validity: false,
    section3Validity: false,
  });

  const [formInputs, setFormInputs] = useState<FormInputs>({
    fullNameInput: '',
    emailInput: '',
    phoneNumberInput: '',
    schoolNameInput: '',
    studyTitleInput: '',
    studyDateInput: '',
    companyNameInput: '',
    positionTitleInput: '',
    mainResponsibilityTextArea: '',
    startDateInput: '',
    endDateInput: '',
  });

  useEffect(() => {
    if (
      sectionsValidity.section1Validity &&
      sectionsValidity.section2Validity &&
      sectionsValidity.section3Validity
    ) {
      setSubmit(true);
    }
  }, [
    sectionsValidity.section1Validity,
    sectionsValidity.section2Validity,
    sectionsValidity.section3Validity,
  ]);
  useEffect(() => {
    setSection(section);
  }, [section]);

  function displayValidity(): void {
    const inputs = document.querySelectorAll(`input`);
    const textArea = document.querySelector(`textarea`);
    if (textArea) {
      if (textArea.checkValidity()) {
        (textArea.nextSibling as HTMLSpanElement).textContent = '';
      } else {
        (textArea.nextSibling as HTMLSpanElement).textContent =
          'Please fill this input in its intended way';
        (textArea.nextSibling as HTMLSpanElement).style.color = 'red';
        textArea.setCustomValidity('invalid');
      }
    }

    inputs.forEach((input): void => {
      if (input.checkValidity()) {
        (input.nextSibling as HTMLSpanElement).textContent = '';
      } else {
        (input.nextSibling as HTMLSpanElement).textContent =
          'Please fill this input in its intended way';
        (input.nextSibling as HTMLSpanElement).style.color = 'red';
      }
    });
  }
  function areaActiveFn(sectionName: string): void {
    document.querySelector('.areaActive')
      ? (
          document.querySelector('.areaActive') as HTMLHeadingElement
        ).classList.remove('areaActive')
      : null;

    document.querySelector(`.${sectionName}InfoNav`)
      ? (
          document.querySelector(`.${sectionName}InfoNav`) as HTMLHeadingElement
        ).classList.add('areaActive')
      : null;
  }

  function switchFormPages(): JSX.Element | null {
    const sections: sectionsInt = {
      general: (
        <GeneralInfo formInputs={formInputs} setFormInputs={setFormInputs} />
      ),
      edu: (
        <EducationalExp formInputs={formInputs} setFormInputs={setFormInputs} />
      ),
      prof: (
        <ProfessionalExp
          formInputs={formInputs}
          setFormInputs={setFormInputs}
        />
      ),
    };

    return sections[section];
  }
  function switchMainPages(): JSX.Element | null {
    if (submit) {
      return (
        <FinalApplication
          formInputs={formInputs}
          setFormInputs={setFormInputs}
        />
      );
    } else {
      return (
        <>
          <form action=''>
            <div className='paper1 paper'></div>
            <div className='paper2 paper'></div>
            <Nav />

            <hr />

            <h1>CV Application</h1>
            <div className='formPage'> {switchFormPages()}</div>
            <FormActions
              sectionsValidity={sectionsValidity}
              setSectionsValidity={setSectionsValidity}
              setSection={setSection}
              section={section}
              displayValidity={displayValidity}
              areaActiveFn={areaActiveFn}
            />
          </form>
        </>
      );
    }
  }
  return <>{switchMainPages()}</>;
}

export default App;
