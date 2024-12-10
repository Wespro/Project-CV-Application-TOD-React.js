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
}) {
  function isInputsValid() {
    const sectionInputs = document.querySelectorAll(`.${section}InfoInput`);

    const sectionInputsArr = [...sectionInputs];

    const vaildInputs = sectionInputsArr.filter((input) =>
      input.checkValidity()
    );
    return { vaildInputs, sectionInputsArr };
  }

  // function validateSection(direction) {
  //   const vaildInputs = isInputsValid().vaildInputs;
  //   const sectionInputsArr = isInputsValid().sectionInputsArr;

  //   if (
  //     vaildInputs.length &&
  //     sectionInputsArr.length &&
  //     vaildInputs.length === sectionInputsArr.length
  //   ) {
  //     if (direction === "next") {
  //       if (section === "general") {
  //         setsection1Validity((prevState) => {
  //           return true;
  //         });
  //         setSection("edu");
  //         areaActiveFn("edu");
  //       } else if (section === "edu") {
  //         setsection2Validity((prevState) => {
  //           return true;
  //         });
  //         setSection("prof");
  //         areaActiveFn("prof");
  //       }
  //     } else if (direction === "prev") {
  //       if (section === "edu") {
  //         setsection2Validity((prevState) => {
  //           return true;
  //         });
  //         setSection("general");
  //         areaActiveFn("general");
  //       } else if (section === "prof") {
  //         setsection3Validity((prevState) => true);
  //         console.log(section3Validity);
  //         setSection("edu");
  //         areaActiveFn("edu");
  //       }
  //     } else {
  //       setsection3Validity((prevState) => true);
  //     }
  //   } else {
  //     if (section === "general") {
  //       setsection1Validity((prevState) => {
  //         return false;
  //       });
  //     } else if (section === "edu") {
  //       setsection2Validity((prevState) => {
  //         return false;
  //       });
  //     } else {
  //       setsection3Validity((prevState) => {
  //         return false;
  //       });
  //     }
  //   }
  // }
  function validateSection(direction) {
    const { vaildInputs, sectionInputsArr } = isInputsValid();
    const isAllValid = vaildInputs.length === sectionInputsArr.length;

    const sectionActions = {
      general: {
        next: () => {
          setSection("edu");
          areaActiveFn("edu");
        },
        setValidity: () => setsection1Validity(isAllValid),
      },
      edu: {
        next: () => {
          setSection("prof");
          areaActiveFn("prof");
        },
        prev: () => {
          setSection("general");
          areaActiveFn("general");
        },
        setValidity: () => setsection2Validity(isAllValid),
      },
      prof: {
        prev: () => {
          setSection("edu");
          areaActiveFn("edu");
        },
        setValidity: () => setsection3Validity(isAllValid),
      },
    };

    const currentSectionActions = sectionActions[section];

    if (direction === "next") {
      currentSectionActions.next?.();
    } else if (direction === "prev") {
      currentSectionActions.prev?.();
    }

    currentSectionActions.setValidity();
  }

  function switchAction() {
    if (section === "general" || section === "edu") {
      if (section === "general") {
        return (
          <Button
            onClick={(e) => {
              e.preventDefault();
              addEventListenersInputs();
              validateSection("next");
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
                validateSection("prev");
              }}
              text="Prev"
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                addEventListenersInputs();
                validateSection("next");
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
              validateSection("prev");
            }}
            text="Prev"
          />
          <Button
            text="Submit"
            onClick={(e) => {
              e.preventDefault(e);
              validateSection(e);
            }}
          />
        </>
      );
    }
  }
  return <div className="formActions">{switchAction()}</div>;
}
