import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PCard, PWidget, Categories, Layout } from '../components'
import { getPosts, postSelectors } from '../features/postSlice';
import { useParams, useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postSelectors.selectAll);
    const { categoryslug } = useParams();

    const renderCard = (post) => {
      if(post.category == categoryslug){
        return <PCard post={post} key={post.id} />
      }
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Layout>
            <h1 className="text-white transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                Resutlt Category: {categoryslug}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {posts.map(renderCard)}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relatve top-8">
                    <PWidget />
                    <Categories />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;