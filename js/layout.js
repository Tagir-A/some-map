import React from "react"
import MyMap from "./mymap"
import Users from "./Users"


export default class Layout extends React.Component {
	constructor() {
		super()
		const req = new XMLHttpRequest()
		req.open("GET", "http://localhost:4000/features", false)
		req.send()
		let data = JSON.parse(req.response)
		let features = data.features
		let props = []
		let coords = []
		for (let i in features){
			props.push(features[i].properties)
			coords.push(
				{
					id: features[i].id,
					coord: features[i].geometry.coordinates
				}
			)
		}
		this.state = {
			data: data,
			props: props,
			coords: coords,
		}
	}
	render() {
		return (
			<div class= "react">
				<Users data={this.state.props}/>
				<MyMap data={this.state.coords}/>
			</div>
		);
	} 
}