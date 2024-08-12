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
        $('html,body').animate({scrollTop:getPosition.top}, 1000);
        // scrollTop抓getPosition的Top位置，秒數1000毫秒 = 1秒


    })
});
