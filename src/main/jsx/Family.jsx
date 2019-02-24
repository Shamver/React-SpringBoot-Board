import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Family extends React.Component {

    state={
        isInput: false,
        name: "",
        relShip: ""
    };

    componentWillMount(){
        this.setState({
            name: this.props.name,
            relShip: this.props.relShip
        })
    }

    updateFamily = () => {
        if(this.valueCheck()){
            return;
        }
        Axios.post("/family/insert", {
            name: this.state.name,
            relShip: this.state.relShip
        })
            .then((data) => {
                if(data.data){
                    this.getFamily();
                } else {
                    alert("오류남 씨빨");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    valueChange = (e) => {

        this.setState ({
            [e.target.name] : e.target.value
        });
    }

    valueCheck = () => {
        if(!this.state.name){
            alert("이름 쳐 넣어라");
            return true;
        }
        if(!this.state.relShip){
            alert("관계 선택해라");
            return true;
        }

        return false;
    }

    toggleUpdate = () => {
        if(this.state.isInput){
            if(this.valueCheck()){
                return;
            }
            Axios.post("/family/update", {
                id: this.props.id,
                name: this.state.name,
                relShip: this.state.relShip
            })
                .then((data) => {
                    if(data.data){
                        this.props.getFamily();
                    } else {
                        alert("오류남 씨빨");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        this.setState ({
            isInput: !this.state.isInput
        })
    }

    onDelete = () => {
        if(confirm("삭제할거냐?")){
            Axios.post("/family/delete", {
                id: this.props.id,
            })
                .then((data) => {
                    if(data.data){
                        this.props.getFamily();
                    } else {
                        alert("오류남 씨빨");
                    }  
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {
        const {name, relShip} = this.props;

        if(this.state.isInput){
            return (
                <tr>
                    <td><input type="text" name="name" value={this.state.name} onChange={this.valueChange} /></td>
                    <td><select name="relShip" value={this.state.relShip} onChange={this.valueChange}>
                        <option value="">선택하세요.</option>
                        <option value="부">부</option>
                        <option value="모">모</option>
                        <option value="자매">자매</option>
                        <option value="형제">형제</option>
                        <option value="남매">남매</option>
                    </select></td>
                    <td><button onClick={this.toggleUpdate}>수정</button></td>
                    <td><button onClick={this.onDelete}>삭제</button></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.relShip}</td>
                    <td><button onClick={this.toggleUpdate}>수정</button></td>
                    <td><button onClick={this.onDelete}>삭제</button></td>
                </tr>
            )
        }
    }

}

export default Family;