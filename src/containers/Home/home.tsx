import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { fetchCustomer } from '../../store/actions/customer';
import { ICustomers } from '../../store/actions/types/actionTypes';

interface IState extends RouteComponentProps {
    fetchCustomer: typeof fetchCustomer,
    customerReducer: ICustomers
}

class Home extends React.Component<IState> {
    constructor(Props: any) {
        super(Props);
    }

    componentDidMount() {
        this.props.fetchCustomer();
    }

    public render() {
        return this.props.customerReducer.results.map((customer, index) => {
            return (
                <div>{customer.first_name}</div>
            );
        })

    }
}


const mapStateToProps = (state: any) => {

    const { customerReducer } = state;;
    return { customerReducer };
};

const mapDispatchToProps =  {
    fetchCustomer
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);