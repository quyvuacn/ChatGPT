import { useState } from "react"

function InputChat({ onSubmit }) {
	const [input, setInput] = useState("")

	const handleSubmit = (e) => {
		setInput("")
		e.preventDefault()
		onSubmit(input)
	}
	return (
		<div className="chat-input">
			<form id="form" onSubmit={handleSubmit}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="Type your message here..."
					className="chat-input-field"
				/>
			</form>
		</div>
	)
}

export default InputChat
