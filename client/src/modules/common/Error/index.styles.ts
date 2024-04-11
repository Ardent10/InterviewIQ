interface props {
  fontSize?: number;
}

export const sxStyles = (props: props) => {
  return {
    errorStyle: {
      color: "#FF0000",
      margin: "5px 0",
      fontSize: props.fontSize ? props.fontSize : 14,
    },
  };
};
