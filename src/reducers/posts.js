let initialState = {
    posts: [
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
    ],
    error: false,
};

const posts = (state = initialState, action) => {
    return state;
}

export default posts