import * as React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { } from '../../store/actions/customer';
import { FormComponent } from '../../components/FormComponent/Form'
import { ICustomer, ICustomers } from '../../store/actions/types/actionTypes';

interface IState {
    match: { params: { id: string } }

}

const Edit: React.FC<RouteComponentProps & IState> = (
    {
        history, match: { params: { id }, }
    }) => {


    const selectCustomer = useSelector((state: ICustomers) => {
        console.log('state', state);
        return state.results.find(
            (customer: ICustomer) => customer.id == id
        )
    });

    

    const handleEditCustomer = (value: ICustomer) => {
        axios.patch(`http://localhost:3004/customers/${id}`, value).then(data => {
            setTimeout(() => {
                history.push('/');
            }, 1500)
        })

    }

    if (selectCustomer) {
        return (<FormComponent customer={selectCustomer} onActionClick={handleEditCustomer} />)
    }

    return (<div></div>)



}

export default Edit;