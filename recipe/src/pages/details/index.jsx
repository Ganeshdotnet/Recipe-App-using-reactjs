import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const { id } = useParams()

    const [recipedetails, setRecipeDetails] = useState(null)

    useEffect(() => {
        async function getRecipeDetails() {
            const res = await fetch(
                `https://forkify-api.jonas.io/api/v2/recipes/${id}`
            )

            const data = await res.json()

            if (data?.data?.recipe) {
                setRecipeDetails(data.data.recipe)
            }
        }

        getRecipeDetails()
    }, [id])

    const { ingredients } = recipedetails || {}

    return (
        <div className="min-h-screen bg-orange-50 flex justify-center p-8">
            {recipedetails && (
                <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-[6px_6px_0px_#fed7aa]">

                    <div className="h-72 w-full overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src={recipedetails.image_url}
                            alt={recipedetails.title}
                        />
                    </div>

                    <div className="p-6">

                        <h1 className="text-2xl font-bold tracking-tight text-neutral-800">
                            {recipedetails.title}
                        </h1>

                        <p className="mt-2 text-sm text-orange-600">
                            Servings: {recipedetails.servings}
                        </p>

                        <div className="mt-6">
                            <h2 className="mb-3 text-lg font-semibold text-neutral-800">
                                Ingredients
                            </h2>

                            <ul className="space-y-2">
                                {ingredients?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-sm text-neutral-700"
                                    >
                                        <span className="font-medium text-orange-600">
                                            {item.quantity}
                                        </span>

                                        <span className="text-neutral-500">
                                            {item.unit}
                                        </span>

                                        <span>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}