import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { } from '../../store/actions/customer';
import { FormComponent } from '../../components/FormComponent/Form'

interface IState extends RouteComponentProps {

}

class Create extends React.Component<IState> {
    componentDidMount() {
    }

    public render() {
        return (
            <FormComponent />
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