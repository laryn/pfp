function isTouchDevice() {
  return 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
}
jQuery(document).ready(function ($) {
  if (isTouchDevice()) {
    $(".tile-inner").flip({
      axis: 'y',
      speed: 750
    });
  } else {
    $(".tile-inner").flip({
      axis: 'y',
      trigger: 'hover',
      speed: 750
    });
  }
});
