import { shallow } from 'enzyme';
import App from '../javascript/App';

describe('Testing the <App /> component', () => {
  const wrapper = shallow(<App />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain the greeting message Hello World!', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text().trim()).toBe('Hello World!');
  });
});
