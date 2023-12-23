import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ElementFood from '../components/itemfood';

describe('<ElementFood />', () => {
    const foodArr = [
      {
        id: '1',
        love: '0',
        name: 'Cookies',
        description: '',
        image: require('../images/galletas.jpg'),
      },
      
    ];
  
    const navigationMock = {
      navigate: jest.fn(),
    };
  
    it('renders correctly', () => {
      const { getByText, getByTestId } = render(
        <ElementFood foodArr={foodArr} navigation={navigationMock} setFood={jest.fn()} />
      );
  
      const foodName = getByText('Cookies');
      const foodDescription = getByText('');
      expect(foodName).toBeTruthy();
      expect(foodDescription).toBeTruthy();
  
      const scrollView = getByTestId('scrollView');
      expect(scrollView).toBeTruthy();
    });
  
    it('navigates to DetailFood on press', () => {
      const { getByText } = render(
        <ElementFood foodArr={foodArr} navigation={navigationMock} setFood={jest.fn()} />
      );
  
      const foodPressable = getByText('Cookies');
      fireEvent.press(foodPressable);
  
      expect(navigationMock.navigate).toHaveBeenCalledWith('DetailFood', {
        food: foodArr[0],
        title: 'Trending',
        foodArr,
        setFood: expect.any(Function),
      });
    });
});
  