import styled from "styled-components"
import Sheet from 'react-modal-sheet';


const RefundBottom = () => {
  return (
    <CustomSheet 
        isOpen={filter.isOpen} 
        onClose={filter.onClose}
        detent="full-height"
        disableDrag={true}
        >
        <Sheet.Container>
            <Sheet.Header disableDrag={true}/>
            <Sheet.Content>
                내용내용 
            </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={filter.onClose}/>
    </CustomSheet>
  )
}

export default RefundBottom

const St = {
    TagBox : styled.p`
        text-align: center;
        width:100%;
        padding: 1.7rem 0rem;
        color: ${({ theme }) => theme.colors.gray4};
        ${({ theme }) => theme.fonts.title_medium_18};
    `,
    Footer: styled.footer`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 7rem;
        margin-top: 4rem;
        background-color: ${({ theme }) => theme.colors.gray3};
    `,
    Button: styled.button`
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.white};
        font: ${({ theme }) => theme.fonts.title_semibold_18};
    `,
}

const CustomSheet = styled(Sheet)`
    .react-modal-sheet-backdrop {
        background-color: rgba(0, 0, 0, 0.6) !important;
    }
    .react-modal-sheet-container {
        border-radius: 1rem !important;
    }
    .react-modal-sheet-header {
        height: 1.6rem !important;
    }
    .react-modal-sheet-drag-indicator {
        display: none;
    }
`