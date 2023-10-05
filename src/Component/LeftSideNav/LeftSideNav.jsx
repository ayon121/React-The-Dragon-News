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
            <h1 className="text-4xl mb-3">All Categories</h1>
            {
                Categories.map(category => <Link to={`/category/${category.id}`} className="block px-5 py-3 font-semibold" key={category.id}> {category.name}</Link>)
            }

        </div>
    );
};

export default LeftSideNav;
