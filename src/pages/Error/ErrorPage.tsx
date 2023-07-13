import PreventAccess from '../../common/PreventAccess/PreventAccess';
import { TITLE, BTN_CONTENTS } from '../../constants/PreventAccessInfo';

const ErrorPage = () => {
  return <PreventAccess title={TITLE.error} btn_contents={BTN_CONTENTS.error} isError={true}/>;
};

export default ErrorPage;
