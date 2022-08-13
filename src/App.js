import './App.css';
import './Custom.css';
import axios from 'axios';
import Countdata from './Component/Count'
import Sum from './Component/Sum'
import { BrowserRouter as Router, Route } from "react-router-dom";
// parent to child and child to parent 
import Countprops_result from './Component/Countprops_result';
// Axios fetch dynamic data process\
import DynamicefetchData from './AxiosFetchDataDynamice/Dynamicfetchdata'
// controlled and uncontrolled component
import ContrlledUncontrolled from './Controlled_Uncontrolled_Component/Controlled'
//dynamic data get, put, post and delete in react js
import Usergetmethod from './DataGet_Post_Put_Delete/UserGetmethod'
//dynamic post data react js
import UserPostmethod from './DataGet_Post_Put_Delete/UserPostmethod';
// current location in folder using react.js
import CurrentLocation from './Component/UseLocation';
// current date and time in react.js
import CurrentDateTime from './Component/CurrentDateTime'
// use to promis and await in react.js
import Promissmethod from './Promis_await/Promisprocess';
// use to pure component in using react.js
import Pure_component from './UseMemo_and_Pure_Component/Use_pure_component';
// fetch api and axio api call
import FetchApi from './Fetch_Axios_API/Fetch_api'
import AxiosApi from './Fetch_Axios_API/Axios_api'

// use to link a page
import LinkMenu from './Link_Contain/LinkMenu';
import Promisprocess from './Promis_await/Promisprocess';
// useState update name
import UseStateUpdateName from './Component/UseState_UpdateName'

// use toggle in react.js
import ToggleData from './Component/ToggleData';

import MapFunction from './Map_Function/Testnested_page'
import ContextApiDemo from './Component/ContextApiDemo';
import Validationpage from './ValidationForm/Validationpage';
import ValidationHook from './ValidationForm/ValidationHookForm'
import ParentPage from './Props_State/ParentPage';
import ChieldPage from './Props_State/ChieldPage';
import Use_Location from './Use_Location/UseLocationPage';
import UseCallbackPage from './UseCallback/UseCallbackPage';
// useReducer

import useReducerPage from './useReducer/useReducerPage';

function App(props) {
  return (
    <div className="App">
     {/* <Countdata/> */}
     {/* <Countprops_result/> */}
     {/* <Sum/> */}
     {/* <DynamicefetchData/> */}
     {/* <ContrlledUncontrolled/> */}
     {/* <Usergetmethod/>
     <UserPostmethod/> */}
     {/* <CurrentLocation/> */}
     {/* <CurrentDateTime/> */}
     {/* <Promissmethod/> */}
     {/* <Pure_component/> */}
     <Router>
       <Route
         path="/Pure_component"
         component={Pure_component}
         exact
         strict
       />
      <Route
         path="/FetchApi"
         component={FetchApi}
         exact
         strict
         history={props.history}
       />
      <Route
         path="/AxiosApi"
         component={AxiosApi}
         exact
         strict
         history={props.history}
       />
       <Route
        path="/LinkMenu"
        strict
        exact
        component={LinkMenu}
        history={props.history}
       />
      <Route
        path='/UseStateUpdateName'
        strict
        exact
        component={UseStateUpdateName}
        history={props.history}
      /> 
      <Route
        path='/ToggleData'
        component={ToggleData}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/MapFunction'
        component={MapFunction}
        exact
        strict
        history={props.history}
      />

       <Route
        path='/ContextApiDemo'
        component={ContextApiDemo}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/Validationpage'
        component={Validationpage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/ValidationHook'
        component={ValidationHook}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/ParentPage'
        component={ParentPage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/ChieldPage'
        component={ChieldPage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/Use_Location'
        component={Use_Location}
        exact
        strict
        history={props.history}
      />

     <Route
        path='/UseCallbackPage'
        component={UseCallbackPage}
        exact
        strict
        history={props.history}
      />

      <Route
        path='/useReducerPage'
        component={useReducerPage}
        exact
        strict
        history={props.history}
      />

     </Router>
    </div>
  );
}

export default App;
