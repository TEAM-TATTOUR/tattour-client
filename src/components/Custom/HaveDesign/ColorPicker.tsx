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
  const COLOR_RED = '#FF4444';
  const COLOR_BLUE = '#449AFF';
  const COLOR_YELLOW = '#FFCA41';
  const COLOR_BLACK = '#0C0D11';

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSuggestedColor, setSelectedSuggestedColor] = useState(COLOR_BLACK);
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

  const handleChangeRainbowColor = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setSelectedSuggestedColor('');
    setIsColorPickerSelected(!isColorPickerSelected);
  };

  const COLOR_ICONS = [
    {
      color: COLOR_BLACK,
      Icon: selectedSuggestedColor === COLOR_BLACK ? IcColorBlackSelected : IcColorBlack,
    },
    {
      color: COLOR_RED,
      Icon: selectedSuggestedColor === COLOR_RED ? IcColorRedSelected : IcColorRed,
    },
    {
      color: COLOR_YELLOW,
      Icon: selectedSuggestedColor === COLOR_YELLOW ? IcColorYellowSelected : IcColorYellow,
    },
    {
      color: COLOR_BLUE,
      Icon: selectedSuggestedColor === COLOR_BLUE ? IcColorBlueSelected : IcColorBlue,
    },
  ];

  const BRUSH_ICONS = [
    {
      brush: 4,
      Icon: selectedBrush === 4 ? IcBrushBoldSelected : IcBrushBold,
    },
    {
      brush: 3,
      Icon: selectedBrush === 3 ? IcBrushMediumSelected : IcBrushMedium,
    },
    {
      brush: 2,
      Icon: selectedBrush === 2 ? IcBrushLightSelected : IcBrushLight,
    },
  ];

  return (
    <St.OptionBox>
      <St.SelectLine>
        {BRUSH_ICONS.map(({ brush, Icon }) => (
          <St.BrushIconWrapper key={brush} isSelected={selectedBrush === brush}>
            <Icon onClick={() => handleChangeBrush(brush)} />
          </St.BrushIconWrapper>
        ))}
      </St.SelectLine>
      <St.SelectColor>
        {COLOR_ICONS.map(({ color, Icon }) => (
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

    cursor: pointer;
    position: relative;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
  SelectedIcon: styled.div<{ isSelected: boolean }>`
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
};
