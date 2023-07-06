import styled from "styled-components"
import Sheet from 'react-modal-sheet';
import { useState } from 'react';

const FilterBottom = () => {
    const SORT = ['인기 순', '가격 낮은 순', '가격 높은 순'];
    const [isOpen, setOpen] = useState(false);


    return (
        <>
            <button onClick={() => setOpen(true)}>Open sheet</button>
            <CustomSheet 
                isOpen={isOpen} 
                onClose={() => setOpen(false)}
                detent="content-height"
                disableDrag={true}
                >
                <Sheet.Container>
                <Sheet.Header disableDrag={true}/>
                <Sheet.Content>
                    {SORT.map((el)=>(
                        <St.TagBox key={el}>{el}</St.TagBox>
                    ))}
                    <St.Footer>
                        <St.Button type='button'>
                            적용하기
                        </St.Button>
                    </St.Footer>
                </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onClick={() => setOpen(false)}/>
            </CustomSheet>
        </>

    )
}

export default FilterBottom

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
`;