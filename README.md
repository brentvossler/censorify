This is a node module for finding words in a string of text and replacing naught words with "****." Potential uses could be to censor a forum or blog posts to keep the tone down to a PG level.

** UPDATE 7/19/2018**  - Until npmjs.org fixes an eslint security issue, you cannot use "npm install" because I cannot 'npm publish' this module to be available at npmjs.org. Instead follow the directions below to obtain this module.

1. git clone https://github.com/brentvossler/censorify

2. (in your own project) npm install .../censorify/censorify-0.1.1.tgz 

You could test the module by going to command line and writing in:

$ var censor = require("censorify");
$ console.log(censor.getCensoredWords());

Voila, Happy censoring!