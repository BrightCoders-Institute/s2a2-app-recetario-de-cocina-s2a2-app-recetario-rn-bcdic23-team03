import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RecentFood from '../components/recientfood';

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

    const foodName = getByText('Cookies');
    const foodDescription = getByText('');
    expect(foodName).toBeTruthy();
    expect(foodDescription).toBeTruthy();

    const scrollView = getByTestId('scrollViewRecent');
    expect(scrollView).toBeTruthy();
  });

  it('navigates to DetailFood on press', () => {
    const { getByText } = render(
      <RecentFood Arrfood={Arrfood} navigation={navigationMock} setFood={jest.fn()} />
    );

    const foodPressable = getByText('Cookies');
    fireEvent.press(foodPressable);

    expect(navigationMock.navigate).toHaveBeenCalledWith('DetailFood', {
      food: Arrfood[0],
      title: 'Recent',
      foodArr: Arrfood,
      setFood: expect.any(Function),
    });
  });
});
