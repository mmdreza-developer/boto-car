import React from 'react'
import Sedan from '../icons/Sedan'
import Suv from '../icons/Suv'
import Sport from '../icons/Sport'
import Hatchback from '../icons/Hatchback'
import Link from 'next/link'

function Categories() {
  return (
    <div className='container flex justify-center items-center gap-3 mt-4'>
        <Link href="/categories/sedan" className='flex items-center flex-col justify-center gap-1 p-2 px-6 bg-yellow-300 rounded'>
            <Sedan/>
          <p className='font-bold text-lg'>Sedan</p>
        </Link>
        <Link href="/categories/suv" className='flex items-center flex-col justify-center gap-1 p-2 px-6 bg-yellow-300 rounded'>
            <Suv/>
          <p className='font-bold text-lg'>Suv</p>
        </Link>
        <Link href="/categories/sport" className='flex items-center flex-col justify-center gap-1 p-2 px-6 bg-yellow-300 rounded'>
            <Sport/>
          <p className='font-bold text-lg'>Sport Cars</p>
        </Link>
        <Link href="/categories/hatchback" className='flex items-center flex-col justify-center gap-1 p-2 px-6 bg-yellow-300 rounded'>
            <Hatchback/>
          <p className='font-bold text-lg'>Hachback</p>
        </Link>
    </div>
  )
}

export default Categories