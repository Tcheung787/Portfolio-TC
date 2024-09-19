'use client';

import {
  RiLinkedinFill,
  RiGithubFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [

  {
    path: 'https://www.linkedin.com/in/tiffany02/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/Tcheung787',
    name: <RiGithubFill />,
  },

];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div
              className={`${iconsStyles}`}
              style={{
                fontSize: '40px',
                border: '2px solid #8866cc', // Add border color
                borderRadius: '10px', // Rounded corners
                padding: '4px', // Space inside the border
                display: 'inline-block',
              }}
            >
              {icon.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
