document.addEventListener('DOMContentLoaded', function(){

document.querySelector('.hamburger-menu').addEventListener('click', function(){
    document.querySelector('.fullscreen-menu').style.display = 'block';
});

document.querySelector('.fullscreen-menu__close').addEventListener('click', function(){
    document.querySelector('.fullscreen-menu').style.display = 'none';
});

});

//слайдер

var button = $('.slider__arrow'),
    container = button.closest('.slider__block');

button.on('click touchstart', function(){
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

//аккордеон

var acco = $('.acco'),
    accoItems = $('.acco__item'),
    contentHeight;

accoItems.on('click touchstart', function(){
    var $this = $(this),
        accoTitle = $('.acco__title', this),
        accoContent = $('.acco__content', this);

        if ($this.hasClass('acco__item-active')) { 
            accoContent.slideUp(500);
            $this.removeClass('acco__item-active');
        } else {
            accoItems.removeClass('acco__item-active');
            $this.addClass('acco__item-active');
            accoItems.find('.acco__content').slideUp(500);
            accoContent.slideDown(500)
        }
})

//вертикальный аккордеон

var accoVertical = $('.acco-vertical'),
    accoVerItems = $('.acco-vertical__item');

accoVerItems.on('click touchstart', function(){
    var $this = $(this),
        accoVerItemContent = $('.acco-vertical__content',this);
    
    if ($this.hasClass('acco-vertical__item-active')) { 
        accoVerItemContent.animate({'width': '0'}, {duration: 500, queue: false});
        $this.removeClass('acco-vertical__item-active');
    } else {
        accoVerItems.removeClass('acco-vertical__item-active');
        $this.addClass('acco-vertical__item-active');
        // accoVerItems.animate({'width': '0'}, {duration: 500, queue: false});
        accoVerItems.find('.acco-vertical__content').animate({'width': '0'}, {duration: 500, queue: false});
        // $this.animate({'width': '100%'}, {duration: 500, queue: false});
        accoVerItemContent.animate({'width': '100%'}, {duration: 500, queue: false});
    }
})

//навигация

var main = $('.main'),
    sections = $('.section'),
    isScroll = false;

var scrollDirection = function(direction){

    var sectionActive = sections.filter('.section-active'),
    sectionNext = sectionActive.next(),
    sectionPrev = sectionActive.prev(); 

    if (direction == 'down' && sectionNext.length) {
        scrollMain(sectionNext.index());
    }
        
    if (direction == 'up' && sectionPrev.length) {
        scrollMain(sectionPrev.index());
    }
}

var scrollMain = function(sectionEq){
    
            if (isScroll) return
            isScroll = true;
    
            main.css('transform', 'translateY(' + (sectionEq * -100) + '%)');
            sections.eq(sectionEq).addClass('section-active')
                .siblings().removeClass('section-active');
    
            $('.navigation-fixed__item').eq(sectionEq).addClass('active')
            .siblings().removeClass('active');
    
            setTimeout(function(){
                isScroll = false;
            }, 1300);
        }

$('.wrapper').on('wheel', function(event){ 
    
    var direction = event.originalEvent.deltaY > 0 ? 'down' : 'up';

    scrollDirection(direction);
});

$(document).on('keydown', function(event){

    switch (event.keyCode) {
        case 38:
            scrollDirection('up');
            break;
        case 40:  
            scrollDirection('down');
            break;
    };
});

$('[data-scroll]').on('click touchstart', function(){
    scrollMain($(this).attr('data-scroll'));
})

$(window).swipe({
    swipe: function(event, direction){
        scrollDirection(direction);
    }
})