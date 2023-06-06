import visaImage from './../assets/images/visa.png';
import msCardImage from './../assets/images/Mastercard_logo.svg.png';

const normalizeNumber = (value) => {
  return String(value).padStart(2, '0').slice(-2);
};

const censorCreditcardNr = (value) => {
  return `•••• `.repeat(3) + value.slice(-4);
};

const CreditCard = (props) => {
  return (
    <div
      className="eachCard"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: '12px',
        padding: '20px',
        width: '28%',
      }}
    >
      <img
        src={props.type === 'Visa' ? visaImage : msCardImage}
        alt="{props.type}"
        style={{
          width: '60px',
        }}
      />

      <h1>{censorCreditcardNr(props.number)}</h1>

      <span>
        Expires {normalizeNumber(props.expirationMonth)}/
        {normalizeNumber(props.expirationYear)}
      </span>
      <span style={{ margin: '0 20px' }}>{props.bank} </span>
      <br></br>
      {props.owner}
    </div>
  );
};

export default CreditCard;
