import React, {Component} from 'react';
import MenuItems from "./MenuItems";
import CartItems from "./CartItems";
import {connect} from 'react-redux';

class HomePage extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row justify-content-md-center">
                            <div className="panel panel-primary">
                                <div className="panel-body">
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="panel panel-primary">
                                            <div className="panel-body">
                                                <div className="panel-heading">
                                                    <div className="container-fluid">
                                                        <div className="row justify-content-md-center">
                                                                <h2 className="text-center">Menu</h2>
                                                        </div>
                                                        <div className="row justify-content-md-center">
                                                            <div className="card-body">
                                                                {console.log(this.props.stateArray.inventory)}
                                                                {
                                                                    this.props.stateArray.inventory.map((item,index) => {
                                                                        return(
                                                                            <MenuItems
                                                                                key={index}
                                                                                item={item}
                                                                            />
                                                                        );
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="panel panel-primary">
                                            <div className="panel-body">
                                                <div className="panel-heading">
                                                    <div className="container-fluid">
                                                        <div className="row justify-content-md-center">
                                                            <h2 className="text-center">Order</h2>
                                                        </div>
                                                        <div className="row justify-content-md-center">
                                                            <div className="card-body">
                                                                <CartItems />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <label className="h1 control-label">Total: {this.props.stateArray.total.totalvalue} <span>&#8377;</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(stateArray) {
    console.log(stateArray);
    return {stateArray};
}


export default connect(mapStateToProps, null)(HomePage);