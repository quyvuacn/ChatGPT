import LogoChatGPT from "./LogoChatGPT"

function ChatMessage({ isUser, message }) {
	return (
		<div className="chat-message-body">
			<div className="chat-logo">
				{isUser ? (
					<img className="logo" src="/user.webp" alt="User" />
				) : (
					<LogoChatGPT className="logo" />
				)}
			</div>
			<p className="chat-message">{message}</p>
		</div>
	)
}
export default ChatMessage
