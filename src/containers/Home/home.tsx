import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { fetchCustomer, deleteCustomer } from '../../store/actions/customer';
import { ICustomers, ICustomer } from '../../store/actions/types/actionTypes';
import { GlobalStyle } from '../../components/TableComponent/TableStyledComponent';
import { TableCompoent } from '../../components/TableComponent/Table';

interface IState extends RouteComponentProps {
    fetchCustomer: typeof fetchCustomer,
    deleteCustomer: typeof deleteCustomer,
    results: ICustomer[]
}

class Home extends React.Component<IState> {
    componentDidMount() {
        this.props.fetchCustomer();
    }

    // deleteCustomer: () => {
    //     this.props.deleteCustomer();
    // }

    public render() {
        // return this.props.customerReducer.results.map((customer, index) => {
        return (
            <div>
                <GlobalStyle />
                <TableCompoent {...this.props} customer={this.props.results} />
            </div>
        );
        // })

    }
}


const mapStateToProps = (state: ICustomers) => {

    const { results } = state;
    return { results };
};

const mapDispatchToProps = {
    fetchCustomer,
    deleteCustomer
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);