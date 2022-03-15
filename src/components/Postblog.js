import { useEffect, useState } from "react";
import { useRestAPI } from "../contexts/RestAPIsContext";
import { Link } from "react-router-dom";
import "../App.css";

function Postblog({ post }) {
  const [author, setAuthor] = useState({});
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  const [dateTime, setDateTime] = useState({});
  const { findAuthor, findCategory, findTag, findComment, toDateTime } =
    useRestAPI();
  useEffect(() => {
    setAuthor(findAuthor(post.author));
    setCategories(findCategory(post.categories));
    setTags(findTag(post.tags));
    setComments(findComment(post.id));
    setDateTime(toDateTime(post.date));
  }, [
    findAuthor,
    findCategory,
    findTag,
    post,
    findComment,
    toDateTime,
    author,
  ]);

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "50px",
        margin: "25px 0",
        border: "2px solid hsl(0, 0%, 0%, .25)",
        padding: "20px",
        transition: "transform .1s",
      }}
    >
      <div
        style={{ display: "flex", marginBottom: "20px", marginRight: "10px" }}
      >
        <img
          src={author.avatar_urls ? author.avatar_urls["96"] : ""}
          alt=""
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        ></img>
        <div>
          <div
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            {author.name}
          </div>
          <div style={{ fontSize: "14px", color: "gray" }}>
            {dateTime.date} {dateTime.time}
          </div>
        </div>
      </div>
      <div style={{ fontSize: "26px", fontWeight: "bold", margin: "10px 0" }}>
        {post.title.rendered}
      </div>
      <div style={{ display: "flex", margin: "5px 0" }}>
        {categories.map((c) => (
          <div
            key={c.id}
            className="cates-item"
            style={{
              background: "var(--theme-color)",
              padding: "5px 10px",
              marginRight: "5px",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: "bold",
              height: "fit-content",
            }}
          >
            {" "}
            {c.name}
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
      <div
        style={{ color: "rgb(134, 85, 28)", display: "flex", margin: "5px 0" }}
      >
        {tags.map((t) => (
          <div key={t.id} style={{ marginRight: "5px" }}>
            #{t.name}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "right" }}>{comments.length} comments</div>
      <div

        style={{
          padding: "10px",
          margin: "15px 0",
          textAlign: "right",
        }}
      >
        <Link
          to={`/posts/${post.id}`}
          className="btn-link"
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "0px solid black",
            backgroundColor: "#b9793d",
          }} 
        >
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default Postblog;
