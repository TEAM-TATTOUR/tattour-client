import React from 'react';

const sliceMaxLength = (e: React.ChangeEvent<HTMLInputElement>, maxLength: number) => {
  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.slice(0, maxLength);
  }
};

export default sliceMaxLength;
