import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import ClassCompoMenu from './ClassCompoMenu';
import Props from './props';
import PropsExample from '../propsexample/propsexa';
import Listkeys from './Listkeys';


class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                    <Route path="props" element={<PropsExample/>} />
                    <Route path="Listkeys" element={<Listkeys/>} />
                
                        
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoute;