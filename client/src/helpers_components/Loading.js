import React from 'react';
import ReactLoading from 'react-loading';


const Loading = () => {
    return (
        <div className="text-center" style={{ margin: "auto" }} >
            <ReactLoading type="bars" color="gray" height={374} width={150} />
        </div>
    );
}

export default Loading;