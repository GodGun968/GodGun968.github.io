function show_date_right(){
    window.setTimeout("show_date_right()", 1000);
    // 日期
    today=new Date();
    years=today.getFullYear();
    // 自定义id
    rights.innerHTML="Copyright © 2021-"+years+" 神枪968. All Rights Reserved";
}
show_date_right();