# import-cdn-js

import JavaScript library from CDN links

## Install

`$ npm i -s import-cdn-js`

## Usage

ImportCDNJS(link: string, libraryName: string):Promise<library>

```js
import ImportCDNJS from 'import-cdn-js';

ImportCDNJS('//cdn.bootcss.com/jquery/3.3.1/jquery.min.js', '$')
    .then($ => $('body').text("Hello world!"));
```
