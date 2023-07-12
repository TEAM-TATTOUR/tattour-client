import styled from "styled-components"
import Sheet from 'react-modal-sheet';
import { useState } from "react";


const RefundBottom = () => {

    const [isSheetOpen, setSheetOpen] = useState(true);

    return (
        <CustomSheet 
            isOpen={isSheetOpen} 
            onClose={()=>setSheetOpen(false)}
            detent="full-height"
            disableDrag={true}
            >
            <Sheet.Container>
                <Sheet.Header disableDrag={true}/>
                <Sheet.Content>
                    <St.Title>제목입니다</St.Title>
                    <St.Text>세부내용입니다</St.Text>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onClick={()=>setSheetOpen(false)}/>
        </CustomSheet>
    )
}

export default RefundBottom

const St = {
    Title : styled.h2`
        ${({ theme }) => theme.fonts.title_semibold_20};
        color: ${({ theme }) => theme.colors.gray7};
    `,
    Text : styled.p`
    
    `
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