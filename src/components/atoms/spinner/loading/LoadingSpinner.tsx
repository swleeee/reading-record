import { ClipLoader } from 'react-spinners';

// TODO: colorType 수정
interface LoadingSpinnerProps {
  colorType?: 'black' | 'white' | 'brown';
}

const LoadingSpinner = ({ colorType = 'white' }: LoadingSpinnerProps) => {
  return <ClipLoader aria-label="loading..." color={colorType} size={10} />;
};

export default LoadingSpinner;
