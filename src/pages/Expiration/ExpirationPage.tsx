import PreventAccess from '../../common/PreventAccess/PreventAccess';
import { BTN_CONTENTS, TITLE } from '../../constants/PreventAccessInfo';

const ExpirationPage = () => {
  return <PreventAccess title={TITLE[1]} btn_contents={BTN_CONTENTS[1]} />;
};

export default ExpirationPage;
