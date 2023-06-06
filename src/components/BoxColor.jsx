const BoxColor = (props) => {
  const backgroundColorStyle = `rgb(${props.r}, ${props.g}, ${props.b})`;

  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: backgroundColorStyle,
      }}
    >
      {props.children}
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
};

export default BoxColor;
