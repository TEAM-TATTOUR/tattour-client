import styled from 'styled-components';
import TitleForm from './RegisterTitleForm';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import RegisterPhoneNumForm from './RegisterPhoneNumForm';

const RegisterPhoneNum = () => {

  return (
    <St.RegisterPhoneNumWrapper>
      <TitleForm title={TITLE[1]} subTitle={SUB_TITLE[1]} />
      <RegisterPhoneNumForm />
    </St.RegisterPhoneNumWrapper>
  );
};

const St = {
  RegisterPhoneNumWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default RegisterPhoneNum;
