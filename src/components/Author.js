import React from 'react';
import Image from 'next/image';


const Author = ({ post }) => {
    console.log('jiaaaa')
    console.log(post)
    return(
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
        <div className="absolute left-0 right-0 -top-14">
        <Image
            unoptimized
            alt={post.user.name}
            height="100px"
            width="100px"
            className="align-middle rounded-full"
            src={post.image}
        />
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">{post.user.name}</h3>
        <p className="text-white text-ls">{post.user.email}</p>
    </div>
    )
}

export default Author;