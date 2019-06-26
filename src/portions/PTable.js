import React from 'react';
import { View, Text } from 'react-native';

export default class PTable extends React.Component{
    renderCell(val){
        return(
        <View style={{ flex: 1, alignSelf: 'stretch' }}><Text>{val}</Text></View>
        )
    }

    renderRow(dataObject){
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            {
                Object.values(dataObject).map(val => {
                    return this.renderCell(val)
                })
            }
            </View>
        );
    }

    render(){
        return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                this.props.data.map((datum) => { // This will render a row for each data element.
                    return this.renderRow(datum);
                })
            }
        </View>)
    }
}