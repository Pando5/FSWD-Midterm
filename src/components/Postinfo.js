import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestAPI } from "../contexts/RestAPIsContext";
import { Card } from "react-bootstrap";
// import PostComment from "./PostComment";

const Postinfo = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  const [dateTime, setDateTime] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {
    findPost,
    findAuthor,
    findCategory,
    findTag,
    findComment,
    toDateTime,
  } = useRestAPI();

  useEffect(() => {
    setPost(findPost(id));
  }, [findPost, id]);

  useEffect(() => {
    if (post.id) {
      setAuthor(findAuthor(post.author));
      setCategories(findCategory(post.categories));
      setTags(findTag(post.tags));
      setComments(findComment(post.id));
      setDateTime(toDateTime(post.date));
      setTitle(post.title.rendered);
      setContent(post.content.rendered);
      // console.log(post.content.rendered);
    }
  }, [findAuthor, findCategory, findTag, post, findComment, toDateTime]);

  const comDateTime = (old_time) => {
    let [date, time] = old_time.split("T");
    return {
      date,
      time
    };
  };


  return (
    <div className="container">
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
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {author.name}
          </div>
          <div style={{ fontSize: "14px", color: "gray" }}>
            {dateTime.date} {dateTime.time}
          </div>
        </div>
      </div>
      <div style={{ fontSize: "26px", fontWeight: "bold", margin: "10px 0" }}>
        {title}
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
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <div
        style={{ color: "rgb(134, 85, 28)", display: "flex", margin: "5px 0" }}
      >
        {tags.map((t) => (
          <div key={t.id} style={{ marginRight: "5px" }}>
            #{t.name}
          </div>
        ))}
      </div>
      <hr />
      <h1 style={{ marginBottom: "5vh" }}>{comments.length} Comment</h1>
      {comments.map((comment) => {
        return (
          <Card key={comment.id} id="comment" style={{marginBottom: "20px", borderColor: "rgb(134, 85, 28)", borderWidth: "2px"}}>
            <Card.Body>
              <Card.Title>{comment.author_name}</Card.Title>
              <Card.Text>{comDateTime(comment.date).date} {comDateTime(comment.date).time}</Card.Text>
              <div
                dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
              />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Postinfo;
