import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { } from '../../store/actions/customer';
import { FormComponent } from '../../components/FormComponent/Form'
import { ICustomer } from '../../store/actions/types/actionTypes';

interface IState extends RouteComponentProps {

}

class Create extends React.Component<IState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            customer: {},
            // values: [],
            // loading: false,
            // submitSuccess: false,
        }
    }

    // componentDidMount() {

    //     if(this.props.match.params){
    //         axios.get(`http://localhost:3004/customers/${this.props.match.params.id}`).then(data => {
    //             this.setState({ customer: data.data });
    //         })
    //     } else {
    //         this.setState({ customer: null });
    //     }

    // }

    /**
 * Handles Clicks from each Card
 *
 * @memberof Create
 */
    handleAddCustomer = (value: ICustomer) => {
        axios.post(`http://localhost:3004/customers`, value).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ]);
    };



    public render() {
        return (
            <FormComponent onActionClick={this.handleAddCustomer} />
        );

    }
}


const mapStateToProps = (state: any) => {
};

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);