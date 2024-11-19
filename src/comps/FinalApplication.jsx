import "../styles Fiels/FinalApplication.css";
import Button from "./Button";
import Input from "./Input";

export default function FinalApplication({
  fullNameInput,
  setFullNameInput,
  emailInput,
  setEmailInput,
  phoneNumberInput,
  setPhoneNumberInput,
  //stateSection2
  schoolNameInput,
  setSchoolNameInput,
  studyTitleInput,
  setStudyTitleInput,
  studyDateInput,
  setStudyDateInput,
  //stateSection3
  companyNameInput,
  setCompanyNameInput,
  positionTitleInput,
  setPositionTitleInput,
  mainResponsibilityTexArea,
  setmMainResponsibilityTexArea,
  startDateInput,
  setStartDateInput,
  endDateInput,
  setEndDateInput,
}) {
  return (
    <div className="finalApplication">
      <h1 className="finalCVHeader">Final CV</h1>
      <div className="finalGeneralInfo">
        <Input
          inputOF={"finalGeneralInfoInput"}
          value={fullNameInput}
          lable={"fullNameFinal"}
          contClass={"inputContFinal"}
          type="text"
          final={true}
          onChange={(e) => setFullNameInput(e.target.value)}
        />
        <div className="email-PhoneWrapper">
          <Input
            inputOF={"finalGeneralInfoInput"}
            lable={"emailFinal"}
            type="text"
            value={emailInput}
            contClass={"inputContFinal"}
            final={true}
            onChange={(e) => setEmailInput(e.target.value)}
          />

          <Input
            inputOF={"finalGeneralInfoInput"}
            value={phoneNumberInput}
            lable={"phoneNumberFinal"}
            final={true}
            contClass={"inputContFinal"}
            inputType="number"
            onChange={(e) => setPhoneNumberInput(e.target.value)}
          />
        </div>
      </div>

      <div className="finalEduInfo">
        <h1 className="sectionName eduSection">Education</h1>
        <div className="eduSectionContent">
          <Input
            inputType={"text"}
            text={"School Name:"}
            lable={"schoolNameFinal"}
            contClass={"inputContFinal"}
            inputOF={"eduSectionContentInput"}
            value={schoolNameInput}
            onChange={(e) => setSchoolNameInput(e.target.value)}
          />

          <Input
            inputType={"text"}
            text={"Study Title:"}
            lable={"studyTitleFinal"}
            contClass={"inputContFinal"}
            inputOF={"eduSectionContentInput"}
            value={studyTitleInput}
            onChange={(e) => setStudyTitleInput(e.target.value)}
          />

          <Input
            inputType={"date"}
            text={"Study Date:"}
            lable={"studyDateFinal"}
            contClass={"inputContFinal"}
            inputOF={"eduSectionContentInput"}
            value={studyDateInput}
            onChange={(e) => setStudyDateInput(e.target.value)}
          />
        </div>
      </div>

      <div className="finalprofInfo">
        <h1 className="sectionName profSection">Career</h1>
        <div className="profSectionContent">
          <div className="profSectionContentTopSide">
            <Input
              inputType={"text"}
              text={"Company-name"}
              lable={"companyNameFinal"}
              inputOF={"profSectionContentInput"}
              contClass={"inputContFinal"}
              value={companyNameInput}
              onChange={(e) => setCompanyNameInput(e.target.value)}
            />

            <Input
              inputType={"text"}
              text={"Position-title"}
              lable={"positionTitleFinal"}
              contClass={"inputContFinal"}
              inputOF={"profSectionContentInput"}
              value={positionTitleInput}
              onChange={(e) => setPositionTitleInput(e.target.value)}
            />
            <Input
              inputType={"text"}
              text={"Main-responsibility"}
              lable={"mainResponsibilityFinal"}
              contClass={"inputContFinal"}
              inputOF={"profSectionContentInput"}
              value={mainResponsibilityTexArea}
              onChange={(e) => setmMainResponsibilityTexArea(e.target.value)}
            />
          </div>
          <div className="profSectionContentBotSide">
            <Input
              inputType={"date"}
              text={"Start Date"}
              lable={"startDateFinal"}
              contClass={"inputContFinal"}
              inputOF={"profSectionContentInput"}
              value={startDateInput}
              onChange={(e) => setStartDateInput(e.target.value)}
            />
            <Input
              inputType={"date"}
              text={"End Date"}
              lable={"endDateFinal"}
              contClass={"inputContFinal"}
              inputOF={"profSectionContentInput"}
              value={endDateInput}
              onChange={(e) => setEndDateInput(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button text="Dowenload" className="dowenload" />
    </div>
  );
}
