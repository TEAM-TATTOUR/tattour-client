import React, { useState } from 'react';
import { styled } from 'styled-components';
import {
  IcBrushBold,
  IcBrushLight,
  IcBrushMedium,
  IcColorBlack,
  IcColorBlue,
  IcColorRed,
  IcColorYellow,
} from '../../../assets/icon';
import IcColorRainbow from '../../../assets/icon/ic_color_rainbow.png';

interface ColorPickerProps {
  onChange: (color: string) => void;
}

interface ColorPickerWrapperProps {
  selectedColor: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setSelectedColor(color);
    onChange(color);
  };

  return (
    <St.OptionBox>
      <St.SelectLine>
        <IcBrushLight />
        <IcBrushMedium />
        <IcBrushBold />
      </St.SelectLine>
      <St.SelectColor>
        <IcColorBlack />
        <IcColorRed />
        <IcColorYellow />
        <IcColorBlue />
        <St.ColorPickerWrapper selectedColor={selectedColor}>
          <St.ColorPicker
            src={selectedColor || IcColorRainbow}
            alt='색상선택'
            type='color'
            onChange={handleChange}
          />
        </St.ColorPickerWrapper>
      </St.SelectColor>
    </St.OptionBox>
  );
};

export default ColorPicker;

const St = {
  OptionBox: styled.section`
    display: flex;
    width: 100%;

    gap: 0.9rem;
  `,
  ColorPickerWrapper: styled.div<ColorPickerWrapperProps>`
    position: relative;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 0.5rem;

    background-image: ${({ selectedColor }) => (selectedColor ? 'none' : `url(${IcColorRainbow})`)};
    background-color: ${({ selectedColor }) => (selectedColor ? selectedColor : 'transparent')};
    background-size: ${({ selectedColor }) => (selectedColor ? 'contain' : '100% 100%')};
  `,

  ColorPicker: styled.input`
    padding: 0;
    appearance: none;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: none;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  `,
  SelectLine: styled.div`
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    align-items: center;

    width: 11.6rem;
    height: 5.4rem;
    padding: 1.2rem 1.2rem 1.2rem 0.9rem;

    background-color: ${({ theme }) => theme.colors.bg};

    border-radius: 0.5rem;
  `,
  SelectColor: styled.div`
    display: flex;
    justify-content: center;
    gap: 1.8rem;
    align-items: center;
    padding: 0;

    width: 21rem;
    height: 5.4rem;
    padding: 1.6rem 1.4rem;

    background-color: ${({ theme }) => theme.colors.bg};

    border-radius: 0.5rem;
  `,
};
