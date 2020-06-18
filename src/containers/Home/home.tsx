import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { fetchCustomer } from '../../store/actions/customer';
import { ICustomers } from '../../store/actions/types/actionTypes';
import { GlobalStyle } from '../../components/TableComponent/TableStyledComponent';
import { TableCompoent } from '../../components/TableComponent/Table';

interface IState extends RouteComponentProps {
    fetchCustomer: typeof fetchCustomer,
    customerReducer: ICustomers
}

class Home extends React.Component<IState> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCustomer();
    }

    public render() {
        // return this.props.customerReducer.results.map((customer, index) => {
        return (
            <div>
                <GlobalStyle />
                <TableCompoent customer = {this.props.customerReducer}/>
            </div>
        );
        // })

    }
}


const mapStateToProps = (state: any) => {

    const { customerReducer } = state;;
    return { customerReducer };
};

const mapDispatchToProps = {
    fetchCustomer
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);