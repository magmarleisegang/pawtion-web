import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';

export default class PortionCalculator extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {bag: 0.0,
            price: 0.0,
            portionSize: 0.0,
            portionCost: 0.0
        };
        this.calculatePortionCost = this._calculatePortionCost.bind(this);
        this.rememberMe = this._rememberMe.bind(this);
    }
    
    _calculatePortionCost () {
        console.log("calculate portion cost");
        if(this.state.price > 0
            && this.state.bag > 0
            && this.state.portionSize > 0)
        {
            const pricePerGram = this.state.price / (this.state.bag * 1000);
            console.log("price per gram: "+ pricePerGram);
            const pricePerPortion = pricePerGram * this.state.portionSize;
            this.setState({portionCost: pricePerPortion});
        }
    }

    _rememberMe(){
        const currentValue = {bag: this.state.bag,
            price: this.state.price,
            portionSize: this.state.portionSize,
            portionCost: this.state.portionCost
        };
        if(this.props.onRememberMe)
            this.props.onRememberMe(currentValue);
    }

    render(){
        return (
            <View style={{padding: 10}}>
                <Text>Bag Weight (kg)</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="kg"
                    onChangeText={(text) => this.setState({bag: parseFloat(text)}, this.calculatePortionCost)}
                />
                <Text>Bag Price (R)</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="R"
                    onChangeText={(text) => this.setState({price: parseFloat(text)}, this.calculatePortionCost)}
                />
                <Text>Portion Size (g)</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="g"
                    onChangeText={(text) => this.setState({portionSize: parseFloat(text)}, this.calculatePortionCost)}
                />
                
                <Text>Rands/Meal</Text>
                <Text>{this.state.portionCost}</Text>
                <Button
                    onPress={this.rememberMe}
                    title="Remember Me"
                />
            </View>
        );
    }
}
