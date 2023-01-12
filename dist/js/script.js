$(function(){
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
