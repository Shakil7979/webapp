$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    // autoplay:true,
    // autoplayTimeout: 10000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }

    }
})

// -----------------

$("#edit_me").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top
    });
});

// -----------------

var textfirst = new Array();
textfirst.push(" classes you love ");
textfirst.push(" Coaches you love "); 
var point1 = 0;

function changetextfirstirst(){
$('.animation-red-first').html(textfirst[point1]);
if(point1 < textfirst.length - 1){
    point1 ++;
}else{
    point1 = 0;
}
setTimeout(changetextfirstirst, 3000)
}
changetextfirstirst();

// -----------------

var textsecond = new Array();
textsecond.push(" schedule ");
textsecond.push(" budget ");
var point2 = 0;
function changetextsecond(){
$('.animation-red-second').html(textsecond[point2]);
if(point2 < textsecond.length - 1){
    point2 ++;
}else{
    point2 = 0;
}
setTimeout(changetextsecond, 3500)
}
changetextsecond();

// -----------------

var textthird = new Array();
textthird.push(" 7am Yoga");
textthird.push(" 1pm HIIT");
textthird.push(" 9pm Spinning");
var point3 = 0;
function changetextthird(){
$('.animation-red-third').html(textthird[point3]);
if(point3 < textthird.length - 1){
    point3 ++;
} else{
    point3 = 0;
}
setTimeout(changetextthird, 3000)
}
changetextthird();

// -----------------

var textfourth = new Array();
textfourth.push(" @julia.calm ");
textfourth.push(" @riaringdarren ");
textfourth.push(" @danielcycles ");
var point4 = 0;
function changetextfourth(){
$('.animation-red-fourth').html(textfourth[point4]);
if(point4 < textfourth.length - 1){
    point4 ++;
} else{
    point4 = 0;
}
setTimeout(changetextfourth, 3500)
}
changetextfourth();

// -----------------

var textfifth = new Array();
textfifth[0] = new Image();
textfifth[0].src = 'images/phone1.png';
textfifth[1] = new Image();
textfifth[1].src = 'images/phone2.png';
textfifth[2] = new Image();
textfifth[2].src = 'images/phone3.png'; 
var point5 = 0;
function changetextfifth(){
$('.animation-red-fifth').html(textfifth[point5]);
if(point5 < textfifth.length - 1){
    point5 ++;
} else{
    point5 = 0;
}
    setTimeout(changetextfifth, 3000)
}

changetextfifth();

// -----------------

var textsixth = new Array();
textsixth.push(" nutrition goals ");
textsixth.push(" health goals "); 
var point6 = 0;
function changetextsixth(){
$('.animation-red-sixth').html(textsixth[point6]);
if(point6 < textsixth.length - 1){
    point6 ++;
} else{
    point6 = 0;
}

setTimeout(changetextsixth, 3000)
}
changetextsixth();

// -----------------

var textsixth2 = new Array();
textsixth2.push(" lose weight ");
textsixth2.push(" gain musclea "); 
var point7 = 0;
function changetextsixth2(){
$('.animation-red-sixth-2').html(textsixth2[point7]);
if(point7 < textsixth2.length - 1){
    point7 ++;
} else{
    point7 = 0;
}
setTimeout(changetextsixth2, 3500)
}
changetextsixth2();

// -----------------

var textseventh = new Array();
textseventh.push(" Vegan Burgers ");
textseventh.push(" Fish & chips "); 
textseventh.push("Steak Fajitas");
var point8 = 0;
function changetextseventh(){
$('.animation-red-seventh').html(textseventh[point8]);
if(point8 < textseventh.length - 1){
    point8 ++;
} else{
    point8 = 0;
}
setTimeout(changetextseventh, 3000)
}
changetextseventh();

// -----------------

var texteighth = new Array();
texteighth.push(" @chefkatherine ");
texteighth.push(" @martha.stews "); 
texteighth.push(" @gordoncooks");
var point9 = 0;
function changetexteighth(){
$('.animation-red-eighth').html(texteighth[point9]);
if(point9 < texteighth.length - 1){
    point9 ++;
} else{
    point9 = 0;
}
setTimeout(changetexteighth, 3500)
}
changetexteighth();

// -----------------

var textninth = new Array();
textninth[0] = new Image();
textninth[0].src = 'images/phone1.png';
textninth[1] = new Image();
textninth[1].src = 'images/phone2.png';
textninth[2] = new Image();
textninth[2].src = 'images/phone3.png';  
var point10 = 0;
function changetextninth(){
$('.animation-red-ninth').html(textninth[point10]);
if(point10 < textninth.length - 1){
    point10 ++;
} else{
    point10 = 0;
}
setTimeout(changetextninth, 3500)
}
changetextninth();

// -----------------

var texttenth = new Array();
texttenth.push(" paywall ");
texttenth.push(" Upload "); 
texttenth.push(" create");
var point11 = 0;
function changetexttenth(){
$('.animation-red-tenth').html(texttenth[point11]);
if(point11 < texttenth.length - 1){
    point11 ++;
} else{
    point11 = 0;
}
setTimeout(changetexttenth, 3500)
}
changetexttenth();

// -----------------

var texteleventh = new Array();
texteleventh.push(" on-demand classes. ");
texteleventh.push(" Live classes. "); 
texteleventh.push(" Recipes. ");
var point12 = 0;
function changetexteleventh(){
$('.animation-red-eleventh').html(texteleventh[point12]);
if(point12 < texteleventh.length - 1){
    point12 ++;
} else{
    point12 = 0;
}
setTimeout(changetexteleventh, 3500)
}
changetexteleventh();

// -----------------

var texttwelfth = new Array();
texttwelfth.push(" paywall ");
texttwelfth.push(" Create "); 
texttwelfth.push(" Schedule");
var point13 = 0;
function changetexttwelfth(){
$('.animation-red-twelfth').html(texttwelfth[point13]);
if(point13 < texttwelfth.length - 1){
    point13 ++;
} else{
    point13 = 0;
}
setTimeout(changetexttwelfth, 3500)
}
changetexttwelfth();

// -----------------

var textthirteenth = new Array();
textthirteenth.push(" exclusive content. ");
textthirteenth.push(" Virtual Classes. "); 
textthirteenth.push(" On-Demand clases. ");
textthirteenth.push(" Live clases. ");
var point14 = 0;
function changetextthirteenth(){
$('.animation-red-thirteenth').html(textthirteenth[point14]);
if(point14 < textthirteenth.length - 1){
    point14 ++;
} else{
    point14 = 0;
}
setTimeout(changetextthirteenth, 3500)
}
changetextthirteenth();

// -----------------

var textfifteenth = new Array();
textfifteenth.push(" profile picture ");
textfifteenth.push(" page banner "); 
textfifteenth.push(" Coach trailer "); 
var point15 = 0;
function changetextfifteenth(){
$('.animation-red-fifteenth').html(textfifteenth[point15]);
if(point15 < textfifteenth.length - 1){
    point15 ++;
} else{
    point15 = 0;
}
setTimeout(changetextfifteenth, 3500)
}
changetextfifteenth();

// -----------------

var textsixteenth = new Array();
textsixteenth.push(" followers ");
textsixteenth.push(" clients "); 
textsixteenth.push(" fan ");   
var point16 = 0;
function changetextsixteenth(){
$('.animation-red-sixteenth').html(textsixteenth[point16]);
if(point16 < textsixteenth.length - 1){
    point16 ++;
} else{
    point16 = 0;
}
setTimeout(changetextsixteenth, 3500)
}
changetextsixteenth();
