import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './common componet/Header';

const Example = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row my-3">
                    <div className="col-6">
                        <Link to="classcomponent">Class Component</Link>
                    </div>
                    <div className="col-6">
                        <Link to="functioncomponent">Functional Component</Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Example;