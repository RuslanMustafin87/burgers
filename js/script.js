document.addEventListener('DOMContentLoaded', function(){

document.querySelector('.hamburger-menu').addEventListener('click', function(){
    document.querySelector('.fullscreen-menu').style.display = 'block';
});

document.querySelector('.fullscreen-menu__close').addEventListener('click', function(){
    document.querySelector('.fullscreen-menu').style.display = 'none';
});

});

//слайдер

var button = $('.slider__arrow-img'),
    container = button.closest('.slider__block');

button.on('click', function(){
    var $this = $(this),
        items = $('.slider__item', container),
        itemActive = items.filter('.slider__item-active'),
        list = $('.slider__list'),
        itemSib;

        if ($this.hasClass('slider__arrow-right')) {
            itemSib = itemActive.next();
            if (itemSib.length == 0) {
                itemSib = items.first();
            };
        } else {
            itemSib = itemActive.prev();
            if (itemSib.length == 0) {
                itemSib = items.last();
            };
        };
        
    var itemIndex = itemSib.index();

        list.animate({'left': (itemIndex * -100) + '%'}, 500, function(){
            itemActive.removeClass('slider__item-active');
            itemSib.addClass('slider__item-active');
        });

});