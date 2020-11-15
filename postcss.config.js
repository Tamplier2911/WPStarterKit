// module.exports = {
//   plugins: {
//     autoprefixer: {},
//   },
// };
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['> 1%', 'last 4 versions'],
    }),
  ],
};
