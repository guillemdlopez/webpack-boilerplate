import { shallow } from 'enzyme';
import App from '../javascript/App';

describe('Pruebas en App', () => {
  const wrapper = shallow(<App />);
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de contener el saludo Hello World!', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text().trim()).toBe('Hello World!');
  });
});
