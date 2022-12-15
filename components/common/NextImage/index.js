import Image from 'next/image';

const NextImage = ({ ...props }) => {
  return <Image {...props} alt={""} />;
};

export default NextImage;
