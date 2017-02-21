import { EventEmitter } from "events"

class DataStore extends EventEmitter {
    constructor() {
        super()
        this.data = {
			props: [{
                "id"          :  22,
                "userName"    :  "Info",
                "avatar"      :  "http://placekitten.com/g/300/300",
                "email"       :  "This is my first React app. I'm using setTimeout to imitate ajax request, so the data should load in 2 secs.",
                "url"         :  "Data is fake.",
                "color"       :  "#204e60"
            }],
			coords: [],
		}
    }
    updateData() {
                setTimeout(() => {
            this.data.props.push({
                "id"          :  0,
                "userName"    :  "Tyron McDiamond",
                "avatar"      :  "https://s3.amazonaws.com/uifaces/faces/twitter/snowwrite/128.jpg",
                "email"       :  "quacklove@gzuu.com",
                "url"         :  "http://thebestpwcemployee.com",
                "color"       :  "#204e60"
            }, {
                "id"          :  1,
                "userName"    :  "Salma75",
                "avatar"      :  "https://s3.amazonaws.com/uifaces/faces/twitter/mrxloka/128.jpg",
                "email"       :  "Arno.Harber@yahoo.com",
                "url"         :  "http://watson.biz",
                "color"       :  "#26364e"
            }, {
                "id"          :  2,
                "userName"    :  "Electa85",
                "avatar"      :  "https://s3.amazonaws.com/uifaces/faces/twitter/vickyshits/128.jpg",
                "email"       :  "Pearl.Sporer59@gmail.com",
                "url"         :  "http://antonietta.info",
                "color"       :  "#722e28"
            }, {
                "id"          :  3,
                "userName"    :  "Ibrahim47",
                "avatar"      :  "https://s3.amazonaws.com/uifaces/faces/twitter/dhilipsiva/128.jpg",
                "email"       :  "Mose65@hotmail.com",
                "url"         :  "http://brisa.name",
                "color"       :  "#2e0e54"
            }, {
                "id"          :  4,
                "userName"    :  "Yoshiko8",
                "avatar"      :  "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg",
                "email"       :  "Grayce45@yahoo.com",
                "url"         :  "http://eduardo.info",
                "color"       :  "#426308"
            }, {
                "id"          :  5,
                "userName"    :  "Keith98",
                "avatar"      :  "https://s3.amazonaws.com/uifaces/faces/twitter/plbabin/128.jpg",
                "email"       :  "Trent_Batz@yahoo.com",
                "url"         :  "http://annamae.name",
                "color"       :  "#297f0b"
            }, {
                "id"          :  6,
                "userName"    :  "Layla.McDermott39",
                "avatar"      :  "https://s3.amazonaws.com/uifaces/faces/twitter/Elt_n/128.jpg",
                "email"       :  "Enrique20@hotmail.com",
                "url"         :  "https://laurel.net",
                "color"       :  "#1d1577"
            })
            this.data.coords.push(
                {
                        id: 0,
                        coord: [-173.0727, -88.9743]
                },
                {
                        id: 1,
                        coord: [-178.9708, -50.0662]
                },
                {
                        id: 2,
                        coord: [164.7496, 40.3456]
                },
                {
                        id: 3,
                        coord: [-114.1938, 43.683]
                },
                {
                        id: 4,
                        coord: [72.0135, 76.2888]
                },
                {
                        id: 5,
                        coord: [-148.7595, -13.0472]
                },
                {
                        id: 6,
                        coord: [-115.3261,68.0033]
                },               
            )
            this.emit("change")
        }, 2000)
        
    }
    getData() {
        return this.data
    }
}

const dataStore = new DataStore
window.datastore = dataStore
export default dataStore