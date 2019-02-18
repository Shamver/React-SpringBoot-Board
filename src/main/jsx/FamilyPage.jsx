import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button , Table, Input, Col, Row} from 'reactstrap';

class MainPage extends React.Component {

    state={
        id : "",
        name : "",
        relShip : "",
        familyList : []
    };


    componentWillMount() {
        this.getFamilyList();
    };

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    getFamilyList = () => {
        axios.post('/family/list', {
        })
            .then( response => {
                this.setState({
                    familyList : response.data
                });
            })
            .catch( response => {
                console.log(response);
            });
    };

    valiCheck = () => {
        if(!this.state.relShip){
            alert("관계를 선택해주세요.");
            return true;
        }

        if(!this.state.name){
            alert("이름을 입력해주세요.");
            return true;
        }
    };

    addFamily = () => {
        if(this.valiCheck()){
            return true;
        }


        axios.post('/family/add', {
            name : this.state.name,
            relShip : this.state.relShip
        })
            .then( response => {

                if(response.data > 0){
                    this.setState({
                        id : "",
                        name : "",
                        relShip : ""
                    })

                    this.getFamilyList();
                    return;
                }
                alert("오류");
            })
            .catch( response => {
                console.log(response);
            });
    }



    render() {
        const list = this.state.familyList.map(data=> (
            <tr key={data.id}>
                <td className="d-none"><Input type="hidden" value={data.id}></Input></td>
                <td>{data.name}</td>
                <td>{data.relShip}</td>
            </tr>
        ))

        return(
            <React.Fragment>
                <div className="p-3" style={{margin:"0 auto",width : "1050px"}}>
                    <h1>가족 관계도</h1>

                    <Row className="p-2">
                        <Col xs="5"><Input type="text" name="name" placeholder="가족의 이름을 입력해주세요." value={this.state.name} onChange={this.onChange}></Input></Col>
                        <Col xs="5">
                            <Input type="select" name="relShip" value={this.state.relShip} onChange={this.onChange}>
                                <option value="">선택하세요.</option>
                                <option value="부">부</option>
                                <option value="모">모</option>
                                <option value="형제">형제</option>
                                <option value="자매">자매</option>
                                <option value="남매">남매</option>
                            </Input>
                        </Col>
                        <Col xs="2"><Button color="primary" onClick={this.addFamily}>추가</Button></Col>
                    </Row>


                    <Table striped>
                        <thead>
                        <tr>
                            <th>이름</th>
                            <th>관계</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list}
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>

        )

    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));