import { render, screen } from '@testing-library/react';
import CategoryView from '../Demo/ViewController/CategoryView';
import ChildCategoryComponent from '../Demo/Components/ChildCategoryComponent';

test('Check contain category 0 has title: At age 40', () => {
  render(<CategoryView />);
  const element = screen.getByTestId('category-id-2');
  expect(element).toHaveTextContent('At age 40');
});

test('Check category 0 has child content ', () => {
  render(<ChildCategoryComponent />);
  const element = screen.getByTestId('child-content-category-0-0');
  expect(element).toHaveTextContent('442,626');
});
