const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo ';
      break;
    case 'en':
      greeting = 'Hello ';
      break;
    case 'fr':
      greeting = 'Bonjour ';
      break;
    case 'es':
      greeting = 'Hola ';
      break;
    default:
      greeting = 'Howdie ';
  }
  return (
    <div className="Greetings">
      <p>
        {greeting}
        {props.children}
      </p>
    </div>
  );
};

export default Greetings;
