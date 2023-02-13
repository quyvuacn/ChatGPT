import { useEffect, useState } from "react"
import Message from "../services/ChatGPT"
import "./BoxChat.css"

function Loading({ message }) {
	const [res, setRes] = useState({
		status: false,
		text: "",
	})
	useEffect(() => {
		console.log("ok")
		const fetchData = async () => {
			try {
				const text = await Message(message)
				setRes(() => {
					return {
						status: true,
						text,
					}
				})
			} catch {}
		}
		fetchData()
	}, [])

	return !res.status ? <span className="loader"></span> : res.text
}

export default Loading
