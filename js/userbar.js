import React from "react"

export default function UserBar(props) {
		return (
			<li class="user-bar">
					<div class="user-ava">
						<img src={props.ava || "placeholder"} alt="" />
					</div>
					<div class="user-info">
						<div class="username">
							<p class="name">{props.name  || "placeholder"}</p>
						</div>
						<div class="userlinks">
							<ul>	
								<li><a href={("mailto:" + props.email) || "placeholder"}>{props.email || "placeholder"}</a></li>
								<li><a href={props.url || "placeholder"} target="_blank">{props.url || "placeholder"}</a></li>
							</ul>
						</div>
					</div>
				</li>
		)
}