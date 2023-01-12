$(function(){
    $("img.img-svg").each(function () {
        var $img = $(this);
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");
        $.get(imgURL, function (data) {
            var $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
                $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
            }
            $img.replaceWith($svg);
        }, "xml");
    });

    $(".list-projects__nav a").on("click", function(){
        let target = $(this).data("target");
        $(".list-projects .list-projects__nav a").removeClass("active");
        $(this).addClass("active");
        if(target=="all") {
            $(".list-projects .list-projects__one-project").show()
        } else {
            $(".list-projects .list-projects__one-project").each(function () {
                $(this).data("tag")!=target ? $(this).hide() : $(this).show();
            });
        }
    });
});
