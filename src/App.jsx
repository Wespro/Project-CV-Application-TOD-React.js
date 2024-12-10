import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//Comps
import Nav from "./comps/Nav";
import GeneralInfo from "./comps/GeneralInfo";
import EducationalExp from "./comps/EducationalExp";
import FormActions from "./comps/FormActions";
import ProfessionalExp from "./comps/ProfessionalExp";
import FinalApplication from "./comps/FinalApplication";

function App() {
  const [section, setSection] = useState("general");
  const [submit, setSubmit] = useState(false);
  // console.log("first", submit);
  // setSubmit(true);
  // console.log("sec", submit);
  const [section1Validity, setsection1Validity] = useState(false);
  const [section2Validity, setsection2Validity] = useState(false);
  const [section3Validity, setsection3Validity] = useState(false);

  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");

  const [schoolNameInput, setSchoolNameInput] = useState("");
  const [studyTitleInput, setStudyTitleInput] = useState("");
  const [studyDateInput, setStudyDateInput] = useState("");

  const [companyNameInput, setCompanyNameInput] = useState("");
  const [positionTitleInput, setPositionTitleInput] = useState("");
  const [mainResponsibilityTexArea, setmMainResponsibilityTexArea] =
    useState("");
  const [startDateInput, setStartDateInput] = useState("");
  const [endDateInput, setEndDateInput] = useState("");

  function addEventListenersInputs() {
    const inputs = document.querySelectorAll(`input`);
    const textArea = document.querySelector(`textarea`);
    if (textArea) {
      if (textArea.checkValidity()) {
        console.log("Dsadsa");
        textArea.nextSibling.textContent = "";
      } else {
        textArea.nextSibling.textContent =
          "Please fill this input in its intended way";
        textArea.nextSibling.style.color = "red";
      }
    }

    inputs.forEach((input) => {
      if (input.checkValidity()) {
        input.nextSibling.textContent = "";
      } else {
        input.nextSibling.textContent =
          "Please fill this input in its intended way";
        input.nextSibling.style.color = "red";
      }
    });
  }
  function areaActiveFn(sectionName) {
    document.querySelector(".areaActive")
      ? document.querySelector(".areaActive").classList.remove("areaActive")
      : null;

    document.querySelector(`.${sectionName}InfoNav`)
      ? document
          .querySelector(`.${sectionName}InfoNav`)
          .classList.add("areaActive")
      : null;
  }
  useEffect(() => {
    if (section1Validity && section2Validity && section3Validity) {
      setSubmit(true);
    }
  }, [section1Validity, section2Validity, section3Validity]);

  function switchFormPages() {
    if (section === "general") {
      return (
        <GeneralInfo
          fullNameInput={fullNameInput}
          setFullNameInput={setFullNameInput}
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          phoneNumberInput={phoneNumberInput}
          setPhoneNumberInput={setPhoneNumberInput}
        />
      );
    } else if (section === "edu") {
      return (
        <EducationalExp
          schoolNameInput={schoolNameInput}
          setSchoolNameInput={setSchoolNameInput}
          studyTitleInput={studyTitleInput}
          setStudyTitleInput={setStudyTitleInput}
          studyDateInput={studyDateInput}
          setStudyDateInput={setStudyDateInput}
        />
      );
    } else if (section === "prof") {
      return (
        <ProfessionalExp
          companyNameInput={companyNameInput}
          setCompanyNameInput={setCompanyNameInput}
          positionTitleInput={positionTitleInput}
          setPositionTitleInput={setPositionTitleInput}
          mainResponsibilityTexArea={mainResponsibilityTexArea}
          setmMainResponsibilityTexArea={setmMainResponsibilityTexArea}
          startDateInput={startDateInput}
          setStartDateInput={setStartDateInput}
          endDateInput={endDateInput}
          setEndDateInput={setEndDateInput}
        />
      );
    }
  }
  function switchMainPages() {
    if (submit) {
      return (
        <FinalApplication
          fullNameInput={fullNameInput}
          setFullNameInput={setFullNameInput}
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          phoneNumberInput={phoneNumberInput}
          setPhoneNumberInput={setPhoneNumberInput}
          //stateSection2
          schoolNameInput={schoolNameInput}
          setSchoolNameInput={setSchoolNameInput}
          studyTitleInput={studyTitleInput}
          setStudyTitleInput={setStudyTitleInput}
          studyDateInput={studyDateInput}
          setStudyDateInput={setStudyDateInput}
          //stateSection3
          companyNameInput={companyNameInput}
          setCompanyNameInput={setCompanyNameInput}
          positionTitleInput={positionTitleInput}
          setPositionTitleInput={setPositionTitleInput}
          mainResponsibilityTexArea={mainResponsibilityTexArea}
          setmMainResponsibilityTexArea={setmMainResponsibilityTexArea}
          startDateInput={startDateInput}
          setStartDateInput={setStartDateInput}
          endDateInput={endDateInput}
          setEndDateInput={setEndDateInput}
        />
      );
    } else {
      return (
        <form action="">
          <div className="paper1 paper"></div>
          <div className="paper2 paper"></div>
          <Nav
            section1Validity={section1Validity}
            setsection1Validity={setsection1Validity}
            section2Validity={section2Validity}
            setsection2Validity={setsection2Validity}
            section3Validity={section3Validity}
            setsection3Validity={setsection3Validity}
            setSection={setSection}
            section={section}
            addEventListenersInputs={addEventListenersInputs}
          />

          <hr />

          <h1>CV Application</h1>
          {switchFormPages()}
          <FormActions
            section1Validity={section1Validity}
            setsection1Validity={setsection1Validity}
            section2Validity={section2Validity}
            setsection2Validity={setsection2Validity}
            section3Validity={section3Validity}
            setsection3Validity={setsection3Validity}
            setSection={setSection}
            section={section}
            addEventListenersInputs={addEventListenersInputs}
            areaActiveFn={areaActiveFn}
          />
        </form>
      );
    }
  }
  return <>{switchMainPages()}</>;
}

export default App;
