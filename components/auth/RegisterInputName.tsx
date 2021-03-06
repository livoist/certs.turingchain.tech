import { useCallback, FC, KeyboardEvent } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import { media } from '@/utils/theme';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

import { RegisterPageState } from './Register';

const StyledSection = styled(Section)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const RegisterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${media('desktop')} {
    width: 100%;
  }
`;

const StyledTextInput = styled(TextInput)`
  && {
    width: 50%;
    margin-bottom: 60px;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.7em 1em;
  margin-top: 2em;
`;

const InfoWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 40px 40px 72px 40px;
  background-color: #ffffff;
  font-weight: bold;
  > p {
    color: #a80100;
    font-size: 4vmin;
    letter-spacing: 1.7px;
    display: block;
    max-width: 397px;
    width: 100%;
    margin-bottom: 100px;
    ${media('desktop')} {
      font-size: 24px;
    }
  }
`;

type TProps = {
  userName: string;
  onChangePageState: (route: RegisterPageState) => void;
  onChangeUserName: (name: string) => void;
};

const InputName: FC<TProps> = props => {
  const onInputName = () => {
    if (props.userName) {
      props.onChangePageState(RegisterPageState.SignIn);
    }
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.keyCode) {
        // press enter
        case 13: {
          onInputName();
          break;
        }
      }
    },
    [onInputName],
  );

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
        <InfoWrapper>
          <p>你好，請問您的真實姓名是？</p>
          <StyledTextInput
            placeholder="請輸入真實姓名"
            value={props.userName}
            onChange={props.onChangeUserName}
            input={{
              type: 'name',
              onKeyDown,
            }}
          />
          <StyledButton disabled={!props.userName} onClick={onInputName}>
            下一步
          </StyledButton>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default InputName;
