(async () =>{
  try{
    let response = await fetch("./js/numbers.json");
    let array = await response.json();
    let classActiveLink = 'class="active" ';
    let classActiveTab = ' show active';
    for (var prop_all in array.numbers) {
        var mouth = array.numbers[prop_all];
        if (mouth.is_visible) {
            let text_mouth = "";
            let i = 0;
            switch (mouth.alias) {
                case "jan":
                    text_mouth = "January";
                    break;
                case "feb":
                    text_mouth = "February";
                    break;
                case "mar":
                    text_mouth = "March";
                    break;
                case "apr":
                    text_mouth = "April";
                    break;
                case "may":
                    text_mouth = "May";
                    break;
                case "june":
                    text_mouth = "June";
                    break;
                case "july":
                    text_mouth = "July";
                    break;
                case "aug":
                    text_mouth = "August";
                    break;
                case "sep":
                    text_mouth = "September";
                    break;
                case "oct":
                    text_mouth = "October";
                    break;
                case "nov":
                    text_mouth = "November";
                    break;
                case "dec":
                    text_mouth = "December";
                    break;
                default:
                    throw new Error("Error in month name");
            };
            for (var prop_mouth in mouth.number_list) {
                var mouth_number_list = mouth.number_list[prop_mouth];
                let tempData = new Date(mouth_number_list.cdate);
                let stringData = ('0' + tempData.getDate()).slice(-2)+'.'+('0' + (tempData.getMonth()+1)).slice(-2)+'.'+tempData.getFullYear();
                if (i > 0) {
                    $(".numbers__result.tab-content div#"+mouth.alias+" ul").append('<li><div class="numbers__digit">' + mouth_number_list.number + '</div><div class="numbers__date">' + stringData + '</div></li>');
                    
                } else {
                    $(".numbers__result.tab-content").append('<div class="tab-pane fade' + classActiveTab + '" id="' + mouth.alias + '" role="tabpanel" aria-labelledby="' + mouth.alias + '" tabindex="0"><ul></ul></div>');
                    $(".numbers__result.tab-content div#"+mouth.alias+" ul").append('<li><div class="numbers__digit">' + mouth_number_list.number + '</div><div class="numbers__date">' + stringData + '</div></li>');
                }
                i++;
            };
            if (i > 0) {
                $(".numbers__header ul").append('<li class="nav-item"><a ' + classActiveLink + 'id="' + mouth.alias + '__link" data-bs-toggle="tab" data-bs-target="#' + mouth.alias + '" role="tab" aria-controls="' + mouth.alias + '" aria-selected="true">' + text_mouth + '<sup>' + i + '</sup></a></li>');
                classActiveLink = classActiveTab = '';
            }
        }
    }
  }
  catch(err){
    console.log(err);
  }
})()

$(function(){
    $(".numbers__search-input").on("keyup", function(e){
        if ((e.key >= "0" && e.key <= "9") || e.keyCode == 8) {
            let valueFind = $(this).val();
            $(".numbers__result.tab-content .tab-pane.show.active ul li").each(function () {
                let digit = $(this).find('.numbers__digit').text();
                console.log(valueFind+" "+digit);
                digit.indexOf(valueFind) < 0 ? $(this).hide() : $(this).show();
            });
        } else {
            $(".numbers__search-error").text("Only numbers can be entered");
        }
    });

    $(".numbers__header .nav-tabs").on("click", function(){
        $(".numbers__search-input").val("");
        $(".numbers__search-error").text("");
        $(".numbers__result.tab-content .tab-pane ul li").show();
    });
});
