# ChatGPT Meme Generation

generate memes from chatGPT ai prompt

# How it works

1. Ask chatGPT for some captions with this prompt:
```
Act as an expert in <Field> that is funny & sarcastic. Create <Number of captions> meme caption with the template that relates to it. All the memes have to be related to the subject of <subject>, each meme needs a different punch line related to it. Provide the response as a json array of objects each with the next fields:
- meme template id number from imgflip as string in a field called template_id.
- array of caption strings for the specific meme with a single caption in a field called captions.
```
2. Save the json resunt it in a file called `propmt.json` in the root of this project.
3. Add your imgFLIP credentials as environment variables in the shell:
```sh
export IMGFLIP_USERNAME=<Your username>
export IMGFLIP_PASSWORD=<Your username>
```
4. run the script with `npm start`.
5 collect your memes either from the url you will get in the bash output or the file will be saveds in the `memes` folder.
```js
[
  { status: 'fulfilled', value: 'https://i.imgflip.com/7jivo4.jpg' },
  { status: 'fulfilled', value: 'https://i.imgflip.com/7jivo3.jpg' },
  { status: 'fulfilled', value: 'https://i.imgflip.com/7jivo5.jpg' },
  { status: 'fulfilled', value: 'https://i.imgflip.com/7jivo6.jpg' }
]
```

