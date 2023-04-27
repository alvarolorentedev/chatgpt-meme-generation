# ![](https://user-images.githubusercontent.com/3071208/234504463-0ef1dfef-921d-48ca-9866-d4c61f570442.png) ChatGPT Meme Generation

generate memes from chatGPT ai prompt

# How it works

1. Ask chatGPT for some captions with this prompt:
```
Create content for 5 memes. All the memes have to be related to the importance of software observability.
The response needs to be a json array of objects each with the next fields:
- meme template id number from imgflip as string in a field called template_id.
- A single string in a field called caption representing the text of the caption.
Also follow the next rules when creating each meme content:
- Each meme needs to use a diferent template.
- Use meme templates that expect only one caption.
- Each meme needs to use the specific punchline of the template being used.
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

