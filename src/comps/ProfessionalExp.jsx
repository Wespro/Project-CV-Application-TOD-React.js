import Input from "./Input";
import TextArea from "./TextArea";
import "../styles Fiels/ProfessionalExp.css";

export default function ProfessionalExp({
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
    <div className="professionalExp">
      <div className="aboutWork">
        <Input
          inputType={"text"}
          placeHolder="Google"
          text={"Company-name"}
          lable={"companyName"}
          inputOF={"profInfoInput"}
          contClass={"inputCont"}
          value={companyNameInput}
          onChange={(e) => setCompanyNameInput(e.target.value)}
        />
        <Input
          inputType={"text"}
          placeHolder="Front-end web dev"
          text={"Position-title"}
          lable={"positionTitle"}
          contClass={"inputCont"}
          inputOF={"profInfoInput"}
          value={positionTitleInput}
          onChange={(e) => setPositionTitleInput(e.target.value)}
        />
      </div>
      <div className="jobResponsibility">
        <TextArea
          text={"Main-responsibility"}
          lable={"mainResponsibility"}
          textAreaOf={"profInfoInput"}
          value={mainResponsibilityTexArea}
          onChange={(e) => setmMainResponsibilityTexArea(e.target.value)}
        />
      </div>
      <div className="jobDuration">
        <Input
          inputType={"date"}
          placeHolder="12-12-2011"
          text={"Start Date"}
          lable={"startDate"}
          contClass={"inputCont"}
          inputOF={"profInfoInput"}
          value={startDateInput}
          onChange={(e) => setStartDateInput(e.target.value)}
        />
        <Input
          inputType={"date"}
          placeHolder="12-12-2012"
          text={"End Date"}
          lable={"endDate"}
          contClass={"inputCont"}
          inputOF={"profInfoInput"}
          value={endDateInput}
          onChange={(e) => setEndDateInput(e.target.value)}
        />
      </div>
    </div>
  );
}
