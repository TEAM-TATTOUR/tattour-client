import React, { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import ColorPicker from './ColorPicker';
import styled from 'styled-components';

interface CanvasProps {
  setCanvasState: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
}

const Canvas: React.FC<CanvasProps> = ({ setCanvasState }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);

  // 새 캔버스 만들기 혹은 그려놓은 것이 있다면 유지하면서 캔버스 크기만 조정
  const initializeCanvas = () => {
    if (!canvasRef.current || containerWidth === undefined) return;

    if (!fabricCanvasRef.current) {
      //새 캔버스 만들기
      const canvas = new fabric.Canvas(canvasRef.current, {
        isDrawingMode: true,
        width: containerWidth || 335,
        height: 313,
        allowTouchScrolling: true,
      });

      // 그리기 설정
      canvas.freeDrawingBrush.color = '#0C0D11';
      canvas.freeDrawingBrush.width = 4;

      fabricCanvasRef.current = canvas;

      setCanvasState(canvasRef.current);
    } else {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.setDimensions({ width: containerWidth, height: 313 });
      }
    }
  };

  const handleResize = () => {
    if (canvasRef.current?.parentElement?.parentElement) {
      setContainerWidth(canvasRef.current.parentElement.parentElement.clientWidth);
    }
  };

  // 화면 비율 바뀌면 캔버스 크기도 그에 맞게 변경해주기
  useEffect(() => {
    handleResize();
    initializeCanvas();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerWidth, setCanvasState]);

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

  //전체 삭제 기능
  const handleDelete = () => {
    fabricCanvasRef.current?.clear();
  };

  return (
    <St.CanvasWrapper>
      <St.CleanButton type='button' value='삭제' onClick={handleDelete}>
        전체 삭제하기
      </St.CleanButton>
      <St.Canvas className='canvas'>
        <canvas ref={canvasRef} />
      </St.Canvas>
      <ColorPicker onColorChange={handleColorChange} onBrushChange={handleBrushChange} />
    </St.CanvasWrapper>
  );
};

export default Canvas;

const St = {
  CanvasWrapper: styled.div``,
  CleanButton: styled.button`
    width: 7.6rem;
    height: 1.8rem;
    padding: 0;

    margin: 2.4rem 0 2rem 0;
    color: ${({ theme }) => theme.colors.gray2};
    font: ${({ theme }) => theme.fonts.body_underline_medium_14};
  `,
  Canvas: styled.div`
    margin-bottom: 1.6rem;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
};
