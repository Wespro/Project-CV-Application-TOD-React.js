export default function Input({
  inputType,
  placeHolder,
  text,
  lable,
  inputOF,
  onChange,
  value,
  contClass,
  final,
}) {
  function addEventListenersInput(inputClass) {
    const input = document.querySelector(`#${inputClass}`);

    if (input.checkValidity()) {
      input.nextSibling.textContent = "";
    } else {
      input.nextSibling.textContent =
        "Please fill this input in its intended way";
      input.nextSibling.style.color = "red";
    }
  }
  function putLabel() {
    if (!final) {
      return <label htmlFor={lable}>{text}</label>;
    }
  }
  return (
    <div className={`${lable}Cont ${contClass}`}>
      {putLabel()}
      <input
        onBlur={(e) => addEventListenersInput(lable)}
        onChange={onChange}
        value={value}
        required
        type={inputType}
        id={lable}
        className={inputOF}
        placeholder={placeHolder}
      ></input>
      <span></span>
    </div>
  );
}
