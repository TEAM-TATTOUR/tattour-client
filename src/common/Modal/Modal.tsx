import styled from "styled-components";

interface ModalProps {
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ onClose }) => {
    return (
      <ModalContainer>
        <ModalContent>
          {/* <ModalTitle>정말 그만두시나요?</.ModalTitle> */}
          <GoBackBtn onClick={onClose}>게임으로 돌아가기</GoBackBtn>
        </ModalContent>
      <ModalContainer>
    );
  };


const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  display: grid;
  padding: 2.5rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray2};
  font-size: 1.7rem;
`;

const GoBackBtn = styled.button`
  padding: 1rem 0rem;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.white};
`;

export default Modal;