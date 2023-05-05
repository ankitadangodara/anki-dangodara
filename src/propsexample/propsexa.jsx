import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChildClassProps from './childexa';

class Propsexa extends Component {
    render(props) {
        return (
            <>
                <div className="class-content mt-2 border-top">
                    <div className='d-flex justify-content-between align-items-center border-bottom'>
                        <h5 className='text-dark py-2 fw-bold'>Props Example:</h5>
                        <Link to="../props" className='btn btn-secondary fw-bold'>Back</Link>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-6'>
                            <ChildClassProps title="1st Card"></ChildClassProps>
                        </div>
                        <div className='col-md-6'>
                            <ChildClassProps title="2nd Card"></ChildClassProps>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Propsexa;