import React from 'react';
import { Customer } from '../../store/actions/types/actionTypes';
import { Input } from '../../components/FormComponent/FormStyledComponent';

interface CustomerSearchProps {
    searchText: string;
    setSearchText: (value: string) => void,
    customers: Customer[],
    createCustomerSubset: (customers: Customer[]) => void,
}

const CustomerSearch: React.FC<CustomerSearchProps> = ({
    searchText,
    setSearchText,
    customers,
    createCustomerSubset,
}) => (
        <div>
            <Input
                id="customer-search"
                placeholder=" Search by first or last name"
                value={searchText}
                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchText(value);
                    if (value !== '') {
                        const searchResult = customers.filter(
                            (customer: Customer) => (
                                customer.first_name.toLowerCase().indexOf(value.toLowerCase()) === 0
                                || customer.last_name.toLowerCase().indexOf(value.toLowerCase()) === 0
                            )
                        );
                        createCustomerSubset(searchResult);
                    } else {
                        createCustomerSubset(customers);
                    }
                }}
            />
        </div>
    );

export default CustomerSearch;
