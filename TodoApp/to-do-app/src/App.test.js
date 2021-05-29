import { render } from '@testing-library/react';
import App from './App';

// smoke test
test('renders without crashing', () => {
  render(<App />);
});

// snapshot test
test('matches snapshots', () => {
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
})
