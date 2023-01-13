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
        <img
          src={props.type === 'Visa' ? visaImage : msCardImage}
          alt="{props.type}"
        />

        <h1>{censorCreditcardNr(props.number)}</h1>

        <div>
          <span>
            Expires {normalizeNumber(props.expirationMonth)}/
            {normalizeNumber(props.expirationYear)} {props.bank}
          </span>
        </div>

        <span>{props.owner}</span>
      </div>
    </div>
  );
};

export default CreditCard;
