import React from 'react';

const sliceMaxLength = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  maxLength: number,
  inputType?: string,
) => {
  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.slice(0, maxLength);
  }

  switch (inputType) {
    case 'onlyNum':
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
      break;

    case 'phoneNum':
      e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(-{1,2})$/g, '');
      break;

    case 'onlyString':
      e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z]/g, '');
      break;
  }
};

export default sliceMaxLength;
