import axios from "axios"

const KEY = "AIzaSyA3-SoxfMPeBL4xCi6bt4z6DNcwo0xAp6o"

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY
	}
})