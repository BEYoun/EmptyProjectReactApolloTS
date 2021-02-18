import React from "react";

import PostsGrid from "../../components/posts/posts-grid/post-grid.component";
import { useGetPosts } from "../../hooks/posts/useGetPosts";

const Home: React.FC = () => {
    const postsItems = useGetPosts();
    return (
        <div className="home">
            <PostsGrid posts={postsItems || []} />
        </div>
    )
}
export default Home;