//行動裝置通常背景就不會放影片，要透過js完全從html拿掉，並非只是display:none;
// 此次用jQuery語法

// 一個js檔案中，只要執行一次$(document).ready(函式) =>簡寫是$(函式)

$(function () {

    // 移除背景影片
    if ($(window).width() <= 820) {
        $("#about video").remove();
    }

    // 漢堡按鈕三變X
    $('.hamburger').click(function () {
        // 在.hamburger類別裡面 加入/刪除類別is-active
        $(this).toggleClass('is-active');
        // 在.navigation類別裡面 加入/刪除類別show
        $('.navigation').toggleClass('show');
    })

    // 滑動至錨點位置
    $('.menu a').click(function () {
        // 取得.menu a裡面的屬性與值(href)用.attr
        let getMenuHref = $(this).attr('href');
        // 取得剛剛href的相對座標位置
        let getPosition = $(getMenuHref).offset();
        // 各家瀏覽器scroll的設定不一樣，有的是在html，有的是在body
        $('html,body').animate({ scrollTop: getPosition.top }, 1000);
        // scrollTop抓getPosition的Top位置，秒數1000毫秒 = 1秒
    })

    // 滑動至頂
    $('#goTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    // 至頂按鈕淡出淡入
    // .stop()讓程式不要強迫性的跑完
    // 疑似同時寫fadeIn和fadeOut會出問題，所以建議寫fadeTo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#goTop').stop().fadeTo('600', 1);
        } else {
            $('#goTop').stop().fadeOut(600);
        }
    })

});



// Smoove套件因為已經內涵document.ready，所以就不寫在上面的jQuery裡面
// 多個元素共用的樣式可以謝在js區
$('.smoove').smoove({
    // offset: 物體滑入視野之前到螢幕底部的距離
    // 每個option結尾是逗號喔!!!
    offset: '20%',
});
