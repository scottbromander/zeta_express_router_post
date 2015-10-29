$(document).ready(function(){
    $("#getData").on('click', clickGetData);
    $("#postData").on('click', clickPostData);
});

function clickGetData(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            console.log(data);
        }
    });
}

function clickPostData(){

    var kittyFooFoo = {};
    $.each($("#inputForm").serializeArray(), function(i, field){
        kittyFooFoo[field.name] = field.value;
    });

    $("#inputForm").find("input[type=text]").val("");
    console.log(kittyFooFoo);
    $.ajax({
        type: "POST",
        url: "/data",
        data: kittyFooFoo,
        beforeSend: function(){
            console.log("HERE IS THE DATA: ", kittyFooFoo);
        },
        success: function(data){
            console.log(data);
        }
    })
}