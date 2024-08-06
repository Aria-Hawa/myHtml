//行動裝置通常背景就不會放影片，要透過js完全從html拿掉，並非只是display:none;
// 此次用jQuery語法
// 移除背景影片
$(function () {
    if ($(window).width() <= 820) {
        $("#about video").remove();
    }
});