export default function TextArea({
  rows,
  cols,
  text,
  lable,
  textAreaOF,
  value,
  onChange,
}) {
  function addEventListenersTextArea() {
    const textArea = document.querySelector(`textarea`);
    if (textArea) {
      if (textArea.checkValidity()) {
    
        textArea.nextSibling.textContent = "";
      } else {
        textArea.nextSibling.textContent =
          "Please fill this input in its intended way";
        textArea.nextSibling.style.color = "red";
      }
    }
  }
  return (
    <div className={lable + "Cont textArea"}>
      <label htmlFor={lable}>{text}</label>
      <textarea
        onBlur={addEventListenersTextArea}
        onChange={onChange}
        value={value}
        className={textAreaOF}
        required
        id={lable}
        rows={rows}
        cols={cols}
      ></textarea>
      <span></span>
    </div>
  );
}
