'use client';

// import { serverUtils } from '@/utils/serverUtils';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Theme } from '@/components/theme-provider';
import { useTheme } from '@/components/theme-provider';

// import './ImageSlider.css';

const ChangeColorInput = () => {
  const [color, setColor] = useState('');
  const { theme, setTheme } = useTheme();
  ChangeColorInput;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    const newTheme = {
      ...theme,
      colors: {
        ...theme.colors,
        primary: e.target.value,
      },
    };
    setTheme(newTheme);
    console.log(theme);
  };

  // submit event is what kind in react?
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTheme = {
      ...theme,
      colors: {
        ...theme.colors,
        primary: color,
      },
    };
    setTheme(newTheme);
  };

  return (
    <div className='mt-4'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <label htmlFor='colorInput' className='mb-2'>
          New Primary Color value:{' '}
        </label>
        <input
          value={color}
          id='colorInput'
          type='text'
          onChange={handleChange}
          className='border border-gray-400 rounded px-2 py-1'
        ></input>
        <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };

  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className='image-slider-container'>
        <Slider {...settings}>
          <div>
            <img src='http://picsum.photos/400/200' />
          </div>
          <div>
            <img src='http://picsum.photos/400/200' />
          </div>
          <div>
            <img src='http://picsum.photos/400/200' />
          </div>
          <div>
            <img src='http://picsum.photos/400/200' />
          </div>
        </Slider>
      </div>
      <h1
        style={{
          color: theme.colors.primary,
        }}
      >
        This should be the color I set
      </h1>
      <ChangeColorInput></ChangeColorInput>
    </>
  );
}

// export default function ClientRoutePage() {
//   //   const result = serverUtils();

//   return (
//     <>
//       {' '}
//       <h1>Client Route Page</h1>
//       {/* {result} */}
//     </>
//   );
// }
