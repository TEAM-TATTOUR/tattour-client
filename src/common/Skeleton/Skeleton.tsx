import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width='100%'
    height='28.3rem'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0' ry='0' width='100%' height='20.1rem' />
    <rect x='2rem' y='21.7rem' rx='0.3rem' ry='0.3rem' width='11.6rem' height='1.8rem' />
    <rect x='2rem' y='24.3rem' rx='0.3rem' ry='0.3rem' width='9.4rem' height='1.8rem' />
  </ContentLoader>
);

export default Skeleton;
