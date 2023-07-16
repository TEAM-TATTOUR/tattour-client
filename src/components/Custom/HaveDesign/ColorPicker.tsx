import React, { useState } from 'react';
import { styled } from 'styled-components';
import {
  IcBrushBold,
  IcBrushLight,
  IcBrushMedium,
  IcBrushBoldSelected,
  IcBrushLightSelected,
  IcBrushMediumSelected,
  IcColorBlack,
  IcColorBlackSelected,
  IcColorBlue,
  IcColorBlueSelected,
  IcColorRed,
  IcColorRedSelected,
  IcColorYellow,
  IcColorYellowSelected,
  IcColorSelectedLine,
} from '../../../assets/icon';
import IcColorRainbow from '../../../assets/icon/ic_color_rainbow.png';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
  onBrushChange: (brush: number) => void;
  isSelected: boolean;
}

interface ColorPickerWrapperProps {
  selectedColor: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange, onBrushChange }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSuggestedColor, setSelectedSuggestedColor] = useState('');
  const [selectedBrush, setSelectedBrush] = useState<number>(4);
  const [isColorPickerSelected, setIsColorPickerSelected] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setSelectedColor(color);
    onColorChange(color);
  };

  const handleChangeBrush = (brush: number) => {
    setSelectedBrush(brush);
    onBrushChange(brush);
  };

  const handleChangeSuggestedColor = (color: string) => {
    setIsColorPickerSelected(false);
    setSelectedSuggestedColor(color);
    onColorChange(color);
  };

  const handleChangeRainbowColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const color = event.target.value;
    // setSelectedColor(color);
    // onColorChange(color);
    setSelectedSuggestedColor('');
    setIsColorPickerSelected(!isColorPickerSelected);
  };

  const colorIcons = [
    {
      color: '#0C0D11',
      Icon: selectedSuggestedColor === '#0C0D11' ? IcColorBlackSelected : IcColorBlack,
    },
    {
      color: '#FF4444',
      Icon: selectedSuggestedColor === '#FF4444' ? IcColorRedSelected : IcColorRed,
    },
    {
      color: '#FFCA41',
      Icon: selectedSuggestedColor === '#FFCA41' ? IcColorYellowSelected : IcColorYellow,
    },
    {
      color: '#449AFF',
      Icon: selectedSuggestedColor === '#449AFF' ? IcColorBlueSelected : IcColorBlue,
    },
  ];

  const brushIcons = [
    {
      brush: 2,
      Icon: selectedBrush === 2 ? IcBrushLightSelected : IcBrushLight,
    },
    {
      brush: 3,
      Icon: selectedBrush === 3 ? IcBrushMediumSelected : IcBrushMedium,
    },
    {
      brush: 4,
      Icon: selectedBrush === 4 ? IcBrushBoldSelected : IcBrushBold,
    },
  ];

  return (
    <St.OptionBox>
      <St.SelectLine>
        {brushIcons.map(({ brush, Icon }) => (
          <St.BrushIconWrapper key={brush} isSelected={selectedBrush === brush}>
            <Icon onClick={() => handleChangeBrush(brush)} />
          </St.BrushIconWrapper>
        ))}
      </St.SelectLine>
      <St.SelectColor>
        {colorIcons.map(({ color, Icon }) => (
          <St.ColorIconWrapper key={color} isSelected={selectedSuggestedColor === color}>
            <Icon onClick={() => handleChangeSuggestedColor(color)} />
          </St.ColorIconWrapper>
        ))}
        <St.ColorPickerWrapper selectedColor={selectedColor}>
          <St.ColorPicker
            src={selectedColor || IcColorRainbow}
            alt='색상선택'
            type='color'
            onChange={handleChange}
            onClick={handleChangeRainbowColor}
          />
          {isColorPickerSelected && (
            <St.SelectedIcon isSelected={isColorPickerSelected}>
              <IcColorSelectedLine />
            </St.SelectedIcon>
          )}
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
  BrushIconWrapper: styled.div<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
  ColorIconWrapper: styled.div<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
    position: relative;
    svg {
      width: 100%;
      height: 100%;
    }
  `,
  SelectedIcon: styled.div<{ isSelected: boolean }>`
    /* width: 1.4rem;
    height: 1.4rem; */
    cursor: pointer;
/* 
    position: absolute; */

    svg {
      width: 100%;
      height: 100%;
    }
  `,
};
