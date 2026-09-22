import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context'
export default function Navbar() {
    const{searchparams,setSearchparams,handleSubmit}=useContext(GlobalContext)
    console.log(searchparams);
    
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-md tracking-tight  text-neutral-900 font-bold cursor-pointer hover:text-orange-600'>Food Recipe</h1>
            </div>
            <div className='flex items-center justify-between '>
                <div className='flex items-center justify-center mr-100'>
                    <form className=' gap-2'     onSubmit={(event) => {
        event.preventDefault()
        handleSubmit()
    }}>
                    <input onChange={(event)=>setSearchparams(event.target.value)} type="text" name='search'
                       value={searchparams}
                       placeholder='enter your recipe name '
                        className='border-2 text-orange-400 focus:outline-none focus:border-orange-500 focus:text-orange-600  border-orange-300 p-2 rounded-xl' />
                </form>
                    <button onClick={handleSubmit} className='p-2 bg-orange-600 rounded-xl m-2 text-white font-medium hover:bg-orange-400 cursor-pointer'>search</button>
                </div>
                <ul className='flex'>
                    <li className='flex gap-5 font-md tracking-tight  text-neutral-900 font-bold cursor-pointer '>
                        <Link className='hover:text-orange-600 ' to={'/'}>Home</Link>
                        <Link className='hover:text-orange-600 ' to={'/fav'}>Favourite</Link>
                        <Link className='hover:text-orange-600 ' to={'/recipe-item/:id'}>Details</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}
