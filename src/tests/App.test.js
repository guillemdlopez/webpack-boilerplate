import { shallow } from 'enzyme';
import App from '../javascript/App';

describe('Pruebas en App', () => {
  const wrapper = shallow(<App />);
  test('debe mostrarse correctamente', () => {
    console.log(wrapper.html());

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de contener el saludo Hello World!', () => {
    console.log(wrapper.find('h1').text());
  });
});
