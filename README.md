# Apple MusicKit Example

A very simple example of working with the [Apple MusicKit Javascript library](https://developer.apple.com/documentation/musickitjs). Intended for Development only


## Development
- `git clone https://github.com/KoleMyers/apple-musickit-example.git` the repository
- `cd apple-musickit-example`
- `npm install`
 - put your [private key](https://help.apple.com/developer-account/#/devce5522674) in a `apple_private_key.p8` file in the root directory
 - add your team & key id's in `server.js`  

```
const team_id = 'ABCDEFGHIJ';
const key_id = 'KLMNOPQRST';
```

- run `node server.js` to start
- visit your app at http://localhost:8080/
- the `music` variable will be globally exposed in the javascript console to mess around with

## Additional Resources & helpful links
 - https://developer.apple.com/documentation/musickitjs
 - https://codegists.com/snippet/javascript/indexjs_aljs_javascript
 - https://help.apple.com/developer-account/#/devce5522674
 - https://developer.apple.com/documentation/musickitjs/musickit
 - https://github.com/zachomedia/apple-music-webplayer
 
