import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import CardList from './components/CardList';
import Counter from './components/Counter';

const App = () => {
    
   
    return (
        <Fragment>
            <div className="app-section">
                <CardList cardTitle="Card Title" cardDescription = "this is description"/>
            </div>

            {/* COunter App / useState_learning */}
            <div className="counter-app" style={{minWidth:"100vw", minHeight:"100vh"}}>
                <Counter/>
            </div>
        </Fragment>
    )
};

export default App;
// return React.createElement("section", {}, React.createElement("h1", {}, "hello world"))




