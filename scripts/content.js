// function waitForElementToDisplay(selector, time, callback) {
//   if (document.querySelector(selector) != null) {
//     callback();
//     return;
//   } else {
//     setTimeout(function() {
//       waitForElementToDisplay(selector, time, callback);
//     }, time);
//   }
// }

$('[data-key="server_filename"] > div').click();
setTimeout(() => {
  $('[title=保存到我的百度网盘]').click();
}, 100);

setTimeout(() => {
  console.log('save path item - 300s');
  $('.save-path-item').click();
}, 300);

setTimeout(() => {
  $('.g-button-blue-large .g-button-right').click();
}, 500);
