import styled from "styled-components"
import Sheet from 'react-modal-sheet';
import { useState } from "react";

interface RefundBottomProps {
    isSheetOpen : boolean;
    setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RefundBottom = ({isSheetOpen, setSheetOpen} : RefundBottomProps) => {

    return (
        <CustomSheet 
            isOpen={isSheetOpen} 
            onClose={()=>setSheetOpen(false)}
            detent="full-height"
            disableDrag={false}
            >
            <Sheet.Container>
                <Sheet.Header disableDrag={true}/>
                <Sheet.Content>
                    <St.Title>제목입니다</St.Title>
                    <St.Text>포인트 적립 정책:
회원 가입 시, 새로 가입한 회원에게 3000포인트를 적립해드립니다.
구매 시, 구매 금액의 1%에 해당하는 포인트를 적립해드립니다.
특정 이벤트나 프로모션에 참여 시, 해당 이벤트에 따른 추가 포인트를 적립할 수 있습니다.
포인트 사용 정책:
적립된 포인트는 다음 구매 시 현금처럼 사용 가능합니다.
최소 사용 가능 포인트는 1,000포인트로 제한합니다.
포인트는 부분 사용이 가능하며, 잔여 포인트는 다음 구매에 적용됩니다.
포인트로 구매한 상품은 반품 시 환불될 경우 사용한 포인트가 다시 적립됩니다.
포인트 유효 기간:
적립된 포인트는 발생한 날로부터 1년간 유효합니다.
만약, 1년 이내에 사용하지 않을 경우, 해당 포인트는 자동으로 소멸됩니다.
포인트 이전 및 공유:
포인트는 회원 개인에게 발급되며, 다른 회원과 공유할 수 없습니다.
회원 간의 포인트 이전 또한 불가능합니다.
정책 변경:
당사는 필요 시 포인트 정책을 변경할 수 있으며, 이러한 변경 사항은 회원에게 사전 공지됩니다.
변경된 정책은 공지일로부터 적용됩니다.</St.Text>
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
        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray3};
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