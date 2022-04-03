import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PCard, PWidget, Categories, Layout } from '../components'
import { FeaturedPosts } from '../components';
import { getPosts, postSelectors } from '../features/postSlice';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postSelectors.selectAll);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Layout>
            <FeaturedPosts />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {posts.map((post) => <PCard post={post} key={post.id} />)}
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