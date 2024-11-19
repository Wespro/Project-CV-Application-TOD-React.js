import Button from "./Button";
import "../styles Fiels/FormActions.css";
export default function FormActions({
  setSection,
  section,
  section1Validity,
  setsection1Validity,
  section2Validity,
  setsection2Validity,
  section3Validity,
  setsection3Validity,
  addEventListenersInputs,
  areaActiveFn,
  submitCheckerFn,
}) {
  function isValid(direction) {
    const sectionInputs = document.querySelectorAll(`.${section}InfoInput`);

    const sectionInputsArr = [...sectionInputs];

    const vaildInputs = sectionInputsArr.filter((input) =>
      input.checkValidity()
    );
    console.log(vaildInputs.length, sectionInputs.length);
    if (
      vaildInputs.length &&
      sectionInputsArr.length &&
      vaildInputs.length === sectionInputsArr.length
    ) {
      if (direction === "next") {
        if (section === "general") {
          setsection1Validity((prevState) => {
            return true;
          });
          setSection("edu");
          areaActiveFn("edu");
        } else if (section === "edu") {
          setsection2Validity((prevState) => {
            return true;
          });
          setSection("prof");
          areaActiveFn("prof");
        }
      } else if (direction === "prev") {
        if (section === "edu") {
          setsection2Validity((prevState) => {
            return true;
          });
          setSection("general");
          areaActiveFn("general");
        } else if (section === "prof") {
          setsection3Validity((prevState) => true);
          console.log(section3Validity);
          setSection("edu");
          areaActiveFn("edu");
        }
      } else {
        setsection3Validity((prevState) => true);
      }
    } else {
      if (section === "general") {
        setsection1Validity((prevState) => {
          return false;
        });
      } else if (section === "edu") {
        setsection2Validity((prevState) => {
          return false;
        });
      } else {
        setsection3Validity((prevState) => {
          return false;
        });
      }
    }
  }

  function switchAction() {
    if (section === "general" || section === "edu") {
      if (section === "general") {
        return (
          <Button
            onClick={(e) => {
              e.preventDefault();
              addEventListenersInputs();
              isValid("next");
            }}
            text="Next"
          />
        );
      } else {
        return (
          <>
            <Button
              onClick={(e) => {
                e.preventDefault();
                addEventListenersInputs();
                isValid("prev");
              }}
              text="Prev"
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                addEventListenersInputs();
                isValid("next");
              }}
              text="Next"
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
              isValid("prev");
            }}
            text="Prev"
          />
          <Button
            text="Submit"
            onClick={(e) => {
              e.preventDefault();
              isValid();
              setTimeout(submitCheckerFn(), 1000);
            }}
          />
        </>
      );
    }
  }
  return <div className="formActions">{switchAction()}</div>;
}
