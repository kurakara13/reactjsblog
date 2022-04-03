import React, { useState, useEffect } from 'react';

import AdjacentPostCard from '../AdjacentPostCard';

const posts = [
    { 
      title: 'React Testing', 
      slug: 'react-testing', 
      excerpt: 'Learn React Testing', 
      featuredImage:  {
          url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
      },
      author: {
        name: 'John Doe',
        photo: {
            url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
        }
      },
      createdAt: '12/01/1996'
    },
    { 
      title: 'React With Tailwind', 
      slug: 'react-with-tailwind', 
      excerpt: 'Learn React With Tailwind', 
      featuredImage: {
        url: 'https://www.cekindo.com/wp-content/uploads/2019/08/vietnam-import-export-regulations.jpg.webp'
      },
      author: {
        name: 'John Doe',
        photo: {
            url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
          }
      },
      createdAt: '12/01/1996'
    },
    { 
        title: 'React Testing', 
        slug: 'react-testing', 
        excerpt: 'Learn React Testing', 
        featuredImage:  {
            url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
        },
        author: {
          name: 'John Doe',
          photo: {
              url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
          }
        },
        createdAt: '12/01/1996'
      },
      { 
        title: 'React With Tailwind', 
        slug: 'react-with-tailwind', 
        excerpt: 'Learn React With Tailwind', 
        featuredImage: {
          url: 'https://www.cekindo.com/wp-content/uploads/2019/08/vietnam-import-export-regulations.jpg.webp'
        },
        author: {
          name: 'John Doe',
          photo: {
              url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
            }
        },
        createdAt: '12/01/1996'
      },
      { 
        title: 'React Testing', 
        slug: 'react-testing', 
        excerpt: 'Learn React Testing', 
        featuredImage:  {
            url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
        },
        author: {
          name: 'John Doe',
          photo: {
              url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
          }
        },
        createdAt: '12/01/1996'
      },
      { 
        title: 'React With Tailwind', 
        slug: 'react-with-tailwind', 
        excerpt: 'Learn React With Tailwind', 
        featuredImage: {
          url: 'https://www.cekindo.com/wp-content/uploads/2019/08/vietnam-import-export-regulations.jpg.webp'
        },
        author: {
          name: 'John Doe',
          photo: {
              url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
            }
        },
        createdAt: '12/01/1996'
      },
      { 
        title: 'React Testing', 
        slug: 'react-testing', 
        excerpt: 'Learn React Testing', 
        featuredImage:  {
            url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
        },
        author: {
          name: 'John Doe',
          photo: {
              url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
          }
        },
        createdAt: '12/01/1996'
      },
      { 
        title: 'React With Tailwind', 
        slug: 'react-with-tailwind', 
        excerpt: 'Learn React With Tailwind', 
        featuredImage: {
          url: 'https://www.cekindo.com/wp-content/uploads/2019/08/vietnam-import-export-regulations.jpg.webp'
        },
        author: {
          name: 'John Doe',
          photo: {
              url: 'https://www.cekindo.com/wp-content/uploads/2022/03/pexels-thirdman-7651924-470x450.jpg.webp',
            }
        },
        createdAt: '12/01/1996'
      },
]

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState(posts);
  const [dataLoaded, setDataLoaded] = useState(true);

  useEffect(() => {

  }, [slug]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
      {dataLoaded && (
        <>
          {adjacentPost.previous && (
            <div className={`${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div className={`${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdjacentPosts;