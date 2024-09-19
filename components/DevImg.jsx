import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        width={600}  // Adjust these dimensions if needed
        height={600}
        priority
        alt='Developer Image'
        className='object-contain w-full h-auto' // Ensure image is responsive
      />
    </div>
  );
};

export default DevImg;
