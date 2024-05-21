import React, { Fragment } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import "bootstrap/dist/css/bootstrap.min.css"
import CardList from './components/CardList';
import Counter from './components/Counter';
import UseEffect from "./components/UseEffect"
import GitHubUser from './components/GitHubUser';
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import TodoList from "./components/TodoList"
import ReactRouterDom from './components/ReactRouterDom';
import CustomeHook from './components/CustomeHook';

const App = () => {
    
   
    return (
        <Fragment>

            {/* CustomeHook */}
            <CustomeHook/>

            {/* React Router Section */}
            <ReactRouterDom/>
            
            <div className="app-section">
                <CardList cardTitle="Card Title" cardDescription = "this is description"/>
            </div>

            {/* COunter App / useState_learning Section*/}
            <div className="counter-app" style={{minWidth:"100vw", minHeight:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Counter/>
            </div>

            {/* useEffect Section */}
            <UseEffect/>

            {/* GitHubUser Section */}
            <GitHubUser/>

            {/* UseRef hook section */}
            <UseRef/>

            {/* useReducer Section  */}
            <UseReducer/>

            {/* TodoList Section  */}
            <TodoList/>

            {/* Context hook Section */}
            {/* <UseContext/> */}

            

        </Fragment>
    )
};

export default App;
// return React.createElement("section", {}, React.createElement("h1", {}, "hello world"))




