import { ReactNode } from 'react';
import Sheet from 'react-modal-sheet';
import { SheetDetent } from 'react-modal-sheet/dist/types';
import styled from 'styled-components';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  detent?: SheetDetent;
  disableDrag: boolean;
  children: ReactNode;
}

const Header = ({ disableDrag, children }: { disableDrag: boolean; children?: ReactNode }) => {
  return <Sheet.Header disableDrag={disableDrag}>{children}</Sheet.Header>;
};
const Content = ({ children }: { children: ReactNode }) => {
  return <Sheet.Content>{children}</Sheet.Content>;
};
const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <Sheet.Container className={className}>{children}</Sheet.Container>;
};
const Scroller = ({ children }: { children: ReactNode }) => {
  return <Sheet.Scroller>{children}</Sheet.Scroller>;
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
  Scroller,
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
    .text-bottom-sheet {
      padding: 2.5rem 2.4rem 0rem 2.4rem;
      height: calc(100% - 10.6rem) !important;

      left: initial !important;
    }
    .react-modal-sheet-header {
      height: 1.6rem !important;
    }
    .react-modal-sheet-container > div:first-child {
      display: flex;
      justify-content: space-between !important;
    }
    .react-modal-sheet-scroller {
      padding-bottom: 6rem;
    }
    .react-modal-sheet-drag-indicator {
      display: none;
    }
  `,
};
