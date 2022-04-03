import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, postSelectors } from '../features/postSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { PDetail, Categories, PWidget, Author, Comments, CommentsForm, Loader, Layout } from '../components';
import { AdjacentPosts } from '../components';

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const [author, setAuthor] = useState(null);

  const post = useSelector((state) => postSelectors.selectById(state, postId));

  useEffect(() => {
      dispatch(getPosts());
  }, [dispatch]);

  console.log(post)

  return (
    <Layout>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {post !== undefined && post !== null ? 
            <>
              <PDetail post={post} />
              <Author post={post} />
              <AdjacentPosts slug={post.id} createdAt={post.published_at} />
              <CommentsForm slug={post.id} />
              <Comments slug={post.id} />
            </> : null}
            
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;