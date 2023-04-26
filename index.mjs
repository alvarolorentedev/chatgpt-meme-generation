import Imgflip from "imgflip";
import prompt from "./prompt.json" assert { type: "json" };
import { randomUUID } from 'crypto'

const imgflip = new Imgflip({
    username: process.env.IMGFLIP_USERNAME,
    password: process.env.IMGFLIP_PASSWORD
  })

const createMemes = async (prompts) => {
  return await Promise.allSettled(prompts.map(async (prompt, index) => {
    return await imgflip.meme(Number(prompt.template_id).toString(), {
      captions: prompt.captions,
      path: `memes/meme_${randomUUID()}.png`
    })
  }))
}

createMemes(prompt).then(console.log)
