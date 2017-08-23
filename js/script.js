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

//аккордеон

var acco = $('.acco'),
    accoItems = $('.acco__item'),
    contentHeight;

accoItems.on('click', function(){
    var $this = $(this),
        accoTitle = $('.acco__title', this),
        accoContent = $('.acco__content', this);

        // if (screen.width > 768) {
        //     contentHeight = 100
        // } else {
        //     contentHeight = 170
        // }

        // if ($this.hasClass('acco__item-active')) { 
        //     accoContent.animate({'height': '0'}, {duration: 500,  queue: false});
        //     $this.removeClass('acco__item-active');
        // } else {
        //     accoItems.removeClass('acco__item-active');
        //     $this.addClass('acco__item-active');
        // // accoTitle.css('color', '#f9b43b');
        //     accoItems.find('.acco__content').animate({'height': '0'}, {duration: 500, queue: false});
        //     accoContent.animate({'height': contentHeight + 'px'}, {duration: 500, queue: false});
        // }

        if ($this.hasClass('acco__item-active')) { 
            accoContent.slideUp(500);
            $this.removeClass('acco__item-active');
        } else {
            accoItems.removeClass('acco__item-active');
            $this.addClass('acco__item-active');
        // accoTitle.css('color', '#f9b43b');
            accoItems.find('.acco__content').slideUp(500);
            accoContent.slideDown(500)
        }
})

var accoVertical = $('.acco-vertical'),
    accoVerItems = $('.acco-vertical__item');

accoVerItems.on('click', function(){
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

$('.wrapper').on('wheel', function(event){

    var main = $('.main'),
        sections = $('.section'),
        sectionActive = sections.filter('.section-active'),
        sectionNext = sectionActive.next(),
        sectionPrev = sectionActive.prev(),
        position;

    sectionActive.removeClass('section-active');
        
    var scrollMain = function(position){
        main.css('transform', 'translateY(' + position + '%)');
    }
    
    if (event.originalEvent.deltaY > 0 && sectionNext.length) {
        position = (sectionNext.index() * -100);
        sectionNext.addClass('section-active');
    }
        
    if (event.originalEvent.deltaY < 0 && sectionPrev.length) {
        position = (sectionPrev.index() * 100);
        sectionPrev.addClass('section-active');
    }

    scrollMain(position);
})