window.addEventListener('load', function (event) {
  console.log('on load - Figma button, document is ', document.readyState);

  var figmaButton = document.querySelector('[data-figma-button]');

  if (figmaButton) {
    console.log('figma button found', figmaButton.dataset);

    figmaButton.onclick = function () {
      let status = figmaButton.dataset.figmaButton;
      let icon = figmaButton.querySelector('sl-icon');

      console.log('figma button clicked with status', status);

      if (status === 'on') {
        figmaButton.dataset.figmaButton = 'off';
        icon.name = 'figma-mono';
      } else {
        figmaButton.dataset.figmaButton = 'on';
        icon.name = 'figma';
      }
    };
  }
});
