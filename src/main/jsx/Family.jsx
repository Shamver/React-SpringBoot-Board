import React from 'react';
import {Input,Button} from "reactstrap";
import axios from "axios";

class Family extends React.Component {

    state = {
        name : this.props.name,
        relShip : this.props.relShip,
        modifyOn : false
    };

    onModify = () => {
        axios.post('/family/update', {
            name : this.state.name,
            relShip : this.state.relShip,
            id : this.props.id
        })
            .then( response => {
                alert("바뀌었다 씹새야.");
            })
            .catch( response => {
                console.log(response);
            });
    };

    onDelete = () => {
        axios.post('/family/delete', {
            id : this.props.id
        })
            .then( response => {
                this.props.getFamilyList();
                alert("삭제됐다 씹새야.");

            })
            .catch( response => {
                console.log(response);
            });
    };

    changeModify = () => {
        if(this.state.modifyOn){
            this.onModify();
        }

        this.setState({
            modifyOn : !this.state.modifyOn
        })
    };

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    render(){
     const { id , name , relShip } = this.state;

        if(this.state.modifyOn){
            return (
                <tr key={id}>
                    <td width="400"><Input value={name} name="name" onChange={this.onChange}/></td>
                    <td width="400">
                        <Input type="select" value={relShip} name="relShip" onChange={this.onChange}>
                            <option value="">선택하세요.</option>
                            <option value="부">부</option>
                            <option value="모">모</option>
                            <option value="형제">형제</option>
                            <option value="자매">자매</option>
                            <option value="남매">남매</option>
                        </Input>
                    </td>
                    <td><Button color="warning"  onClick={this.changeModify}>적용</Button></td>
                    <td><Button color="danger" onClick={this.onDelete}>삭제</Button></td>
                </tr>
            )
        }else {
            return (
                <tr key={id}>
                    <td width="400">{name}</td>
                    <td width="400">{relShip}</td>
                    <td><Button color="warning" onClick={this.changeModify}>수정</Button></td>
                    <td><Button color="danger" onClick={this.onDelete}>삭제</Button></td>
                </tr>
            )
        }
    }

}

export default Family;