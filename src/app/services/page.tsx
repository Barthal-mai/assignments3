import React from 'react';
import Link from 'next/link';
import { services } from '@/constants';

function ServiceList() {
  return (
    <div className='text-center'>
      <div className='pageTitle'>All Services List</div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {services.map((item) => (
          <article key={item.id} className='flex max-w-xl flex-col items-start justify-between'>
            <div className='group relative'>
              <img src={item.image} alt={item.title} />
              <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                <Link href={`/services/${item.id}`}>{item.title}</Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
