import React from 'react';
import { View, Text } from 'react-native';

export default class PTable extends React.Component {
    renderCell(val, key) {
        return (
            <View key={key} style={{ flex: 1, alignSelf: 'stretch' }}><Text>{val}</Text></View>
        )
    }

    renderRow(dataObject) {
        return (
            <View key={dataObject.key} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                {
                    this.props.config.map((val, idx) => {
                        return this.renderCell(dataObject[val.propertyName] , `${dataObject.key}-${idx}`)
                    })
                }
            </View>
        );
    }

    renderHeaderRow(configObject) {
        return (
            <View key="header" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                {
                    configObject.map((val, idx) => {
                        return this.renderCell(val.displayName, `header-${val.propertyName}`)
                    })
                }
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.renderHeaderRow(this.props.config)}
                {
                    this.props.data.map((datum) => { // This will render a row for each data element.
                        return this.renderRow(datum);
                    })
                }
            </View>)
    }
}