import styled from "styled-components"
import Sheet from 'react-modal-sheet';
import { useRef, useState, useEffect } from "react";
import ic_check_small_light from '../../assets/icon/ic_check_small_light.svg';
import ic_check_small_pink from '../../assets/icon/ic_check_small_pink.svg';

interface FilterBottomProps {
    isSortOpen : boolean;
    setSortOpen : React.Dispatch<React.SetStateAction<boolean>>,
    isGenreOpen : boolean;
    setGenreOpen : React.Dispatch<React.SetStateAction<boolean>>,
    isStyleOpen : boolean;
    setStyleOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const FilterBottom = ({isSortOpen, setSortOpen, isGenreOpen, setGenreOpen, isStyleOpen, setStyleOpen} : FilterBottomProps) => {

    const filterRef = useRef<HTMLElement>(null);
    const [isSelected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(false);
    }, [isSortOpen, isGenreOpen, isStyleOpen])
    
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

    const handleClickTag = (index : number) => {
        document.querySelectorAll('.select').forEach(el => {
            el.classList.remove('select');
        })
        filterRef.current?.childNodes[index].classList.add('select');

        setSelected(true);
    }
    

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
                        <Sheet.Content ref={filterRef}>
                            {filter.data.map((el, idx)=>(
                                <St.TagBox 
                                    key={el}
                                    onClick={()=>handleClickTag(idx)}
                                    >
                                    <span></span>
                                    {el}
                                    <i></i>
                                </St.TagBox>
                            ))}
                            <St.Footer $sel={isSelected}>
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
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 1.7rem 0rem;
        color: ${({ theme }) => theme.colors.gray4};
        ${({ theme }) => theme.fonts.title_medium_18};

        & > span {
            display: inline-block;
            margin: 0rem 0.3rem;
            width: 2rem;
            height: 2rem;
        }

        & > i {
            display: inline-block;
            margin: 0rem 0.3rem;
            width: 2rem;
            height: 2rem;

            background: url(${ic_check_small_light});
        }

        &.select {
            color: ${({ theme }) => theme.colors.gray8};
            ${({ theme }) => theme.fonts.title_semibold_18};

            & > i {
                background: url(${ic_check_small_pink});
            }

        }
    `,
    Footer: styled.footer<{$sel : boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 7rem;
        margin-top: 4rem;

        background-color: ${({ theme, $sel }) => ($sel? theme.colors.gray9 : theme.colors.gray3)};
    `,
    Button: styled.button`
        width: 100%;
        height: 100%;

        color: ${({ theme }) => theme.colors.white};
        ${({ theme }) => theme.fonts.title_semibold_18};
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