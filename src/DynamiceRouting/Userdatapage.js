import React from 'react';
import {withRouter} from 'react-router-dom';

function Userdatapage(props) {
    console.log(props.match.params.id)
  return (
    <div>
        Userdatapage
        <br/><hr/>
        <div>
          User id:   -{props.match.params.id}<br/>
          User name: -{props.match.params.name}<br/>
          User name: -{props.match.params.lname} <br/>
          User name: -{props.match.params.contact}<br/>
          User name: -{props.match.params.email}<br/>
        </div> 
    </div>
  )
}

export default withRouter(Userdatapage);