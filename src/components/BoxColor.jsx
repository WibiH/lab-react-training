const BoxColor = (props) => {
  //const divStyle = `rgb(${props.r}, ${props.g}, ${props.b})`;
  const backgroundColorStyle = props.hex
    ? props.hex
    : `rgb(${props.r}, ${props.g}, ${props.b})`;
  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: backgroundColorStyle,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {props.children}
      {/* displayed text is missing here */}
    </div>
  );
};

export default BoxColor;
