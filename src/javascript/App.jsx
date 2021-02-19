import smiley from '../style/images/smiley.png';

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Hello World!</h1>
      <div id="smiley">
        <img src={smiley} id="smiley-img" alt="smiley" />
      </div>
    </div>
  );
};

export default App;
