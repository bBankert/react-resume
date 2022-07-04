import React from 'react';
import './loading.scss';

const Loading = () => {
    return(<div className="loading-modal">
                <div className="modal-content">
                    <div className="loader"></div>
                    <p>Loading, Please Wait...</p>
                </div>
            </div>);
}

export default Loading;