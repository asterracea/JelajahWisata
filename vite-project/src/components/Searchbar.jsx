import React, {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
const Searchbar = () => {
    const [ isSearchOpen, setIsSearchOpen] = useState(false);
    const handleToggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
  return (
    <form className=''>
        <div className='relative'>
            <button 
                className='absolute right-0 p-3 md:p-4 top-1/2 -translate-y-1/2 rounded-full bg-yellow-300'
                onClick={handleToggleSearch}
                type='button'
                // type="submit"
                >
                <AiOutlineSearch className='text-blue-900 font-bold'  size={18}/>
            </button>
            <input
            type='search'
            placeholder='search here' 
            className={`${
                isSearchOpen ? 'flex' : 'hidden'
            } md:flex w-full p-4 bg-gray-200 rounded-full text-sm focus:outline-none active:outline-none h-10`} />
        </div>
    </form>
  )
}

export default Searchbar
