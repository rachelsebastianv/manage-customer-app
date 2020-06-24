import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchCustomer, deleteCustomer } from '../../store/actions/customerActions';
import { State } from '../../store/actions/types/actionTypes';
import { GlobalStyle } from '../../components/TableComponent/TableStyledComponent';
import { TableComponent } from '../../components/TableComponent/Table';
import CustomerSearch from './CustomerSearch';

interface HomeProps {
    fetchCustomer: typeof fetchCustomer,
    deleteCustomer: typeof deleteCustomer
}

const Home: React.FC<HomeProps> = ({ fetchCustomer, deleteCustomer }) => {
    const [searchText, setSearchText] = React.useState('');
    const customers = useSelector((state: State) => state.results);

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
                createCustomerSubset={setCustomerSubset}
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