$(function () {
    // 啟用 jquery ui #tabs頁籤效果
    $("#tabs").tabs();

    // hover變更圖片
    $('.hover-image').hover(
        function () {
            // 滑鼠移入時更換圖片
            var hoverSrc = $(this).data('hover');
            $(this).attr('data-default', $(this).attr('src')); // 儲存原始圖片
            $(this).attr('src', hoverSrc);
        },
        function () {
            // 滑鼠移出時還原圖片
            var hoverSrc = $(this).attr('data-default');
            $(this).attr('src', hoverSrc);
        });
});
