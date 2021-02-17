const { shallow } = require('enzyme');
const { default: App } = require('../javascript/App');
import '../setupTests';

describe('Pruebas en App', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());

    expect(wrapper).toMatchSnapshot();
  });
});
