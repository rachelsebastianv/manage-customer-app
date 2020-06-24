import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchCustomer, deleteCustomer } from '../../store/actions/customer';
import { ICustomers, ICustomer } from '../../store/actions/types/actionTypes';
import { GlobalStyle } from '../../components/TableComponent/TableStyledComponent';
import { TableComponent } from '../../components/TableComponent/Table';
import CustomerSearch from './CustomerSearch';

interface IState {
    fetchCustomer: typeof fetchCustomer,
    deleteCustomer: typeof deleteCustomer,
    results: ICustomer[]
}

const Home: React.FC<IState> = ({ fetchCustomer, deleteCustomer, results }) => {
    const [searchText, setSearchText] = React.useState('');
    const customers = useSelector((state: ICustomers) => state.results);

    const [customerSubset, setCustomerSubset] = React.useState(customers);

    React.useEffect(() => {
        fetchCustomer();
    },[])

    React.useEffect(() => {
        setCustomerSubset(customers);
    }, [customers])

    return (
        <div>
            <CustomerSearch
                searchText={searchText}
                setSearchText={setSearchText}
                customers={customers}
                setFilteredCustomers={setCustomerSubset}
            />
            <GlobalStyle />
            <TableComponent deleteCustomer={deleteCustomer} customer={customerSubset} />
        </div>
    );
}

const mapDispatchToProps = {
    fetchCustomer,
    deleteCustomer
}

export default connect(
    null,
    mapDispatchToProps
)(Home);