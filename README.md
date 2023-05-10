# ![](https://user-images.githubusercontent.com/3071208/234504463-0ef1dfef-921d-48ca-9866-d4c61f570442.png) ChatGPT Meme Generation

generate memes from chatGPT ai prompt

# How it works

1. Ask chatGPT for some captions with this prompt:
```
generate 5 meme caption for tarant following the next rules for each meme content:
- Each meme needs to use a diferent template.
- Each meme needs to use the specific punchline of the template being used.
The response needs to be a json array of objects each with the next fields:
- meme template name from imgflip as string in a field called template_name.
- An array of captions representing the captions for a single meme.
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

