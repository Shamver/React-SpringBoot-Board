import '../webapp/css/custom.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button , Table, Input, Col, Row} from 'reactstrap';

class MainPage extends React.Component {

    render() {
        return(
            <React.Fragment>
                    <div className="main">메인 페이지</div>
                    <form action="/testInsert" method="POST">
                        <Row>
                            <Col xs="4">
                                <Input name="name" placeholder="이름"></Input>
                            </Col>
                            <Col xs="4">
                                <Button type="submit" color="primary">삽입</Button>
                            </Col>
                        </Row>
                    </form>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<MainPage/>, document.getElementById('root'));