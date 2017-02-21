import { EventEmitter } from "events"

class DataStore extends EventEmitter {
    constructor() {
        super()
        this.data = {
			props: [],
			coords: [],
		}
    }
    updateData() {
        const req = new XMLHttpRequest
        req.open("GET", "http://localhost:4000/features")
        req.onload = (e) => {
            let resp = JSON.parse(req.response)
            let features = resp.features
            let props = []
            let coords = []
            for (let i in features) {
                props.push(features[i].properties)
                coords.push(
                    {
                        id: features[i].id,
                        coord: features[i].geometry.coordinates
                    }
                )
            }
            this.data.props = props
            this.data.coords = coords
            this.emit("change")
        }
        req.send()
        
    }
    getData() {
        return this.data
    }
}

const dataStore = new DataStore
window.datastore = dataStore
export default dataStore