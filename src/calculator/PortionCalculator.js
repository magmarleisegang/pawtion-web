import React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import CalculatorButton from './CalculatorButton'

const styles = StyleSheet.create({
    pawtionInputs: {
        flex: 1,
        fontSize: '1.25em',
        textAlign: 'right',
    },
    pawtionLabels: {
        flex: 1,
        textAlign: 'left'
    },
    pawtionUnits: {
        flex: 0.25,
        textAlign: 'right'
    },
    pawtionInputRows: {
        flexDirection: 'row',
    },
    buttons: {

    }

})

export default class PortionCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bag: 0.0,
            price: 0.0,
            portionSize: 0.0,
            portionCost: 0.0,
            Text: {
                bag: "0",
                price: "0",
                portionSize: "0",
            }
        };
        this.calculatePortionCost = this._calculatePortionCost.bind(this);
        this.rememberMe = this._rememberMe.bind(this);
        this.calculatorButtonPressed = this._calculatorButtonPressed.bind(this);
        this.getCurrentEditingValue = this.getCurrentEditingValue.bind(this);
        this.getCurrentEditingText = this.getCurrentEditingText.bind(this);
        this.setCurrentEditingValue = this.setCurrentEditingValue.bind(this);
        this.isEditing = "bag"
        this.actions = {
            clear: "<",
            zeros: ".00"
        }

        this.maintainZero = false;
    }



    _calculatePortionCost() {
        console.log("calculate portion cost");
        if (this.state.price > 0
            && this.state.bag > 0
            && this.state.portionSize > 0) {
            const pricePerGram = this.state.price / (this.state.bag * 1000);
            console.log("price per gram: " + pricePerGram);
            const pricePerPortion = pricePerGram * this.state.portionSize;
            this.setState({ portionCost: pricePerPortion });
        }
    }

    _calculatorButtonPressed(char) {
        console.log(char);
        let currentText = this.getCurrentEditingText();

        console.log(`current value: ${currentText}`);

        if (char === this.actions.clear) {
            currentText = currentText.substring(0, currentText.length - 1)
        }
        else if (char === this.actions.zeros) {
            currentText += "00";
        }
        else {
            currentText += char;

        }
        console.log(`new current value: ${currentText}`);

        this.setCurrentEditingValue(currentText);
    }

    getCurrentEditingValue() {
        console.log(this.isEditing)
        switch (this.isEditing) {
            case "bag":
                return this.state.bag;
            case "price":
                return this.state.price;
            case "portion":
                return this.state.portionSize;
            default:
                break;
        }

    }

    getCurrentEditingText() {
        console.log(this.isEditing)
        switch (this.isEditing) {
            case "bag":
                return this.state.Text.bag;
            case "price":
                return this.state.Text.price;
            case "portion":
                return this.state.Text.portionSize;
            default:
                break;
        }

    }

    setCurrentEditingValue(val) {

        let newFloatValue = parseFloat(val) / 100;
        switch (this.isEditing) {
            case "bag":

                this.setState({ bag: newFloatValue, Text: { bag: val } });
                break;
            case "price":
                this.setState({ price: newFloatValue, Text: { price: val } });

                break;
            case "portion":
                this.setState({ portionSize: newFloatValue, Text: { portionSize: val } });

                break;
            default:
                break;
        }
        this.calculatePortionCost();
    }

    _rememberMe() {
        const currentValue = {
            bag: this.state.bag,
            price: this.state.price,
            portionSize: this.state.portionSize,
            portionCost: this.state.portionCost
        };
        if (this.props.onRememberMe)
            this.props.onRememberMe(currentValue);
    }


    render() {
        return (
            <View style={{ height: '90vh' }}>
                <View style={{ flex: 1 }}>
                    <Text>Price/Portion</Text>
                    <Text style={{ fontSize: '2.5em' }}>{this.state.portionCost.toFixed(2)}</Text>
                </View>
                <View style={{ flex: 0.5 }}>
                    <Button onPress={this.rememberMe}
                        title="Remember Me" />
                </View>
                <View style={{ padding: 10, flex: 1 }}>
                    <View style={[styles.pawtionInputRows]} onTouchEnd={() => { this.isEditing = 'bag'; }}>
                        <Text style={[styles.pawtionLabels]}>Bag Weight</Text>
                        <Text style={[styles.pawtionUnits]}>kg</Text>

                        <TextInput
                            style={[styles.pawtionInputs]}
                            placeholder="00.0"
                            value={this.state.bag.toFixed(2)}
                        />
                    </View>
                    <View style={[styles.pawtionInputRows]} onTouchEnd={() => { this.isEditing = 'price'; }}>

                        <Text style={[styles.pawtionLabels]}>Bag Price</Text>
                        <Text style={[styles.pawtionUnits]}>R</Text>
                        <TextInput
                            style={[styles.pawtionInputs]}
                            placeholder="00.0"
                            value={this.state.price.toFixed(2)}
                        />
                    </View>
                    <View style={[styles.pawtionInputRows]} onTouchEnd={() => { this.isEditing = 'portion'; }}>
                        <Text style={[styles.pawtionLabels]}>Portion Size</Text>
                        <Text style={[styles.pawtionUnits]}>g</Text>

                        <TextInput
                            style={[styles.pawtionInputs]}
                            placeholder="00.0"
                            value={this.state.portionSize.toFixed(2)}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-evenly', flex: 4 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <CalculatorButton Number={1} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={2} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={3} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                        <CalculatorButton Number={4} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={5} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={6} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <CalculatorButton Number={7} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={8} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={9} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <CalculatorButton Number={'.00'} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={0} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                        <CalculatorButton Number={'<'} style={{ flex: 1 }} onPressed={this.calculatorButtonPressed} />
                    </View>
                </View>
            </View>
        );
    }
}
