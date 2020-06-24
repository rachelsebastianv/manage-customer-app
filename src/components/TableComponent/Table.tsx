import React from 'react';
import { Link } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { ICustomer } from '../../store/actions/types/actionTypes'
import { deleteCustomer } from '../../store/actions/customer';
import { Button } from "../FormComponent/FormStyledComponent";

interface Props extends RouteProps {
    customer: ICustomer[],
    deleteCustomer: typeof deleteCustomer
}

export const TableComponent: React.FC<Props> = ({ customer, deleteCustomer }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {
                customer.map((customer: any, index: number) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.dob}</td>
                                <td>

                                    <div>
                                        <div>
                                            <Link to={`edit/${customer.id}`}>Edit Customer </Link>
                                            <Button onClick={() => {
                                                if (window.confirm(`Delete '${customer.first_name} ${customer.last_name}' from customers?`)) {
                                                    deleteCustomer(customer.id);
                                                }
                                            }}>Delete Customer</Button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
        </table>
    )
};

