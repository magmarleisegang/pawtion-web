import React from 'react';
import Table from './PTable';
import { Text } from 'react-native';
export default class PortionList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {list: props.list || []}
        this.portionListConfig = [
            {
                displayName: "Name",
                propertyName: "name"
            },
            {
                displayName: "Weight",
                propertyName: "bag"
            },
            {
                displayName: "Portion Cost",
                propertyName: "portionCost"
            },
            {
                displayName: "Price",
                propertyName: "price"
            }
        ]
    }
    addToList(pawtion)
    {
        const newList = this.state.list.concat(pawtion);
        this.setState({list: newList});
    }
    render(){
        return (
            <>
            <Text>Portion List</Text>
            <Table data={this.state.list}
             config={this.portionListConfig}/>
            </>
        );
    }
}
