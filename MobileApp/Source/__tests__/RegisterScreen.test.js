import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import RegisterScreen from '../scenes/RegisterScreen';

describe('Register', () => {
  describe('Change input field content', () => {
    it('Change firstName input content', () => {
      const { getByTestId } = render(<RegisterScreen />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('firstName'), 'Emin');

      // use toEqual check value TextInput
      expect(getByTestId('firstName').props.value).toEqual('Emin');
    });

    it('Change lastName input content', () => {
      const { getByTestId } = render(<RegisterScreen />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('lastName'), 'Ahmadov');

      // use toEqual check value TextInput
      expect(getByTestId('lastName').props.value).toEqual('Ahmadov');
    });

    it('Change email input content', () => {
      const { getByTestId } = render(<RegisterScreen />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('email'), 'admin@gmail.com');

      // use toEqual check value TextInput
      expect(getByTestId('email').props.value).toEqual('admin@gmail.com');
    });

    it('Change password input content', () => {
      const { getByTestId } = render(<RegisterScreen />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('password'), 'adminpass');

      // use toEqual check value TextInput
      expect(getByTestId('password').props.value).toEqual('adminpass');
    });

    it('Change confirmPassword input content', () => {
      const { getByTestId } = render(<RegisterScreen />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('confirmPassword'), 'adminpass');

      // use toEqual check value TextInput
      expect(getByTestId('confirmPassword').props.value).toEqual('adminpass');
    });
  });
});
