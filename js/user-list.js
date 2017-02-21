import React from "react"
import UserBar from "./userbar"
									
export default class UserList extends React.Component {
	render() {
		if (this.props) {
		return (
			<ul class="user-list">
				{
					
					this.props.data.map(item => {
					return (
						<UserBar 
							name= {item.userName}
							key= {item.id}
							ava= {item.avatar}
							email= {item.email}
							url= {item.url}
							id= {item.id}
						/>
					)
					}) 
				}
			</ul>
			
		)
		} else return (
										<UserBar />
					)
	}
}