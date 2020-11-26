import React, {Component} from 'react';

class PageTitleBox extends Component {
    render() {
        return (
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>ABOUT US</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">ABOUT US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTitleBox;
