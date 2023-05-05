import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class FunctionCompoMenu extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="col-6 offset-6">

                <ul>
                    <li><Link to="UseState">UseState</Link></li>
                    <li><Link to="UseEffect">UseEffect</Link></li>
                    <li><Link to="Apifetch">Apifetch</Link></li>
                    <li><Link to="UseMemo">UseMemo</Link></li>
                    <li><Link to="UseRef">UseRef</Link></li>
                </ul>
                </div>
            </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default FunctionCompoMenu;