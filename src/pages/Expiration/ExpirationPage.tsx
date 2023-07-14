import PreventAccess from '../../common/PreventAccess/PreventAccess';
import { BTN_CONTENTS, TITLE } from '../../constants/PreventAccessInfo';

const ExpirationPage = () => {
  return <PreventAccess title={TITLE.expiration} btnContents={BTN_CONTENTS.expiration} />;
};

export default ExpirationPage;
