import React, { useContext } from 'react'

import { Link } from 'react-router-dom';

const categories = [
    {
        slug: 'business',
        name: 'Business'
    },
    {
        slug: 'activity',
        name: 'Activity'
    },
    {
        slug: 'news',
        name: 'News'
    }
]

const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                <Link to="/">
                    <span className="cursor-pointer font-bold text-4xl text-white">ReactJs Blog</span>
                </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                {categories.map((category, index) => (
                    <Link key={index} to={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
                ))}
                    <Link to="/"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Home</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header