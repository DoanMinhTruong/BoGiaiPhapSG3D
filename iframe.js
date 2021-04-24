function onpre(){
    $('#pre-button').animate({
        opacity: 1,
    } ,500);    
}
$('.image').click(function(){
    $('#tourism').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#tourism').load('./02/02.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});
$('.image1').click(function(){
    $('#smartshowroom').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#smartshowroom').load('./01/01.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.image2').click(function(){
    $('#zone').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#zone').load('./08/08.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.image3').click(function(){
    console.log("Ok");
    $('#heritage').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#heritage').load('./04/04.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.image4').click(function(){
    console.log("Ok");
    $('#facility').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#facility').load('./06/06.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.image5').click(function(){
    console.log("Ok");
    $('#factory').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#factory').load('./05/05.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.image6').click(function(){
    console.log("Ok");
    $('#realestate').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#realestate').load('./07/07.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});
$('.image7').click(function(){
    console.log("Ok");
    $('#museum').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#museum').load('./03/03.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});
// console.log(document.getElementsByClassName('image7'))

$('#pre-button').click(function(){
    console.log('ok')
    location.reload();
})