// styles
import './scss/index.scss';

// generator function runtime - e.g. async / await enabler
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// svgs
import { renderInlineLoadedSvgs } from './svg';

// on page load
window.onload = () => {
  console.log('Back on track!');
  renderInlineLoadedSvgs();
};
