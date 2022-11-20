const CreditCard = (props) => {
  // let numberMinusLastFour = props.number.slice(0, -4);
  /*
    {props.number}.replaceAll(numberMinusLastFour, dot)
    or: every fourth sign a space, first 3 groups of fourth replace with dot
    */
  return (
    <div
      className="CreditCard"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: '12px',
        padding: '10px 40px',
        width: '28%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div className="eachCard">
        <h3 style={{ textAlign: 'right', fontStyle: 'italic' }}>
          {props.type}
        </h3>

        <h1>{props.number}</h1>

        <div style={{ display: 'flex', gap: '32px', padding: '0' }}>
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
          <p>{props.bank}</p>
        </div>

        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
