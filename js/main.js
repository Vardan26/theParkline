pageBgImagesSlider();
function pageBgImagesSlider() {
    var pageSliderElements = $('.page__slider__img');
    (function backgroundAnimation(index) {
        pageSliderElements.addClass('show');
        pageSliderElements.removeClass('show').eq(index).addClass('show');
        setTimeout(function () {
            backgroundAnimation((index + 1) % pageSliderElements.length);
        }, 6000);
    }(0));
}


$(".page--availability__rooms__nav__item--all").on('click', function () {
    $(".page--availability__rooms__items").removeClass("hidden");
    $(".page--availability__rooms__items--floorplan").addClass("hidden");
});

$(".page--availability__rooms__nav__item--studios").on('click', function () {
    $(".page--availability__rooms__items--1bed,.page--availability__rooms__items--2bed,.page--availability__rooms__items--3bed,.page--availability__rooms__items--floorplan").addClass("hidden");
    $(".page--availability__rooms__items--studio").removeClass("hidden");
});

$(".page--availability__rooms__nav__item--1bed").on('click', function () {
    $(".page--availability__rooms__items--studio,.page--availability__rooms__items--2bed,.page--availability__rooms__items--3bed,.page--availability__rooms__items--floorplan").addClass("hidden");
    $(".page--availability__rooms__items--1bed").removeClass("hidden");
});

$(".page--availability__rooms__nav__item--2bed").on('click', function () {
    $(".page--availability__rooms__items--1bed,.page--availability__rooms__items--studio,.page--availability__rooms__items--3bed,.page--availability__rooms__items--floorplan").addClass("hidden");
    $(".page--availability__rooms__items--2bed").removeClass("hidden");
});

$(".page--availability__rooms__nav__item--3bed").on('click', function () {
    $(".page--availability__rooms__items--1bed, .page--availability__rooms__items--2bed,.page--availability__rooms__items--studio,.page--availability__rooms__items--floorplan").addClass("hidden");
    $(".page--availability__rooms__items--3bed").removeClass("hidden");
});


$(".availabilityRooms__floorplan").on('click', function () {
    $('.availabilityRooms').not($(this).closest('.availabilityRooms')).addClass("hidden");
    $(".availabilityPhotoGallery").addClass("hidden");
    $(".floorplan").removeClass("hidden");

});

