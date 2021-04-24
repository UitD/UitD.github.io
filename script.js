// Переменные

var main_color = "#465bfa";
var color = "#212121";
var back_color = "#f0f0f0";
var block_color = "#fcfcfc";
var shadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
var bool_icon = false;
var theme = false;
var color = false;

// Управление блоками

function start_block_main_news(){
    document.getElementById("main_news").style.transform = "translateX(0px)";
    document.getElementById("main_home").style.transform = "translateX(360px)";
    document.getElementById("path1").style.fill = main_color;
    document.getElementById("path2").style.fill = "#afafaf";
    bool_icon = true;
}

function start_block_main_home(){
    document.getElementById("main_news").style.transform = "translateX(-360px)";
    document.getElementById("main_home").style.transform = "translateX(0px)";
    document.getElementById("path1").style.fill = "#afafaf";
    document.getElementById("path2").style.fill = main_color;
    bool_icon = false;
}

function start_block_main_setting(){
    document.getElementById("main_setting").style.transform = "translateX(10%)";
}

function close_block_main_setting(){
    document.getElementById("main_setting").style.transform = "translateX(200%)";
}

function start_block_main_print(print_o1, print_o2){
    document.getElementById("print_zone1").innerHTML = print_o1;
    document.getElementById("print_zone2").innerHTML = print_o2;
    document.getElementById("main_print").style.transform = "translateY(0)";
}

function close_block_main_print(){
    document.getElementById("main_print").style.transform = "translateY(200%)";
}



// Чисто математика

function s1(){
    let in1 = document.getElementById("s1_i1").value;
    let in2 = document.getElementById("s1_i2").value;
    let in3 = document.getElementById("s1_i3").value;
    let x1 ;
    let x2 ;
    let D ;

    D = in2*in2 - 4*in1*in3;
    D = Math.sqrt(D);

    if(D > 0){
        x1 = ( -in2 - D ) / ( 2*in1 );
        x2 = ( -in2 + D ) / ( 2*in1 );
        start_block_main_print("Первый корень:" + x1,"Второй корень:" + x2);
    }else if(D == 0){
        x1 = (-in2)/(2*in1);
        start_block_main_print("Первый корень:" + x1,"Больше нет корней");
    }else{
        start_block_main_print("Нет корней","Нет корней");
    }
}

function s2(){
    let in1 = document.getElementById("s2_i1").value;
    let in2 = document.getElementById("s2_i2").value;
    let c ;

    c = in1*in1 + in2*in2 ;
    c = Math.sqrt(c);
    start_block_main_print("Гипотенуза:" + c,"Больше решений нет");
}

function s3(){
    let in1 = document.getElementById("s3_i1").value;
    let in2 = document.getElementById("s3_i2").value;
    let a ;

    a = in1*in1 - in2*in2 ;
    a = Math.sqrt(a);
    start_block_main_print("Катет:" + a,"Больше решений нет");
}

function s4(){
    let in1 = document.getElementById("s4_i1").value;
    let in2 = document.getElementById("s4_i2").value;
    let a ;

    a = 180 - in1 - in2 ;
    start_block_main_print("Неизвестный угол:" + a,"Больше решений нет");
}

function s5(){
    let in1 = document.getElementById("s5_i1").value;
    let in2 = document.getElementById("s5_i2").value;
    let a ;

    a = in2/in1 ;
    start_block_main_print("Sin:" + a,"Больше решений нет");
}

function s6(){
    let in1 = document.getElementById("s6_i1").value;
    let in2 = document.getElementById("s6_i2").value;
    let a ;

    a = in2/in1 ;
    start_block_main_print("Cos:" + a,"Больше решений нет");
}

function s7(){
    let in1 = document.getElementById("s7_i1").value;
    let in2 = document.getElementById("s7_i2").value;
    let a ;

    a = in2/in1 ;
    start_block_main_print("Tg:" + a,"Больше решений нет");
}



// Темы всякие

function new_theme(){
    if(theme == false){
        theme = true;       localStorage.setItem("theme", 1);
        document.getElementById("html").style.setProperty("--color", "#fcfcfc");
        document.getElementById("html").style.setProperty("--back-color", "#252525");
        document.getElementById("html").style.setProperty("--block-color", "#212121");
        color = "#fcfcfc";
        back_color = "#252525";
        block_color = "#212121";
        document.getElementById("switch_ellement2").style.marginLeft = "16px";
    }else{
        theme = false;      localStorage.setItem("theme", 0);
        document.getElementById("html").style.setProperty("--color", "#212121");
        document.getElementById("html").style.setProperty("--back-color", "#f0f0f0");
        document.getElementById("html").style.setProperty("--block-color", "#fcfcfc");
        color = "#212121";
        back_color = "#f0f0f0";
        block_color = "#fcfcfc";
        document.getElementById("switch_ellement2").style.marginLeft = "3px";
    }
}

function new_color(){
    if(color == false){
        color = true;   main_color = "#E94747";     localStorage.setItem("color", 1);
        document.getElementById("html").style.setProperty("--main-color", "#E94747");
        if(bool_icon == true){
            document.getElementById("path1").style.fill = main_color;
        }else{
            document.getElementById("path2").style.fill = main_color;
        }
        document.getElementById("switch_ellement1").style.marginLeft = "16px";
    }else{
        color = false;  main_color = "#465bfa";     localStorage.setItem("color", 0);
        document.getElementById("html").style.setProperty("--main-color", "#465bfa");
        if(bool_icon == true){
            document.getElementById("path1").style.fill = main_color;
        }else{
            document.getElementById("path2").style.fill = main_color;
        }
        document.getElementById("switch_ellement1").style.marginLeft = "3px";
    }
}

if(theme == true || localStorage.getItem("theme") == true){
    document.getElementById("html").style.setProperty("--color", "#fcfcfc");
    document.getElementById("html").style.setProperty("--back-color", "#252525");
    document.getElementById("html").style.setProperty("--block-color", "#212121");
    color = "#fcfcfc";
    back_color = "#252525";
    block_color = "#212121";
    document.getElementById("switch_ellement2").style.marginLeft = "16px";
}else if(theme == false || localStorage.getItem("theme") == false){
    document.getElementById("html").style.setProperty("--color", "#212121");
    document.getElementById("html").style.setProperty("--back-color", "#f0f0f0");
    document.getElementById("html").style.setProperty("--block-color", "#fcfcfc");
    color = "#212121";
    back_color = "#f0f0f0";
    block_color = "#fcfcfc";
    document.getElementById("switch_ellement2").style.marginLeft = "3px";
}

if(color == true || localStorage.getItem("color") == true){
    main_color = "#E94747";
    document.getElementById("html").style.setProperty("--main-color", "#E94747");
    if(bool_icon == true){
        document.getElementById("path1").style.fill = main_color;
    }else{
        document.getElementById("path2").style.fill = main_color;
    }
    document.getElementById("switch_ellement1").style.marginLeft = "16px";
}else if(color == false || localStorage.getItem("color") == false){
    main_color = "#465bfa";
    document.getElementById("html").style.setProperty("--main-color", "#465bfa");
    if(bool_icon == true){
        document.getElementById("path1").style.fill = main_color;
    }else{
        document.getElementById("path2").style.fill = main_color;
    }
    document.getElementById("switch_ellement1").style.marginLeft = "3px";
}