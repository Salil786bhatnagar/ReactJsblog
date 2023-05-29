import React, { Profiler } from 'react';
import './App.css';
import './Custom.css';
import './style.css';
import axios from 'axios';
import Countdata from './Components/Count'
import Sum from './Components/Sum'
import { BrowserRouter as Router, Route } from "react-router-dom";
// parent to child and child to parent 
import Countprops_result from './Components/Countprops_result';
// Axios fetch dynamic data process\
//import DynamicefetchData from './AxiosFetchDataDynamice/Dynamicfetchdata'
import DynamicehData from './AxiosfetchdataDynamice/Dynamicfetchdata'
// controlled and uncontrolled component
import ContrlledUncontrolled from './Controlled_Uncontrolled_Component/Controlled'
//dynamic data get, put, post and delete in react js
import Usergetmethod from './DataGet_Post_Put_Delete/UserGetmethod'
//dynamic post data react js
import UserPostmethod from './DataGet_Post_Put_Delete/UserPostmethod';
// current location in folder using react.js
import CurrentLocation from './Components/UseLocation';
// current date and time in react.js
import CurrentDateTime from './Components/CurrentDateTime'
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
import UseStateUpdateName from './Components/UseState_UpdateName'

// use toggle in react.js
import ToggleData from './Components/ToggleData';

import MapFunction from './Map_Function/Testnested_page'
import ContextApiDemo from './Components/ContextApiDemo';
import Validationpage from './ValidationForm/Validationpage';
import ValidationHook from './ValidationForm/ValidationHookForm'
import ParentPage from './Props_State/ParentPage';
import ChieldPage from './Props_State/ChieldPage';
import Use_Location from './Use_Location/UseLocationPage';
import UseCallbackPage from './UseCallback/UseCallbackPage';
// useReducer

import useReducerPage from './useReducer/useReducerPage';

import ExpotPdfData from './Export_PDF_Data/ExportPdfDataPage'
import DisplayPDF from './Export_PDF_Data/DisplayPDF_FILE'
import PaginationPage from './React_Pagination/PaginationPage'
import PaginationSecondPage from './React_Pagination/PaginationsecondPage'
import PaginationThirdPage from './React_Pagination/PaginationThirdPage'
//import PaginationFourthPage from './Components/React_Pagination/PaginationFourthPage'

import SignIn from './ValidationForm/Signinform';
import Digitalclock_page from './DigitalClock.js/Digitalclock_page';
import Childapp from './Childapp';
import { Audio } from './Audio_And_Video/Audio';
import { Video } from './Audio_And_Video/Video';
import PortalsPage from './Portals/PortalsPage';
import MainContainer from './ContextApi_Folder/MainContainer';
import LineChart from './Chart/LineChart';
import Barchart from './Chart/Barchart';

import Slick_Slider from './SlickSlider/Slider';
import Localization from './ConvertLanguage/Localization';

// Final Reactjs validation for
import ReactFinalValidation from './ValidationForm/ReactFinalValidation'

// Image validation
import Imagevali from './ImageValidation/Imagevali';

// QR Code 
import QR_Codepage from './QR_Code/QR_Codepage';

import Popdata from './Props_State/Pop';
import MomData from './Props_State/Mom'

import Calculator from './Components/Calculator';

// update btn name 

import UpdateBtnName from './UpdateBtnName/BtnNameUpdate'

// React Lazy loading start
const DataTable = React.lazy(() => import('./DataTable/DataTableMUI'));
// end










function App(props) {

  const callbackFun = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }




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
          path="/Calculator"
          component={Calculator}
          exact
          strict
        />

      <Route
          path="/UpdateBtnName"
          component={UpdateBtnName}
          exact
          strict
        />

      <Route
          path="/MomData"
          component={MomData}
          exact
          strict
        />

      <Route
          path="/Popdata"
          component={Popdata}
          exact
          strict
        />

      <Route
          path="/QR_Codepage"
          component={QR_Codepage}
          exact
          strict
        />

        <Route
          path="/Imagevali"
          component={Imagevali}
          exact
          strict
        />

        <Route
          path="/ReactFinalValidation"
          component={ReactFinalValidation}
          exact
          strict
        />

        <Route
          path="/Localization"
          component={Localization}
          exact
          strict
        />

        <Route
          path="/Slick_Slider"
          component={Slick_Slider}
          exact
          strict
        />

        <React.Suspense fallback={<><img src='./img/loding.gif' /></>}>
          <Route
            path="/DataTable"
            exact
            strict>
            <DataTable />
          </Route>
        </React.Suspense>

        <Route
          path="/DynamicehData"
          component={DynamicehData}
          exact
          strict
        />

        <Route
          path="/Barchart"
          component={Barchart}
          exact
          strict
        />

        <Route
          path="/LineChart"
          component={LineChart}
          exact
          strict
        />

        <Route
          path="/MainContainer"
          component={MainContainer}
          exact
          strict
        />

        <Route
          path="/PortalsPage"
          component={PortalsPage}
          exact
          strict
        />

        <Route
          path="/Video"
          component={Video}
          exact
          strict
        />

        <Route
          path="/Audio"
          component={Audio}
          exact
          strict
        />

        <Route
          path="/Childapp"
          component={Childapp}
          exact
          strict
        />

        <Route
          path="/UserPostmethod"
          component={UserPostmethod}
          exact
          strict
          history={props.history}
        />

        <Route
          path="/Pure_component"
          component={Pure_component}
          exact
          strict
          history={props.history}
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

        <Route
          path='/ExpotPdfData'
          component={ExpotPdfData}
          exact
          strict
          history={props.history}
        />
        <Route
          path='/DisplayPDF'
          component={DisplayPDF}
          exact
          strict
          history={props.history}
        />

        <Route
          path='/PaginationPage'
          component={PaginationPage}
          exact
          strict
          history={props.history}
        />

        <Route
          path='/PaginationSecondPage'
          component={PaginationSecondPage}
          exact
          strict
          history={props.history}
        />

        <Route
          path='/PaginationThirdPage'
          component={PaginationThirdPage}
          exact
          strict
          history={props.history}
        />

        {/* <Route
        path='/PaginationFourthPage'
        component={PaginationFourthPage
}
        exact
        strict
        history={props.history}
      /> */}

        {/* graph chart */}

        <Route
          path='/SignIn'
          component={SignIn}
          exact
          strict
          history={props.history}
        />
        {/* React.js Profiler */}
        <Profiler id="customHook" onRender={callbackFun}>
          <Route
            path='/Digitalclock_page'
            component={Digitalclock_page}
            exact
            strict
            history={props.history}
          />
        </Profiler>

      </Router>
    </div>
  );
}

export default App;
