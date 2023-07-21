import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

interface CustomTattooDetailProps {
  title: string;
  image: string[];
  size: string;
  quantity: number;
  requests: string;
  color?: string;
  topic?: string;
  haveDesign: boolean;
  mainImage: string;
}

const MyTattooDetailSection = ({
  title,
  image,
  size,
  quantity,
  requests,
  haveDesign,
  color,
  topic,
  mainImage,
}: CustomTattooDetailProps) => {
  enum SizeEnum {
    quarter = '5cm 이하',
    half = 'A4 1/8',
    regular = 'A4 1/4',
    double = 'A4 1/2',
  }

  const DESCRIPTION_ITEM_LIST = [
    { title: '컬러', property: `${color ? '컬러' : '흑백'}` },
    { title: '크기', property: SizeEnum[size] },
    { title: '수량', property: quantity },
    { title: '주제', property: topic },
    { title: '요청사항', property: requests },
  ];

  return (
    <>
      <St.MyTattooSection>
        <St.MyTattooTitle>{title}</St.MyTattooTitle>
        <St.MyTattooImageWrapper>
          <ScrollContainer className='scroll-container'>
            {mainImage && <St.MyTattooImage src={mainImage} $haveDesign={haveDesign} />}
            {image.map((img, idx) => {
              return <St.MyTattooImage key={idx} src={img} $haveDesign={haveDesign} />;
            })}
          </ScrollContainer>
        </St.MyTattooImageWrapper>
      </St.MyTattooSection>
      <St.MyTattooDevider />
      <St.MyTattooDescriptionSection>
        <St.MyTattooDescriptionWrapper>
          {DESCRIPTION_ITEM_LIST.map((item, idx) => {
            return (
              item.property && (
                <St.MyTattooDescriptionItem key={idx}>
                  <St.MyTattooDescriptionTitle>{item.title}</St.MyTattooDescriptionTitle>
                  <St.MyTattooDescription>{item.property}</St.MyTattooDescription>
                </St.MyTattooDescriptionItem>
              )
            );
          })}
        </St.MyTattooDescriptionWrapper>
      </St.MyTattooDescriptionSection>
    </>
  );
};

const St = {
  MyTattooSection: styled.section`
    margin-top: 2.6rem;
    margin-left: 2.2rem;
  `,

  MyTattooTitle: styled.h2`
    margin-bottom: 1.6rem;

    ${({ theme }) => theme.fonts.title_semibold_18}
    color: ${({ theme }) => theme.colors.gray8};
  `,

  MyTattooImageWrapper: styled.div`
    .scroll-container {
      display: flex;
      gap: 1rem;
    }
  `,

  MyTattooImage: styled.img<{ $haveDesign: boolean }>`
    width: ${({ $haveDesign }) => ($haveDesign ? '33.5rem' : '16rem')};
    height: ${({ $haveDesign }) => ($haveDesign ? '18.2rem' : '12rem')};

    background-color: ${({ theme }) => theme.colors.gray0};
    object-fit: contain;
  `,

  MyTattooDevider: styled.div`
    width: 100%;
    margin-top: 3rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray0};
  `,

  MyTattooDescriptionSection: styled.section`
    margin-top: 3rem;
    margin-left: 2.2rem;
  `,

  MyTattooDescriptionWrapper: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,

  MyTattooDescriptionItem: styled.li`
    display: flex;
  `,

  MyTattooDescriptionTitle: styled.h3`
    width: 6.3rem;
    ${({ theme }) => theme.fonts.body_medium_14}
    color: ${({ theme }) => theme.colors.gray3};
  `,

  MyTattooDescription: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14}
    color: ${({ theme }) => theme.colors.gray4};
  `,
};

export default MyTattooDetailSection;
