import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../screen/HomeScreen';
import {screen} from '@testing-library/react-native'; 

describe('<HomeScreen />', () => {
  it('renders correctly and filters items based on search input', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<HomeScreen navigation={{ navigate: jest.fn() }} />);
    
    const searchInput = screen.getByPlaceholderText('What do you want to eat?');
    expect(searchInput).toBeDefined();

    fireEvent.changeText(searchInput, 'Pizza');
    expect(screen.getByText('TRENDING')).toBeDefined();

    await waitFor(() => {
      expect(screen.getByText('RECENT')).toBeDefined();
      expect(screen.getByText('Pepperoni Pizza')).toBeDefined(); 
    });
  });
  

});