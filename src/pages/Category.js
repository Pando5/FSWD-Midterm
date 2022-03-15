import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Postblog from "../components/Postblog";
import { useRestAPI } from "../contexts/RestAPIsContext";

export const Category = () => {
  const { posts } = useRestAPI();
  const [post, setPost] = useState([]);
//   const [cate, setCate] = useState(77);

  useEffect(() => {
    setPost(posts);
  }, [posts]);

  const filterCat = (cate) => {
    setPost(posts.filter((pos) => pos.categories.find((cat) => cat === cate)))
    console.log(cate);
  };

  return (
    <div style={{ width: "100%", display: "flex", gap: "20px" }}>
      <div
        style={{
          width: "50%",
          height: "50%",
          borderRadius: "30px",
          margin: "25px 0",
          border: "2px solid hsl(0, 0%, 0%, .25)",
          padding: "20px",
          transition: "transform .1s",
          paddingLeft: "50px",
        }}
      >
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col md="auto" className="justify-content-md-center">
            <Button
              style={{
                margin: "10px",
                backgroundColor: "rgb(134, 85, 28)",
                borderColor: "rgb(134, 85, 28)",
              }} onClick={() => filterCat(77)}
            >
              Classic
            </Button>
            <Button
              style={{
                margin: "10px",
                backgroundColor: "rgb(134, 85, 28)",
                borderColor: "rgb(134, 85, 28)",
              }} onClick={() => filterCat(3)} 
            >
              Category
            </Button>
            <Button
              style={{
                margin: "10px",
                backgroundColor: "rgb(134, 85, 28)",
                borderColor: "rgb(134, 85, 28)",
              }} onClick={() => filterCat(75)}
            >
              Runner
            </Button>
            <Button
              style={{
                margin: "10px",
                backgroundColor: "rgb(134, 85, 28)",
                borderColor: "rgb(134, 85, 28)",
              }} onClick={() => filterCat(20)}
            >
              Style
            </Button>
            <Button
              style={{
                margin: "10px",
                backgroundColor: "rgb(134, 85, 28)",
                borderColor: "rgb(134, 85, 28)",
              }} onClick={() => filterCat(1)}
            >
              Uncategorized
            </Button>
            <Button
              style={{
                margin: "10px",
                backgroundColor: "rgb(134, 85, 28)",
                borderColor: "rgb(134, 85, 28)",
              }} onClick={() => filterCat(78)}
            >
              Life
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </div>

      <div>
        <Row className="justify-content-md-center">
          <div>
            {post.map((post) => (
              <Postblog key={post.id} post={post} />
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};
