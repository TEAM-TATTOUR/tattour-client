import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    viewBox='0 0 187 283'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='1' ry='1' width='187' height='201' />
    <rect x='20' y='217' rx='3' ry='3' width='116' height='18' />
    <rect x='20' y='243' rx='3' ry='3' width='94' height='18' />
  </ContentLoader>
);

export default Skeleton;
