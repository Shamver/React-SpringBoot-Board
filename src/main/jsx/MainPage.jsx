import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    MAIN PAGE
                </div>
                <form action="/baselist" method="post">
                    <button type="submit">가져와</button>
                </form>
            </React.Fragment>
        )
    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));