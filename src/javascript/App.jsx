import smiley from '../style/images/smiley.png';

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Hello World!</h1>
      <img src={smiley} id="smiley-img" alt="smiley" />
      <p>hola</p>
    </div>
  );
};

export default App;
