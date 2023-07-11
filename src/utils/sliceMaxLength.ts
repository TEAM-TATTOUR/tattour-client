import React from 'react';

const sliceMaxLength = (
  e: React.ChangeEvent<HTMLInputElement>,
  maxLength: number,
  inputType: string,
) => {
  switch (inputType) {
    case 'onlyNum':
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
      break;

    case 'phoneNum':
      e.target.value = e.target.value.replace(/[^0123456789-]/g, '');
      break;

    case 'onlyString':
      e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z]/g, '');
  }

  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.slice(0, maxLength);
  }
};

export default sliceMaxLength;
