import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, postSelectors } from '../../features/postSlice';
import { convertToSlug, limitTitle, limitDecription } from '../../helper';


const PWidget = ({ categories, slug }) => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectors.selectAll);

  const renderPost = (post, index) => {

    if(index <= 2){
      return (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.image}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link to={`/post/${post.id}`} className="text-md" key={index}>{limitTitle(post.title)}</Link>
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
      dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {posts.map(renderPost)}
    </div>
  );
};

export default PWidget;