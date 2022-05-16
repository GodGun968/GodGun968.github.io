function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    // 日期
    BirthDay=new Date("01/01/2021 00:00:00");
    today=new Date();
    time_old=(today.getTime() - BirthDay.getTime());
    sec_time_old=time_old/1000
    seconds_old=Math.floor(sec_time_old);
    msPerDay=12*30*24*60*60*1000
    e_years_old=time_old/msPerDay
    years_old=Math.floor(e_years_old);
    e_months_old=(e_years_old-years_old)*12;
    months_old=Math.floor(e_months_old);
    e_days_old=(e_months_old-months_old)*30;
    days_old=Math.floor(e_days_old);
    e_hrs_old=(e_days_old-days_old)*24;
    hrs_old=Math.floor(e_hrs_old);
    e_mins_old=(e_hrs_old-hrs_old)*60;
    mins_old=Math.floor((e_hrs_old-hrs_old)*60);
    seconds=Math.floor((e_mins_old-mins_old)*60);
    // 自定义id
    times.innerHTML="<span>已运行:"+years_old+"年"+months_old+"月"+days_old+ "天" +hrs_old+"时"+mins_old+"分"+seconds+"秒"+"</span>";
}
show_date_time();

function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    // 日期
    today=new Date();
    let thieYear = date.getFullYear()
    // 自定义id
    rights.innerHTML="<span>thieYear+"年"+"</span>";
}
show_date_time();
