import svgName from './assets/svg/svgname';

export const renderInlineLoadedSvgs = () => {
  // get slots
  const slot = document.querySelector('.svg');

  // append svgs
  slot.innerHTML = svgName;
};
