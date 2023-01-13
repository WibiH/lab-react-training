import BoxColor from './BoxColor';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <BoxColor hex="#455EB5">
      <div className="DriverCard">
        <img src={props.img} alt={props.name} style={{ borderRadius: '50%' }} />
        <div>
          <h2>{props.name}</h2>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </BoxColor>
  );
};

export default DriverCard;
