import smiley from '../style/images/smiley.png';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <div id="smiley">
        <img src={smiley} id="smiley-img" />
      </div>
      <ul className="main-list">
        <li>Hi</li>
        <li>My</li>
        <li>Name</li>
        <li>hola</li>
        <li>Guillem</li>
      </ul>
    </div>
  );
};

export default App;
