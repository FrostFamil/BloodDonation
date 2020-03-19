import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import LoginScreen from '../scenes/LoginScreen';

describe('Login', () => {
  describe('change text login', () => {
    it('change text email and password', () => {
      const {getByTestId} = render(<LoginScreen />);

      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('email'), 'admin');
      fireEvent.changeText(getByTestId('password'), 'admin@gmail.com');

      // use toEqual check value TextInput
      expect(getByTestId('email').props.value).toEqual('admin');
      expect(getByTestId('password').props.value).toEqual('admin@gmail.com');
    });

    // describe('Submit form login', () => {
    //   it('on submit login', () => {
    //     const data = {password: '123456', email: 'admin@gmail.com'};
    //     const submitHandler = jest.fn();
    //     const {getByTestId} = render(
    //       // passing prop to Login component
    //       <LoginScreen login={submitHandler} />,
    //     );

    //     fireEvent.changeText(getByTestId('email'), 'admin@gmail.com');
    //     fireEvent.changeText(getByTestId('password'), '123456');

    //     expect(getByTestId('email').props.value).toEqual('admin@gmail.com');
    //     expect(getByTestId('password').props.value).toEqual('123456');

    //     // use fireEvent.press call Button submit
    //     fireEvent.press(getByTestId('loginButton'));

    //     // checking ouput data equal input
    //     expect(submitHandler).toHaveBeenCalledWith(data);
    //   });
    // });
  });
});
