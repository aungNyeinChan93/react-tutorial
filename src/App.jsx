import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import CardList from './components/CardList';

const App = () => {
    
   
    return (
        <Fragment>
            <div className="app-section">
                <CardList cardTitle="Card Title" cardDescription = "this is description"/>
            </div>
        </Fragment>
    )
};

export default App;
// return React.createElement("section", {}, React.createElement("h1", {}, "hello world"))




