import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#438dff"
      ariaLabel="circles-loading"
      wrapperStyle={{ margin: '0 auto', display: 'block' }}
      wrapperClass=""
      visible={true}
    />
  );
};
