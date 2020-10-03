// postcss.config.js
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const append = postcss.plugin('postcss-append', (opts) => {
  if (!opts) {
    return null;
  }

  if (!fs.lstatSync(opts).isFile()) {
    return null;
  }

  return (root) => {
    const data = fs.readFileSync(opts).toString();
    root.append(data);
  };
});

export default (options) => {
  const plugins = [
    // preprend the file declaring the placeholders
    // you could also just append the content of the file without having to use postcss-import
    append('src/css/placeholders.css'),
    require('postcss-postat')({
      transformers: {
        'extend-ph': (name, value, node) => {
          name = name.replace('-ph', '');
          value = `%${value}`;

          return [name, value];
        },
      },
    }),
    require('postcss-extend')(),
  ];

  return plugins;
};
