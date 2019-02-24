import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Family from './Family.jsx';

class FamilyPage extends React.Component {

    state = {
        family: [],
        name: "",
        relShip: ""
    }

    componentWillMount(){
        this.getFamily();
    }

    insertFamily = () => {
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

    getFamily= () => {
        Axios.post("/family/get")
            .then((data) => {
                this.setState({
                    family: data.data,
                    name: "",
                    relShip: ""
                })
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


    render() {
        const familyList = () => (
            this.state.family.map(data => (
                <Family
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    relShip={data.relShip}
                    getFamily={this.getFamily}
                />
            ))
        )

        return (
            <React.Fragment>
                <div>
                    FAMILY PAGE
                </div>

                <hr />

                <form>
                    <span>이름: </span>
                    <input type="text" name="name" value={this.state.name} onChange={this.valueChange} />
                    <span>관계: </span>
                    <select name="relShip" value={this.state.relShip} onChange={this.valueChange}>
                        <option value="">선택하세요.</option>
                        <option value="부">부</option>
                        <option value="모">모</option>
                        <option value="자매">자매</option>
                        <option value="형제">형제</option>
                        <option value="남매">남매</option>
                    </select>
                    <button type="button" onClick={this.insertFamily}>등록</button>
                </form>

                <table border="1" style={{textAlign: 'center'}}>
                    <thead style={{borderBottom: '1px solid'}}>
                        <tr>
                            <td>이름</td>
                            <td>관계</td>
                            <td colSpan="2">액션</td>
                        </tr>
                    </thead>
                    <tbody>
                        {familyList()}
                    </tbody>
                </table>


            </React.Fragment>
        )
    }

}

ReactDOM.render(<FamilyPage/>, document.getElementById('root'));