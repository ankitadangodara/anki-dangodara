import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="props">props</Link></li>
                    <li><Link to="Listkeys">Listkeys</Link></li>
               
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;