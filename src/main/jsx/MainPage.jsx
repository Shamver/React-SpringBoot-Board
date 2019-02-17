import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MainPage extends React.Component {

    state={
        name : "",
        relShip : "",
        familyList : []
    }


    componentWillMount() {
        this.getFamilyList();
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

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
    }

    valiCheck = () => {
        if(!this.state.relShip){
            alert("관계를 선택해주세요.");
            return true;
        }

        if(!this.state.name){
            alert("이름을 입력해주세요.")
            return true;
        }
    }

    addFamily = () => {
        if(this.valiCheck()){
            return true;
        }


        axios.post('/family/add', {
            name : this.state.name,
            relShip : this.state.relShip
        })
            .then( response => {
                this.getFamilyList();
            })
            .catch( response => {
                console.log(response);
            });
    }



    render() {
            const list = this.state.familyList.map(data=> (
                <tr>
                    <td>{data.name}</td>
                    <td>{data.relShip}</td>
                </tr>
            ))

        return(
            <React.Fragment>
                <div className="main">메인 페이지</div>
                <form action="/testInsert" method="POST">
                    <input name="name" placeholder="이름"></input>
                    <input type="submit" value="삽입"></input>
                </form>

                <hr/>
                <h1>가족 관계도</h1>

                <div>
                    <input type="text" name="name" placeholder="가족의 이름을 입력해주세요." onChange={this.onChange}></input>
                    <select name="relShip" onChange={this.onChange}>
                        <option value="">선택하세요.</option>
                        <option value="부">부</option>
                        <option value="모">모</option>
                        <option value="형제">형제</option>
                        <option value="자매">자매</option>
                        <option value="남매">남매</option>
                    </select>
                    <button onClick={this.addFamily}>추가</button>
                </div>


                <table border="1">
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>관계</th>
                        </tr>
                    </thead>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </React.Fragment>

        )

    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));