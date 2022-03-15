// import { useEffect, useState } from "react";
import { useRestAPI } from "../contexts/RestAPIsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Stack } from "react-bootstrap";

export const Author = () => {
  const { authors, posts } = useRestAPI();
  return (
    <Container>
      <Row className="justify-content-center">
        <Stack direction="horizontal" className=" mx-auto" gap={3}>
          {authors?.map((author) => (
            <>
              <div
                style={{
                  width: "250px",
                  borderRadius: "20px",
                  margin: "25px 0",
                  border: "2px solid hsl(0, 0%, 0%, .25)",
                  padding: "20px",
                  transition: "transform .1s",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    margin: "25px 0",
                  }}
                >
                  <Row>
                    <Col></Col>
                    <Col md="auto">
                      <img
                        style={{
                          borderRadius: "50%",
                          margin: "25px 0",
                        }}
                        src={author.avatar_urls["96"]}
                        alt="img"
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col md="auto">
                      <h5>{author.name}</h5>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col md="auto">
                      <span>{author.slug}</span>
                    </Col>
                    <Col></Col>
                  </Row>

                  <hr />
                  <Row>
                    <Col></Col>
                    <Col md="auto">
                      <span>
                        Posts item :{" "}
                        {
                          posts?.filter((post) => post.author === author.id)
                            .length
                        }
                      </span>
                    </Col>
                    <Col></Col>
                  </Row>
                </div>
              </div>
            </>
          ))}
        </Stack>
      </Row>
    </Container>
  );
};
