import Input from "./Input";
import "../styles Fiels/GeneralInfo.css";
export default function EducationalExp({
  schoolNameInput,
  setSchoolNameInput,
  studyTitleInput,
  setStudyTitleInput,
  studyDateInput,
  setStudyDateInput,
}) {
  return (
    <div className="generalInfo">
      <Input
        inputType={"text"}
        placeHolder="Olympus"
        text={"School Name"}
        lable={"schoolName"}
        inputOF={"eduInfoInput"}
        contClass={"inputCont"}
        value={schoolNameInput}
        onChange={(e) => setSchoolNameInput(e.target.value)}
      />
      <Input
        inputType={"text"}
        placeHolder="Physics"
        text={"Study title"}
        lable={"studyTitle"}
        inputOF={"eduInfoInput"}
        contClass={"inputCont"}
        value={studyTitleInput}
        onChange={(e) => setStudyTitleInput(e.target.value)}
      />
      <Input
        inputType={"date"}
        text={"Study date"}
        lable={"studyDate"}
        inputOF={"eduInfoInput"}
        contClass={"inputCont"}
        value={studyDateInput}
        onChange={(e) => setStudyDateInput(e.target.value)}
      />
    </div>
  );
}
