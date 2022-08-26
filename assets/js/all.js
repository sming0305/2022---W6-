"use strict";

$(document).ready(function () {
  $(".mobile__openButton").click(function (e) {
    e.preventDefault();
    $(".mobile__menu").toggleClass("open");
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16
});
var swiper1 = new Swiper("#swiper1", {
  loop: true,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false
  },
  speed: 1800
});
var swiper2 = new Swiper("#swiper2", {
  slidesPerView: "auto",
  spaceBetween: 16
});
var date = document.querySelector('input[name="date"]');
var datepicker = new Datepicker(date, {
  orientation: 'bottom | left',
  language: 'zh-TW',
  minDate: 'auto',
  autohide: true
}); // Datepicker.locales.en = {
//   days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
//   daysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
//   daysMin: ["日", "一", "二", "三", "四", "五", "六"],
//   months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
//   monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
//   today: "今天",
//   monthsTitle: "月份",
//   format: "yyyy/mm/dd",
//   weekStart: 0,
//   titleFormat: "y年mm月",
//   clear: "清除"
// }
//# sourceMappingURL=all.js.map
