import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div
      className="DriverCard"
      style={{
        borderRadius: '10px',
        backgroundColor: '#455EB5',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        lineHeight: '10px',
        padding: '20px',
      }}
    >
      <div>
        <img
          src={props.img}
          alt={props.name}
          style={{
            height: '100px',
            width: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
