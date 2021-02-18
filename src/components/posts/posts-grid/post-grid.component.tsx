import React from "react";
import { Post } from "../../../common/interfaces/post.interface";
import PostGridItem from "./post-grid-item/post-grid-item.component";

interface GridPostsProps {
    posts: Post[]
}

const PostsGrid: React.FC<GridPostsProps> = ({ posts }: GridPostsProps) => {

    return (
        <div className="posts-grid">
            {
                posts.map(post => (
                    <div key={post.id}>
                        <PostGridItem post={post} />
                    </div>
                ))
            }
        </div>
    );
}
export default PostsGrid;