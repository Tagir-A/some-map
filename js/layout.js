import React from "react"
import MyMap from "./mymap"
import Users from "./Users"
import DataStore from "./datastore"

export default class Layout extends React.Component {
	constructor() {
		super()
		this.state = {
			data: DataStore.getData(),
		}
	}
	componentWillMount() {
		DataStore.updateData()
		DataStore.on("change", () => {
			this.setState({data: DataStore.getData()})
		})
	}
	render() {
		return (
			<div class= "react">
				<Users data={this.state.data.props}/>
				<MyMap data={this.state.data.coords}/>
			</div>
		);
	} 
}