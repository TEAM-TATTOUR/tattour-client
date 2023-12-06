import ContentLoader from 'react-content-loader';

const MainSkeleton = () => (
  <ContentLoader
    speed={2}
    width='15.3rem'
    height='14.5rem'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0.3rem' ry='0.3rem' width='15.3rem' height='9.6rem' />
    <rect x='0.5rem' y='10.9rem' rx='0.3rem' ry='0.3rem' width='4.1rem' height='1.5rem' />
    <rect x='0.5rem' y='13.1rem' rx='0.3rem' ry='0.3rem' width='10.6rem' height='1.2rem' />
  </ContentLoader>
);
export default MainSkeleton;
