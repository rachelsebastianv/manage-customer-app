import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { RouteProps } from 'react-router';
import axios from 'axios';
import { ICustomers, ICustomer } from '../../store/actions/types/actionTypes'


interface Props extends RouteProps {
    customer: ICustomer[]
    // type: string,
    // onActionClick: ((actionType: string, property: Property) => void)
    // actionButton: booleans
}
export const TableCompoent: React.FC<RouteComponentProps & Props> = ({ history, customer }) => {

    const deleteCustomer = (id: number) => {
        axios.delete(`http://localhost:3004/customers/${id}`).then(data => {
            history.push('/');
        })
    }

    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Actions</th>
            </tr>
            {
                // Object.values(customer.results).map((customer:any, index) => {
                customer.map((customer: any, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{customer.first_name}</td>
                            <td>{customer.last_name}</td>
                            <td>{customer.dob}</td>
                            <td>

                                <div>
                                    <div>
                                        <Link to={`edit/${customer.id}`}>Edit Customer </Link>
                                        <button onClick={() => deleteCustomer(customer.id)}>Delete Customer</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    );
                })}
        </table>
    )
};

