import { ReactNode } from 'react';
import Sheet from 'react-modal-sheet';
import { SheetDetent } from 'react-modal-sheet/dist/types';
import styled from 'styled-components';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  detent: SheetDetent | undefined;
  disableDrag: boolean;
  children: ReactNode;
}

const Header = ({ disableDrag }: { disableDrag: boolean }) => {
  return <Sheet.Header disableDrag={disableDrag}></Sheet.Header>;
};
const Content = ({ children }: { children: ReactNode }) => {
  return <Sheet.Content>{children}</Sheet.Content>;
};
const Container = ({ children }: { children: ReactNode }) => {
  return <Sheet.Container>{children}</Sheet.Container>;
};
const Backdrop = ({ onTap }: { onTap: () => void }) => {
  return <Sheet.Backdrop onTap={onTap} />;
};
const BottomSheet = ({ isOpen, onClose, detent, disableDrag, children }: BottomSheetProps) => {
  return (
    <Sheet
      className='react-modal-sheet-wrapper'
      isOpen={isOpen}
      onClose={onClose}
      detent={detent}
      disableDrag={disableDrag}
    >
      <St.SheetWrapper>{children}</St.SheetWrapper>
    </Sheet>
  );
};

export const CustomSheet = Object.assign(BottomSheet, {
  Header,
  Content,
  Container,
  Backdrop,
});

const St = {
  SheetWrapper: styled.div`
    .react-modal-sheet-backdrop {
      max-width: 43rem;
      left: auto !important;
      background-color: rgba(0, 0, 0, 0.6) !important;
    }
    .react-modal-sheet-container {
      max-width: 43rem;
      border-radius: 1rem 1rem 0 0;
    }
    .react-modal-sheet-header {
      height: 1.6rem !important;
    }
    .react-modal-sheet-drag-indicator {
      display: none;
    }
  `,
};
