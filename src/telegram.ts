import { config } from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'

config()

const token = process.env.TELEGRAM_BOT_TOKEN

if (token === undefined) {
  throw new Error('TELEGRAM_BOT_TOKEN is not defined in .env file')
}

const bot = new TelegramBot(token, { polling: true })

export default bot
