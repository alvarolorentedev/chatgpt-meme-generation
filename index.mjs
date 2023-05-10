import Imgflip from "imgflip";
import prompt from "./prompt.json" assert { type: "json" };
import { randomUUID } from 'crypto'

const imgflip = new Imgflip({
    username: process.env.IMGFLIP_USERNAME,
    password: process.env.IMGFLIP_PASSWORD
  })

const createMemes = async (prompts) => {
  const memes = (await imgflip.memes()).reduce((acc, val) => ({...acc, [val.name.toLowerCase()]: val.id}),{})
  return Promise.allSettled(prompts.map((prompt) => imgflip.meme(memes[prompt.template_name.toLowerCase().replace(/-/g, " ")], {
      captions: prompt.captions,
      path: `memes/${randomUUID()}_#meme.png`
    })))
}

createMemes(prompt).then(console.log)
