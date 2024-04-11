export const Styles = () => {
  return {
    questionActionsStyle: {
      display: "flex",
      justifyContent: "end",
      flex: 1,
      alignItems: "center",
      gap: 2,
    },

    inputFieldStyles: {
      h: "50%",
      border: "none",
      _focusVisible: { outline: "none", border: "none" },
      fontSize: "2xl",
    },

    iconButtonStyles: {
      _hover: { bgColor: "#6d63fc", color: "#fff" },
    },
    accordionBoxStyles: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    answerContainerStackStyles: {
      width:"100%",
      align: "center",
      direction: "column",
      minH: "10vh",
    },
  };
};
