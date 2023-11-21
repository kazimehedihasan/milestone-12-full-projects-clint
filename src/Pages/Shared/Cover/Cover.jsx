/* eslint-disable react/prop-types */

import { Parallax } from 'react-parallax';

const Cover = ({ img, title, titleDiscrip }) => {
  return (
    <div>
            <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
     <div className="hero h-[600px] mt-10">
  <div className="hero-content text-center text-neutral-content">
    <div className="h-[300px] w-[1080px] bg-black/25">
      <h1 className="mb-5 text-5xl font-bold  mt-24">{title}</h1>
      <p className="mb-5 ">{titleDiscrip}</p>
    </div>
  </div>
</div>
    </Parallax>

    </div>
  );
};

export default Cover;
