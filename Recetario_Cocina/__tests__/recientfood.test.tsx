import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RecentFood from '../components/recientfood';
import {screen} from '@testing-library/react-native';

describe('<RecentFood />', () => {
  const Arrfood = [
    {
      id: '1',
      love: '1',
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
      <RecentFood Arrfood={Arrfood} navigation={navigationMock} setFood={jest.fn()} />
    );

    const foodName = screen.getByText('Cookies');
    const foodDescription = screen.getByText('');
    expect(foodName).toBeTruthy();
    expect(foodDescription).toBeTruthy();

    const scrollView = screen.getByTestId('scrollViewRecent');
    expect(scrollView).toBeTruthy();
  });

  it('navigates to DetailFood on press', () => {
    const { getByText } = render(
      <RecentFood Arrfood={Arrfood} navigation={navigationMock} setFood={jest.fn()} />
    );

    const foodPressable = screen.getByText('Cookies');
    fireEvent.press(foodPressable);

    expect(navigationMock.navigate).toHaveBeenCalledWith('DetailFood', {
      food: Arrfood[0],
      title: 'Recent',
      foodArr: Arrfood,
      setFood: expect.any(Function),
    });
  });
});
