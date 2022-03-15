import "../App.css";
import { useRestAPI } from "../contexts/RestAPIsContext";
import Postblog from "./Postblog";

const Post = () => {
  const { posts } = useRestAPI();

  return (
    <div>
      {posts.map((post) => (
        <Postblog key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Post;
