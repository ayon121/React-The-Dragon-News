import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [Categories , SetCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
        .then(res =>  res.json())
        .then(data => SetCategories(data))
    },[])

    return (
        <div>
            <h1 className=" text-2xl md:text-3xl lg:text-4xl mb-3 px-3 md:px-1 text-center md:text-start ">All Categories</h1>
            {
                Categories.map(category => <Link to={`/category/${category.id}`} className="block px-5 py-3 font-semibold  text-center md:text-start" key={category.id}> {category.name}</Link>)
            }

        </div>
    );
};

export default LeftSideNav;
