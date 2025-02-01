import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { getPostsAction } from "../redux/actions/post";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-2 m-2">
      {posts?.length > 0 ? (
        posts.map((post, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <HomeCard post={post} />
          </div>
        ))
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
};

export default Home;