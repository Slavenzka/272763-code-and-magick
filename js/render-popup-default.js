'use strict';

(function () {
  window.renderPopupDefault = function (targetElement) {
    targetElement.style.left = window.defaultCoords.x + 'px';
    targetElement.style.top = window.defaultCoords.y + 'px';
  };
}());
