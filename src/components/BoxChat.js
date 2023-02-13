import { useState } from "react"
import "./BoxChat.css"
import ChatMessage from "./ChatMessage"
import InputChat from "./InputChat"
import Loading from "./Loading"

function BoxChat() {
	const [messages, setMessages] = useState([
		// { isUser: false, message: "Tôi có thể giúp gì cho bạn?" },
	])

	const sendMessage = (message) => {
		setMessages((messages) => [
			...messages,
			{
				isUser: true,
				message: message,
			},
		])
		setMessages((messages) => [
			...messages,
			{
				isUser: false,
				message: <Loading message={message} />,
			},
		])
	}

	return (
		<div className="chat-box">
			<div className="chat-header">ChatGPT API</div>
			<div className="chat-body">
				<ChatMessage
					isUser={false}
					message="Tôi có thể giúp gì cho bạn?"
				/>
				{messages.map((info, index) => (
					<ChatMessage
						key={index}
						isUser={info.isUser}
						message={info.message}
					/>
				))}
			</div>
			<InputChat onSubmit={sendMessage} />
		</div>
	)
}

export default BoxChat
