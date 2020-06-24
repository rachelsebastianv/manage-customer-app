import React from 'react';
import { ICustomer } from '../../store/actions/types/actionTypes';
import { Input } from '../../components/FormComponent/FormStyledComponent';

interface Props {
    searchText: string;
    setSearchText: (value: string) => void,
    customers: ICustomer[],
    setFilteredCustomers: (customers: ICustomer[]) => void,
}

const CustomerSearch: React.FC<Props> = ({
    searchText,
    setSearchText,
    customers,
    setFilteredCustomers,
}) => (
        <div>
            <Input
                // data-testid="customer-search"
                id="customer-search"
                placeholder="Search by first or last name"
                value={searchText}
                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchText(value);
                    if (value !== '') {
                        const searchResult = customers.filter(
                            (customer: ICustomer) => (
                                // firstName or lastName must begin with the search term
                                customer.first_name.toLowerCase().indexOf(value.toLowerCase()) === 0
                                || customer.last_name.toLowerCase().indexOf(value.toLowerCase()) === 0
                            )
                        );
                        setFilteredCustomers(searchResult);
                    } else {
                        setFilteredCustomers(customers);
                    }
                }}
            />
        </div>
    );

export default CustomerSearch;
