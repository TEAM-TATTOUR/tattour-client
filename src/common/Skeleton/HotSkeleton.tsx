import ContentLoader from 'react-content-loader';

const HotSkeleton = () => (
  <ContentLoader
    speed={2}
    width='15.3rem'
    height='24.3rem'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0.3rem' ry='0.3rem' width='15.3rem' height='16.3rem' />
    <rect x='0.5rem' y='17.6rem' rx='0.3rem' ry='0.3rem' width='11.5rem' height='1.7rem' />
    <rect x='0.5rem' y='20rem' rx='0.3rem' ry='0.3rem' width='9rem' height='1.7rem' />
  </ContentLoader>
);

export default HotSkeleton;
