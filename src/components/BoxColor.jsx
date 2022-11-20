const BoxColor = (props) => {
  const divStyle = `rgb(${props.r}, ${props.g}, ${props.b})`;
  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: divStyle,
        height: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      rgb({props.r},{props.g},{props.b})
    </div>
  );
};

export default BoxColor;
