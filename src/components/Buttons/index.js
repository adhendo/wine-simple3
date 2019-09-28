import React from 'react';

const btnStyle = {
    color:'#3D9636',
    backgroundColor:'white'
}
function Button(props) {
    return <button className="btn-light btn-lg" style={btnStyle}>{props.title}</button>

}

export default Button;