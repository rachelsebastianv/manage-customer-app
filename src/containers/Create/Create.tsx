import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { FormComponent } from '../../components/FormComponent/Form'
import { Customer } from '../../store/actions/types/actionTypes';
import { addCustomer } from '../../store/actions/customerActions';

interface CreateProps extends RouteComponentProps {
    addCustomer: typeof addCustomer
}

class Create extends React.Component<CreateProps> {

    handleAddCustomer = (customer: Customer) => {
        this.props.addCustomer(customer);
        setTimeout(() => {
            this.props.history.push('/');
        }, 600);
    };

    public render() {
        return (
            <FormComponent onActionClick={this.handleAddCustomer} />
        );

    }
}

const mapDispatchToProps = {
    addCustomer
}

export default connect(
    null,
    mapDispatchToProps
)(Create);
