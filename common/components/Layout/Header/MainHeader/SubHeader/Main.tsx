import Link from 'next/link';
import React from 'react';
import { categoryList } from '../config';

const Main: React.FC<{}> = ({}) => {
  return (
    <div className='flex flex-col items-center justify-start gap-2'>
      <h1 className='text-5xl font-["Vilane"] py-[25px] px-[115px] border-b border-b-gray-700 tracking-widest'>
        <Link href='/'>DIGISINA</Link>
      </h1>
      <nav>
        <ul className='flex'>
          {categoryList.map((item) => (
            <React.Fragment key={item.id}>
              <li className='py-2 text-sm transition-all hover:font-bold'>
                <a href={item.url} className='px-3 py-1'>
                  {item.label}
                </a>
              </li>
              {item.id === 4 && (
                <span className='h-[22px] w-[1px] bg-gray-500 m-auto'></span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Main;
