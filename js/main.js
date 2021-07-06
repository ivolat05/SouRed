$(function () {


    var scr = $(".scroll__non-scroling");

    scr.mousedown(function () {

        var startX = this.scrollLeft + event.pageX;

        var startY = this.scrollTop + event.pageY;

        scr.mousemove(function () {

            this.scrollLeft = startX - event.pageX;

            this.scrollTop = startY - event.pageY;

            return false;

        });

    });

    $(window).mouseup(function () {

        scr.off("mousemove");

    });

});