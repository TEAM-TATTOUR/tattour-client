import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import ColorPicker from './ColorPicker';
import styled from 'styled-components';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 335,
      height: 458,
    });

    // 그리기 설정
    canvas.freeDrawingBrush.color = 'black';
    canvas.freeDrawingBrush.width = 5;

    fabricCanvasRef.current = canvas;

    //캔버스 지우기
    return () => {
      canvas.dispose();
    };
  }, []);

  //색상 변경
  const handleColorChange = (color: string) => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.freeDrawingBrush.color = color;
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
      <ColorPicker onChange={handleColorChange} />
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
    width: 335px;
    height: 458px;
    margin-bottom: 1.6rem;

    background-color: lightgray;
  `,
};
