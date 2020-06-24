import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { } from '../../store/actions/customerActions';
import { FormComponent } from '../../components/FormComponent/Form'
import { Customer, State } from '../../store/actions/types/actionTypes';
import { editCustomer } from '../../store/actions/customerActions';


interface EditProps {
    match: { params: { id: string } },
    editCustomer: typeof editCustomer
}

const Edit: React.FC<RouteComponentProps & EditProps> = (
    {
        history, match: { params: { id }, },
        editCustomer
    }) => {


    const selectCustomer = useSelector((state: State) => {
        console.log('state', state);
        return state.results.find(
            (customer: Customer) => customer.id == id
        )
    });

    const handleEditCustomer = (customer: Customer) => {
        editCustomer(customer);
        setTimeout(() => {
            history.push('/');
        }, 600);
    };

    if (selectCustomer) {
        return (<FormComponent customer={selectCustomer} onActionClick={handleEditCustomer} />)
    }

    return (<div></div>)
}

const mapDispatchToProps = {
    editCustomer
}

export default connect(
    null,
    mapDispatchToProps
)(Edit);
