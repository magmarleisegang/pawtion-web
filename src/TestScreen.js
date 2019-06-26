import React from 'react';
import PortionCalculator from './calculator/PortionCalculator'
import PortionList from './portions/PortionList'
import { View } from 'react-native';

export default class TestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list : [] }
        this.ListRef = React.createRef();
        this.onRememberMe = this._onRememberMe.bind(this);
    }
    _onRememberMe(currentValue){
        this.ListRef.current.addToList(currentValue);
    }
    render(){
        return(
            <View>
            <PortionCalculator onRememberMe={this.onRememberMe}/>
            <PortionList ref={this.ListRef} list={this.state.list} />
            </View>
         );
    }
}