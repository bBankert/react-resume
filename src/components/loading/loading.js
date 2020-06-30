import React from 'react';
import $ from 'jquery';
import './loading.css';

class Loading extends React.Component {

    componentDidMount(){
        $('#loadingModal').modal('show');
    }

    componentWillUnmount(){
        $('#loadingModal').modal('hide');
    }



    render(){
        return(<div id="loading" className="col-md-6 offset-md-3 col-sm-12">
            <div className="modal" id="loadingModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="loader"></div>
                            <p>Loading, Please Wait...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Loading;