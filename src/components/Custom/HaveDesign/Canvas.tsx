import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import ColorPicker from './ColorPicker';
import styled from 'styled-components';

interface CanvasProps {
  setCanvasState: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
}

const Canvas: React.FC<CanvasProps> = ({ setCanvasState }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 335,
      height: 313,
      allowTouchScrolling: true,
    });

    // 그리기 설정
    canvas.freeDrawingBrush.color = '#0C0D11';
    canvas.freeDrawingBrush.width = 4;

    fabricCanvasRef.current = canvas;

    setCanvasState(canvasRef.current);

    return () => {
      setCanvasState(canvasRef.current);
      canvas.dispose();
    };
  }, [setCanvasState]);

  //ColorPicker 색상 변경
  const handleColorChange = (color: string) => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.freeDrawingBrush.color = color;
    }
  };

  //지정 색상으로 변경
  const handleBrushChange = (brush: number) => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.freeDrawingBrush.width = brush;
    }
  };

  const handleDelete = () => {
    fabricCanvasRef.current?.clear();
  };

  return (
    <div>
      <St.CleanButton type='button' value='삭제' onClick={handleDelete}>
        전체 삭제하기
      </St.CleanButton>
      <St.Canvas className='canvas'>
        <canvas ref={canvasRef} />
      </St.Canvas>
      <ColorPicker onColorChange={handleColorChange} onBrushChange={handleBrushChange} />
    </div>
  );
};

export default Canvas;

const St = {
  CleanButton: styled.button`
    width: 7.6rem;
    height: 1.8rem;
    padding: 0;

    margin: 2.4rem 0 2rem 0;
    color: ${({ theme }) => theme.colors.gray2};
    font: ${({ theme }) => theme.fonts.body_underline_medium_14};
  `,
  Canvas: styled.div`
    width: 33.5rem;
    height: 31.3rem;
    margin-bottom: 1.6rem;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
};
