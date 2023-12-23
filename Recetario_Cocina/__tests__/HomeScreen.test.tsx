import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../screen/HomeScreen'; 

describe('<HomeScreen />', () => {
  it('renders correctly and filters items based on search input', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<HomeScreen navigation={{ navigate: jest.fn() }} />);
    
    const searchInput = getByPlaceholderText('What do you want to eat?');
    expect(searchInput).toBeDefined();

    fireEvent.changeText(searchInput, 'Pizza');
    expect(getByText('TRENDING')).toBeDefined();

    await waitFor(() => {
      expect(getByText('RECENT')).toBeDefined();
      expect(getByText('Pepperoni Pizza')).toBeDefined(); 
    });
  });
  

});