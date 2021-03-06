import React, {useRef, useState} from 'react';

import CustomView from '../components/CustomView';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import {
  ScrollableInputsView,
  DisplayInputs,
  TopBuffer,
} from '../components/SharedComponents';
import AppLogo from '../components/AppLogo';

import {V_16, V_32, V_70} from '../styles/Spacing';
import {AUTH_INPUTS} from '../utils/constants';
import {fieldsFilled} from '../utils/helperFunctions';

function Login({navigation}) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [focusLabel, setFocusLabel] = useState('');
  const inputRef = useRef();

  const handleChange = (name, value) => {
    setState((prevState) => ({...prevState, [name]: value}));
  };

  const getInputs = () => {
    const inputArray = JSON.parse(JSON.stringify(AUTH_INPUTS));
    return (
      <DisplayInputs
        inputArray={inputArray.slice(0, 2)}
        state={state}
        handleChange={handleChange}
        inputRef={inputRef}
        focusLabel={focusLabel}
        setFocusLabel={setFocusLabel}
      />
    );
  };

  return (
    <>
      <TopBuffer />
      <ScrollableInputsView>
        <AppLogo />
        <CustomView marginTop={V_32} marginBottom={V_70}>
          <CustomText text="Log In" type="titleSmall" />
        </CustomView>
        {getInputs()}
        <CustomButton
          type="primaryBtn"
          text="Login"
          textType="whiteText"
          marginTop={V_32}
          marginBottom={V_32}
          shadow
          inactive={!fieldsFilled(state)}
        />
        <CustomButton
          text="Don't Have an Account? - Sign Up"
          textType="primaryText"
          onPress={() => navigation.navigate('SignUp')}
          marginBottom={V_16}
        />
      </ScrollableInputsView>
    </>
  );
}

export default Login;
