import { Badge, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { time_passed_str } from "../../../helppers/time_formatter";
import UserComponent from "../../../helppers/UserComponent";

export default function PostListItem({post})
{
    return (
        <Card>
            <Card.Header className="bg-dark" style={{color: '#ffffffee'}}>
                {post.cached_vote_count > 0 && <Badge bg="success" style={{marginRight: "1em"}}>+{post.cached_vote_count}</Badge>}
                {post.cached_vote_count < 0 && <Badge bg="danger" style={{marginRight: "1em"}}>{post.cached_vote_count}</Badge>}
                {post.cached_vote_count == 0 && <Badge bg="secondary" style={{marginRight: "1em"}}>{post.cached_vote_count}</Badge>}
                <Link to={`/post/${post._id}`}>{post.title}</Link>
            </Card.Header>
            <Card.Body style={{'backgroundColor': '#eeeeee55'}}>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <Card.Text>
                                {post.text}
                            </Card.Text>
                        </Col>
                        <Col sm={4} style={{'marginTop': '1em'}}>
                            <Row>
                                <Col md={{offset: 2}} >
                                    <UserComponent username={post.user.username} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{offset: 2}} style={{fontSize: '0.8em'}}>
                                    Created {time_passed_str(post.createdAt)}
                                </Col>
                            </Row>
                            { post.edit_user && <>
                            <Row>
                                <Col md={{offset: 2}} >
                                    <UserComponent username={post.edit_user.username} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{offset: 2}} style={{fontSize: '0.8em'}}>
                                    Edited {time_passed_str(post.editedAt)}
                                </Col>
                            </Row>
                            </>
                            }
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}