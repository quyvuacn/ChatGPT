const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

async function Message(question) {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: question,
		temperature: 1,
		max_tokens: 2000,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	})
	return response.data.choices[0].text
}
export default Message
