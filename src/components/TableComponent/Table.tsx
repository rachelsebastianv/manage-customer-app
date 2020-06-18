import React from 'react';
import { Link } from 'react-router-dom';
import { ICustomers, ICustomer } from '../../store/actions/types/actionTypes'
import { RouteProps } from 'react-router';

interface Props extends RouteProps {
    customer: ICustomers
    // type: string,
    // onActionClick: ((actionType: string, property: Property) => void)
    // actionButton: booleans
  }
export const TableCompoent: React.FC<Props> = ({customer}) => (
    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Actions</th>
        </tr>
        {
        // Object.values(customer.results).map((customer:any, index) => {
            customer.results.map((customer: any, index: number) => {
            return (
                <tr key={index}>
                    <td>{customer.first_name}</td>
                    <td>{customer.last_name}</td>
                    <td>{customer.dob}</td>
                    <td>

                    <div>
                            <div>
                                <Link to={`edit/${customer.id}`}>Edit Customer </Link>
                                <button>Delete Customer</button>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        })}
    </table>
);

                        // {/* <div className="d-flex justify-content-between align-items-center">
                        //     <div className="btn-group" style={{ marginBottom: "20px" }}>
                        //         <Link to={`edit/${customer.id}`} className="btn btn-sm btn-outline-secondary">Edit Customer </Link>
                        //         {/* <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(customer.id)}>Delete Customer</button> */}
                        //         </div>
                        //     </div> */}

