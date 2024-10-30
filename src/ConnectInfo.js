import React, {useState} from 'react';
function ConnectInfo(props) {
    
    const [isJoined, setName] = useState(true);
    const updateName = () => {
        setName(!isJoined);
    }

    return(
        <div className="connect-info" style={{marginTop: "10px"}}>
            <p style={{color:"white", fontSize: "25px", paddingLeft: "10px"}}>{props.groupName}</p>
            <div><button className="btn3" onClick={updateName}>{isJoined ? "Join" : "Joined"}</button></div>
        </div>
    );
}

export default ConnectInfo