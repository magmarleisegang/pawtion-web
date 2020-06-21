import React from 'react';
import PortionCalculator from './calculator/PortionCalculator'
import PortionList from './portions/PortionList'
import { RememberMeModal } from './portions/RememberMeModal'

class TestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            showRememberMeModal: false,
            currentValue: {}
        }
    }

    onShowRememberMeModal = (currentValue) => {
        this.setState({
            showRememberMeModal: true,
            currentValue: currentValue
        });

    }

    addToList = (value, name) => {
        value.name = name;
        let currentList = this.state.list;

        currentList.push(value);
        currentList.forEach((item, index) => {
            item.key = index + 1;
        })
        this.setState({ list: currentList, currentValue: null, showRememberMeModal: false });
    }
    render() {
        const { list, showRememberMeModal, currentValue } = this.state;
        return (
            <>
                {showRememberMeModal &&
                    <RememberMeModal
                        modalVisible={showRememberMeModal}
                        onSavePressed={this.addToList}
                        currentValue={currentValue} />}
                <PortionCalculator onRememberMe={this.onShowRememberMeModal} />
                {list.length > 0 && 
                <PortionList list={list} />}
            </>
        );
    }
}

export default TestScreen