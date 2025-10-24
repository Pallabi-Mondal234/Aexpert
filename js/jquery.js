$(document).ready(function () {
  $('.navbar-toggle').on('click', function () {
    $('.navbar-toggle').toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $('.sign-in-section').toggleClass('active');
    $('.sign-in').toggleClass('button');
  })
})
