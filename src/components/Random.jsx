const Random = (props) => {
  let result;
  Math.ceil(props.min);
  Math.floor(props.max);
  result = Math.floor(Math.random() * (props.max - props.min) + props.min);

  return (
    <div className="Random">
      <p>
        Random value between {props.min} and {props.max} => {result}
      </p>
    </div>
  );
};

export default Random;
