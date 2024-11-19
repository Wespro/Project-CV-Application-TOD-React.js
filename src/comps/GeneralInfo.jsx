import { useState } from "react";
import Input from "./Input";
import "../styles Fiels/GeneralInfo.css";
export default function GeneralInfo({
  fullNameInput,
  setFullNameInput,
  emailInput,
  setEmailInput,
  phoneNumberInput,
  setPhoneNumberInput,
}) {
  return (
    <div className="generalInfo">
      <Input
        inputType={"text"}
        placeHolder="Abdelrahman Mohammed Mohammed"
        text={"Full-Name"}
        inputOF={"generalInfoInput"}
        contClass={"inputCont"}
        lable={"fullName"}
        value={fullNameInput}
        onChange={(e) => setFullNameInput(e.target.value)}
      />
      <Input
        inputType={"email"}
        placeHolder="superMan@justiceLeague.com"
        text={"E-mail"}
        inputOF={"generalInfoInput"}
        contClass={"inputCont"}
        lable={"email"}
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Input
        inputType={"number"}
        placeHolder="6XX 8XX 888"
        text={"Phone-number"}
        inputOF={"generalInfoInput"}
        contClass={"inputCont"}
        lable={"phoneNumber"}
        value={phoneNumberInput}
        onChange={(e) => setPhoneNumberInput(e.target.value)}
      />
    </div>
  );
}
