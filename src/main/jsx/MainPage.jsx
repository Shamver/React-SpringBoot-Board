import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div className="main">메인 페이지</div>
                <form action="/testInsert" method="POST">
                    <input name="name" placeholder="이름"></input>
                    <input type="submit" value="삽입"></input>
                </form>
            </React.Fragment>

        )

    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));