import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Link } from 'react-router-dom';
export default function Home() {
  const { recipelist,handlefav } = useContext(GlobalContext);
  
  return (
    <div className='min-h-screen bg-orange-100 rounded-md p-5'>
      {
        recipelist && recipelist.length > 0 ?
          <div className='grid grid-cols-4 gap-4'>
            {
              recipelist.map((recipe) => (
                <div className='flex flex-col items-center justify-center bg-orange-200 border-2 border-orange-300 rounded-lg overflow-hidden w-[350px] h-[350px] hadow-[6px_6px_0px_#fdba74] hover:shadow-[8px_8px_0px_rgba(260,150,65,0.50)] transition-all duration-300 ' key={recipe.id}>
                  <div className='overflow-hidden h-50 w-full flex items-center justify-center '>
                    <img className='h-full w-[80%]  object-cover hover:scale-105 hover:rounded-lg transition-transform duration-300 rounded-lg' src={recipe.image_url} alt={recipe.title} />
                  </div >
                  <h1 className='tracking-tight font-semibold text-sm p-2 text-center text-orange-500'>{recipe.title}</h1>
                  <button onClick={() =>  handlefav(recipe) } className='bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-400 text-white text-sm font-semibold px-4 py-2'>Add to fav</button>
                  <Link to={`/recipe-item/${recipe.id}`} className='bg-orange-500 rounded-lg cursor-pointer mt-2 hover:bg-orange-400 text-white text-sm font-semibold px-4 py-2'>View Details</Link>
                </div>
              ))
            }
          </div> : <p className='font-bold text-black text-4xl text-center p-10'>Nothing to show pleae search other items</p>
      }
    </div>
  )
}
