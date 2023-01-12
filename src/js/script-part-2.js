$(function(){
    $("#console").on("click", function(){
        let date = new Date();
        let message = "";
        if (date.getHours() >= 12 && date.getHours() < 18) {
            message = "\nВ данный момент время между 12:00 и 18:00";
        }
        console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + message);
    });
});
