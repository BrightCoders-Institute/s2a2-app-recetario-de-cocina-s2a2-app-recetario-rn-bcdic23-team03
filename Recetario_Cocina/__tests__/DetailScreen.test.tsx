import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DetailFood from '../screen/DetailScreen';
import {screen} from '@testing-library/react-native';

describe('<DetailFood />', () => {
  const navigationMock = {
    navigate: jest.fn(),
  };

  const foodData = {
    id: '1',
    love: '0',
    name: 'Peperoni Pizza',
    image: require('../images/pizza.jpg'),
    servings: '4',
    ingredients: [
      { ingredient: 'Cheese', quantity: '200g' },
      { ingredient: 'Peperoni', quantity: '100g' },
    ],
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <DetailFood route={{ params: { food: foodData, title: 'Recent', foodArr: [], setFood: jest.fn() } }} navigation={navigationMock} />
    );

    // Verificar si se renderizan elementos esperados en la screen
    const foodName = screen.getByText('Peperoni Pizza');
    const servingsText = screen.getByText('for 4 servings');
    expect(foodName).toBeTruthy();
    expect(servingsText).toBeTruthy();

    // Verificar la existencia de elementos específicos con testID
    const backButton = screen.getByTestId('backButton');
    const likeButton = screen.getByTestId('likeButton');
    const shareButton = screen.getByTestId('shareButton');
    expect(backButton).toBeTruthy();
    expect(likeButton).toBeTruthy();
    expect(shareButton).toBeTruthy();
  });
  
  it('handles like button press correctly', () => {
    const { getByTestId } = render(
      <DetailFood route={{ params: { food: foodData, title: 'Recent', foodArr: [], setFood: jest.fn() } }} navigation={navigationMock} />
    );
    const likeButton = screen.getByTestId('likeButton');
    fireEvent.press(likeButton);
    expect(foodData.love).toBe('1');
  });
});
