import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { } from '../../store/actions/customer';
import { FormComponent } from '../../components/FormComponent/Form'
import { ICustomer, ICustomers } from '../../store/actions/types/actionTypes';

interface IState {
    match: { params: { id: string } }

}

export default class Editdummy extends React.Component<RouteComponentProps & IState> {

    // constructor(props: RouteComponentProps) {
    //     super(props);
    //     this.state = {
    //         id: Number = this.props.match.params.id
    //         // values: [],
    //         // loading: false,
    //         // submitSuccess: false,
    //     }
    // }

    // componentDidMount() {
    //     axios.get(`http://localhost:3004/customers/${this.state.id}`).then(data => {
    //         this.setState({ customer: data.data });
    //     })
    // }

    selectCustomer = useSelector((state:ICustomers) => state.results.find(
        (customer: ICustomer) => customer.id  === this.props.match.params.id 
    ));
    /**
 * Handles Clicks from each Card
 *
 * @memberof Create
 */
    handleEditCustomer = (value: ICustomer) => {
        axios.post(`http://localhost:3004/customers`, value).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ]);
    };



    public render() {
        return (
            <FormComponent customer={this.selectCustomer} onActionClick={this.handleEditCustomer} />
        );

    }
}


// const mapStateToProps = (state: any) => {
// };

// const mapDispatchToProps = {
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Edit);