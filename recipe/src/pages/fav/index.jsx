import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

export default function Fav() {
    const { favourites } = useContext(GlobalContext)

    return (
        <div className="min-h-screen bg-orange-50 p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-800">
                    Favourite Recipes
                </h1>
                <p className="mt-1 text-sm text-orange-500">
                    Your saved recipes
                </p>
            </div>

            {favourites && favourites.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {favourites.map((item) => (
                        <div
                            key={item.id}
                            className="group overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-[6px_6px_0px_#fed7aa] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#fdba74]"
                        >
                            <div className="h-52 w-full overflow-hidden bg-orange-100 p-2">
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-4">
                                <h2 className="min-h-12 text-center text-lg font-semibold tracking-tight text-neutral-800">
                                    {item.title}
                                </h2>

                                <button
                                    className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                                >
                                    View details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex min-h-[400px] items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-neutral-700">
                            No favourite recipes yet
                        </h2>
                        <p className="mt-2 text-sm text-neutral-500">
                            Add some recipes to your favourites.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}