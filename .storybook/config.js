// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// const req = require.context('../', true, /story\.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);


// //基本的配置主要是用来告诉storybook你的stories的存放位置

// // // automatically import all story.js files
// // const req = require.context('../', true, /story\.jsx$/);

// // function loadStories() {
// //   req.keys().forEach(req);
// // }

// // configure(loadStories, module);

import { configure } from '@storybook/react';

// automatically import all story.js files
const req = require.context('../src/', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);