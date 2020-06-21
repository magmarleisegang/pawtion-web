import React, { Component } from "react";
import {
    View,
    Modal,
    Text,
    TextInput,
    Button
} from "react-native";

export class RememberMeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            showMe: true
        }
    }
    onSavePressed = () => {
        if (this.state.name && this.props.onSavePressed) {
            let currentValue = this.props.currentValue;
            this.props.onSavePressed(currentValue, this.state.name)
        }
        this.setState({ showMe: false })
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showMe}
            >
                <View>
                    <Text>
                        Enter Name</Text>
                    <TextInput onChange={e => this.setState({ name: e.target.value })}></TextInput>
                </View>
                <View>
                    <Button
                        title="Save"
                        onPress={this.onSavePressed}
                    ></Button>
                </View>
            </Modal >);
    }
}

