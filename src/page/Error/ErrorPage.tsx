import PreventAccess from '../../common/PreventAccess/PreventAccess';
import { TITLE, BTN_CONTENTS } from '../../constants/PreventAccessInfo';

const ErrorPage = () => {
  return <PreventAccess title={TITLE.error} btnContents={BTN_CONTENTS.error} />;
};

export default ErrorPage;
