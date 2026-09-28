import React from 'react'
import { TbSearch } from "react-icons/tb";

function SearchInput({
  onChange,
  onSearch,
  className,
}) {
  return (
    <div className={`flex w-full relative ${className} bg-white border-[1px] border-gray-300 px-3 py-2 rounded-xl items-center`}>
      <TbSearch className='absolute top-[50%] translate-y-[-50%] left-3 text-gray-300 text-[24px]' />
      <input 
        type='text'
        className='w-full h-full pl-[32px] border-0 outline-none focus:outline-none focus:ring-0'
        onChange={onChange}
        placeholder='Search Title / Keyword'
      />
      <button className='absolute top-[50%] translate-y-[-50%] right-0 px-5 h-full bg-secondary text-white rounded-r-xl' onClick={onSearch}>
        Cari
      </button>
    </div>
  )
}

export default SearchInput