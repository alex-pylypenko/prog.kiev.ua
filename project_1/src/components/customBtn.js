import React from 'react';
import Moment from 'moment';
import 'moment-timezone';


let saySmth = function (e) {
    alert(123, e);
};

let date = new Date();

function CustomBtn() {
    return (
        <React.Fragment>
            <button className="custom-btn"
                onClick={saySmth}>Submit</button>
            <input id="date" type="date" value={date}/>
            <input id="date" type="text" value={date}/>
        </React.Fragment>
    );
}

export default CustomBtn;