import styled from 'styled-components';
import DetailInfo from '../components/Detail/DetailInfo';
import DetailBottom from '../components/Detail/DetailBottom';
import { useState } from 'react';

const DetailPage = () => {
  const [isSheetOpen, setSheetOpen] = useState(true);

  return (
    <div>
      <DetailInfo setSheetOpen={setSheetOpen} />
      <DetailBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </div>
  );
};

export default DetailPage;
