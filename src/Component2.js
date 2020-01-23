import React from 'react';

function Component2(props){

    return(
        <div>
            
            First name:<br/>
            <input type="text" name="firstname" onChange={(e) => props.setname(e)}/><br/>
            
            Last name:<br/>
            <input type="text" name="lastname" onChange={(e) => props.setname(e)}/><br/>

            <button type="button" onClick={()=>props.submit()}>SUBMIT</button>
            {props.s.flag &&<div>
                                <p>First Name : {props.s.firstname}</p>
                                <p>Last Name : {props.s.lastname}</p>
                            </div>}
        </div>
    )
}

export default Component2 ;