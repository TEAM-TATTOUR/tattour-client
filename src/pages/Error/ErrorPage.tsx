import PreventAccess from '../../common/PreventAccess/PreventAccess';
import { TITLE, BTN_CONTENTS } from '../../constants/PreventAccessInfo';

const ErrorPage = () => {
  return <PreventAccess title={TITLE[0]} btn_contents={BTN_CONTENTS[0]} isError={true}/>;
};

export default ErrorPage;
