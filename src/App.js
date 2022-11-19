import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Myers"
        firstName="Michael"
        gender="male"
        height={209}
        birth={new Date('1957-10-31')}
        picture="https://images.unsplash.com/photo-1667377496718-4d90fa1d03f7"
      />

      <Greetings lang="de">Michael</Greetings>
      <Greetings lang="fr">Michel</Greetings>
      <Greetings lang="en">Michael</Greetings>
      <Greetings lang="es">Miguel</Greetings>
      <Greetings lang="">Mikkel</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
