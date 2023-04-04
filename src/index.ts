import bot from './telegram.js'
import chatGPT from './ai.js'

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  if (text === undefined) {
    return
  }

  // const completion = await chatGPT.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Hello world",
  // });

  const reply = 'Hello world'

  bot.sendMessage(chatId, reply)
})
