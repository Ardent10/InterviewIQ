interface IStyles {
  inputFieldPadding?: number;
  inputHeadingGridSpace?: number;
  inputFieldGridSpace?: number;
}

export const Styles = ({
  inputFieldGridSpace,
  inputFieldPadding,
  inputHeadingGridSpace,
}: IStyles) => {
  return {
    inputFieldStyle: {
      padding: inputFieldPadding,
      margin: inputFieldGridSpace,
      marginTop: inputHeadingGridSpace,
      _focusVisible: { boxShadow: "0 0 0 1px #bfadff", borderColor: "#bfadff" },
    },
  };
};
