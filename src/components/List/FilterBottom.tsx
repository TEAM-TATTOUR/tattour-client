import styled from "styled-components"
import Sheet from 'react-modal-sheet';

interface FilterBottomProps {
    isSortOpen : boolean;
    setSortOpen : React.Dispatch<React.SetStateAction<boolean>>,
    isGenreOpen : boolean;
    setGenreOpen : React.Dispatch<React.SetStateAction<boolean>>,
    isStyleOpen : boolean;
    setStyleOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const FilterBottom = ({isSortOpen, setSortOpen, isGenreOpen, setGenreOpen, isStyleOpen, setStyleOpen} : FilterBottomProps) => {

    const FILTER = [
        {
            type : '정렬',
            isOpen : isSortOpen,
            onClose : () => setSortOpen(false),
            data : ['인기 순', '가격 낮은 순', '가격 높은 순']
        },
        {
            type : '장르',
            isOpen : isGenreOpen,
            onClose : () => setGenreOpen(false),
            data : ['일러스트', '동양화', '블랙워크', '라인 타투', '레터링', '수채화']
        },
        {
            type : '스타일',
            isOpen : isStyleOpen,
            onClose : () => setStyleOpen(false),
            data : ['추상적인', '심플한','귀여운', '사실적인', '감성적인', '다크한']
        },

    ]

    return (
        <>
            {FILTER.map((filter)=>(
                <CustomSheet 
                    key={filter.type}
                    isOpen={filter.isOpen} 
                    onClose={filter.onClose}
                    detent="content-height"
                    disableDrag={true}
                    >
                    <Sheet.Container>
                        <Sheet.Header disableDrag={true}/>
                        <Sheet.Content>
                            {filter.data.map((el)=>(
                                <St.TagBox key={el}>{el}</St.TagBox>
                            ))}
                            <St.Footer>
                                <St.Button type='button'>
                                    적용하기
                                </St.Button>
                            </St.Footer>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop onClick={filter.onClose}/>
                </CustomSheet>
            ))}
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