import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
    const { id } = useParams();
    const [makanan, setMakanan] = useState([]);

    const getDataById = async () => {
        const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/lookup.php?i=${id}`
    );

        // console.log(res.data.meals);
        setMakanan(res.data.meals);
    };

    useEffect(() => {
        getDataById();
    }, []);

    return (
        <>
        {makanan.map((i, index) => (
        <>
        <div
            key={index.idMeal}
            className="detail w-[100%] h-screen flex flex-row"
        >
        <div className="flex flex-col justify-center items-center w-1/2 h-full p-5">
            <img
                className="rounded-md shadow-lg w-full object-cover"
                src={i.strMealThumb}
            />
        </div>
            
        <div className="flex flex-col w-1/2">
            <div className="p-4">
                <h2 className="font-bold text-center p-3 text-2xl">
                    {i.strMeal}
                </h2>
                <h3 className="text-center p-1">
                    {i.strTags ? i.strTags.split(",").map((tag) => `#${tag.trim()}`).join(",") : "no tags"}
                </h3>
                <h2 className="text-xl font-bold p-2">Ingredients</h2>
                <h3 className="p-2 leading-normal">{i.strIngredient1}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient2}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient3}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient4}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient5}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient6}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient7}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient8}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient9}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient10}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient11}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient12}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient13}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient14}</h3>
                <h3 className="p-2 mt-1 leading-normal">{i.strIngredient15}</h3>

                <h2 className="text-xl font-bold p-2">Instructions</h2>
                <h3 className="p-2 leading-normal">{i.strInstructions}</h3>
                <a target='_blank' href={i.strSource} className='text-center ml-5 px-4 p-2  text-sm  h-8 rounded-md bg-[#141414] hover:bg-white hover:text-black transition duration-300 shadow-lg'>
                {
                i.strSource ? i.strSource
                .split(",")
                .map((link) => `${link.trim()}`)
                .join(", ")
                : "no source available"}
            </a>
                </div>
            </div>
            </div>
            </>
            ))}
        </>
        )
    }

export default Detail;
