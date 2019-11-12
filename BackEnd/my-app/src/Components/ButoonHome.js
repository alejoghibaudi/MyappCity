import React from 'react';
import {Link} from 'react-router-dom';

function BotonHome(){
    return(
        <Link to="/Home" className="link"><button className="ButonHome"></button></Link>
    )
}

export default BotonHome;