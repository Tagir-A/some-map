import React from "react"
import UserList from "./user-list"

export default function Users(props) {
	return (
		<div class="users">
			<UserList 
				data={props.data || {} }
			/>
		</div>
	)
}