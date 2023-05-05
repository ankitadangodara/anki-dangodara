import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import UseState from './UseState';
import UseEffect from './UseEffect';
import Apifetch from './Apifetch';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu/>}>
                        <Route path="UseState" element={<UseState/>} />
                        <Route path="UseEffect" element={<UseEffect/>} />
                        <Route path="Apifetch" element={<Apifetch/>} />
                        <Route path="UseMemo" element={<UseMemo/>} />
                        <Route path="UseRef" element={<UseRef/>} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;