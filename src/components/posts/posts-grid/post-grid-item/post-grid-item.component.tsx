import React from "react";
import { Post } from "../../../../common/interfaces/post.interface";

interface PostGridItemProps {
    post: Post
}

const PostGridItem: React.FC<PostGridItemProps> = ({ post }: PostGridItemProps) => {
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.body}</p>
            <p>{post.title}</p>
        </div>
    );
}
export default PostGridItem;