import React, {Component} from 'react';
import Record from '../components/Record';
import './index.css';

class RegForm extends Component{
    render = () => {
        return <div className='reg-form-container'>
            <div className="Title">Personal Information</div>
            <Record />
        </div>
    }
}
export default RegForm;