import smiley from '../style/images/smiley.png';

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Hello World!</h1>
      <div id="smiley">
        <img src={smiley} id="smiley-img" alt="smiley" />
      </div>
      <div className="time-label"></div>
    </>
  );
};

export default App;
