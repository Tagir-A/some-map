import React from "react"

export default function UserBar(props) {
		return (
			<li class="user-bar">
					<div class="user-ava">
						<img src={props.ava} alt="" />
					</div>
					<div class="user-info">
						<div class="username">
							<p class="name">{props.name}</p>
						</div>
						<div class="userlinks">
							<ul>	
								<li><a href={"mailto:" + props.email}>{props.email}</a></li>
								<li><a href={props.url} target="_blank">{props.url}</a></li>
							</ul>
						</div>
					</div>
				</li>
		)
}