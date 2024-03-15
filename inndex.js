// <-------------------------------weatherid and url ------------------------------------------------------------>
var installcity = document.getElementById("cities")
var installbotton =document.getElementById("search-button")
const weatherid = "b56190104c1059fa0d58280d95e6f8e4";
const weatherurl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

// console.log(installcity.value)
// <-------------------------------weatherid and url end ------------------------------------------------------------>


// <-------------------------------open weather app compring------------------------------------------------------------>
// callback("day1");
async function weatherdetails(city) {
     var response = await fetch(weatherurl +city+`&appid=${weatherid}`);
     var data = await response.json();

     console.log(data);

     weekImg = [0,8,16,24,32];
     wekkImgget  = []
     for (var b of weekImg){
          if(data.list[b].weather[0].main== "Rain"){
               wekkImgget.push("./img/rain.png")
          }
          else if(data.list[b].weather[0].main == "Clouds"){
               wekkImgget.push("./img/scarandbroken.png")
          }
          else if(data.list[b].weather[0].main == "Clear"){
               wekkImgget.push("./img/clear-sky.png")
          }
          else if(data.list[b].weather[0].main == "Drizzle"){
               wekkImgget.push("./img/showerrain.png")
          }
          else if(data.list[b].weather[0].main == "Mist"){
               wekkImgget.push("./img/mist(2).png")
          }
     }
     document.getElementById("title-img").src = wekkImgget[0]
     document.getElementById("sun-img").src = wekkImgget[0]
     document.getElementById("mon-img").src = wekkImgget[1]
     document.getElementById("tue-img").src = wekkImgget[2]
     document.getElementById("wed-img").src = wekkImgget[3]
     document.getElementById("thus-img").src = wekkImgget[4]


     let unix = data.city.sunrise;
     let datas = new Date(unix * 1000)
     let r = datas.getHours();
     let y = datas.getMinutes();
     let timesd = r + ":" + y;

     let unixs = data.city.sunset;
     let dataset = new Date(unixs * 1000)
     let a = dataset.getHours(12);
     let s = dataset.getMinutes();
     let timed = a + ":" + s;

     var visib = data.list[0].visibility;
     console.log(typeof visib)
     var visicalulated = visib / 1000


     // var checkimsrc = data.list[0].weather[0].main
      

     // if(checkimsrc== "Rain"){
     //      img_set.src ="rain.png"
     // }
     // else if(checkimsrc == "Clouds"){
     //      img_set.src ="scarandbroken.png"
     // }
     // else if(checkimsrc == "Clear"){
     //      img_set.src ="clear-sky.png"
     // }
     // else if(checkimsrc == "Drizzle"){
     //      img_set.src ="showerrain.png"
     // }
     // else if(checkimsrc == "Mist"){
     //      img_set.src ="mist(2).png"
     // }

     document.getElementById("current-temp").innerHTML = data.list[0].main.temp
     document.getElementById("feel-like").innerHTML = data.list[0].main.feels_like
     document.getElementById("wind-status").innerHTML = data.list[0].wind.speed+"KM/h"
     document.getElementById("sunrise-set").innerHTML = timesd
     document.getElementById("sunriset").innerHTML = timed
     document.getElementById("humadity").innerHTML = data.list[0].main.humidity+"%"
     document.getElementById("Visibility").innerHTML = visicalulated + "KM"
     document.getElementById("sea-level").innerHTML = data.list[0].main.sea_level

     



     // <============================mondaytemp==========================================>
     document.getElementById("mon-temp").innerHTML = data.list[3].main.temp
     document.getElementById("tue-temp").innerHTML = data.list[11].main.temp
     document.getElementById("wed-temp").innerHTML = data.list[27].main.temp
     document.getElementById("thu-temp").innerHTML = data.list[34].main.temp
     document.getElementById("fri-temp").innerHTML = data.list[39].main.temp




     return data
}
installbotton.addEventListener("click",show)
function show(){
     weatherdetails(installcity.value)   
};




// console.log(important)
// <-------------------------------open weather app compring end------------------------------------------------------------>

//<-------------------------------day time call start ------------------------------------------------------------>

function daytimecall() {
     var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     var days = new Date();
     const d = new Date();
     let h = d.getHours();
     let m = d.getMinutes();
     let s = d.getSeconds();
     let time = h + ":" + m + ":" + s;

     let day = weekday[days.getDay()]
     document.getElementById("date-time").innerHTML = `${day},${time}`;
}
setInterval(() => {
     daytimecall()
}, 1000);

//<-------------------------------day time call end ------------------------------------------------------------>


// let unix = 1701305095;
// let dates = new Date(unix*1000);
// console.log(dates);   // 2017-10-08T14:35:44.000Z


// <----------------------------------------automatic days call start------------------------------------------------------------
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var loopdate = new Date();
let finaleday = loopdate.getDay()
let finaledaydata = []
for (i = 0; i < 5; i++) {

     if (finaleday > 6) {
          finaleday = 0
     }
     finaledaydata.push(finaleday)
     console.log(finaleday)

     finaleday += 1
};
console.log(finaledaydata)
document.getElementById("mon").innerHTML = weekday[finaledaydata[0]]
document.getElementById("tue").innerHTML = weekday[finaledaydata[1]]
document.getElementById("wed").innerHTML = weekday[finaledaydata[2]]
document.getElementById("thu").innerHTML = weekday[finaledaydata[3]]
document.getElementById("fri").innerHTML = weekday[finaledaydata[4]]


// <----------------------------------------automatic days call end------------------------------------------------------------


//<-----------------------------------------------daily details start--------------------------------------->
async function dailydetailscall(citys,importantss) {
     var response = await fetch(weatherurl + citys + `&appid=${weatherid}`);
     var get3daily = await response.json();
     console.log(get3daily)
//     importantss.then((res)=>console.log(res)); 
          // importantss = 1        
        
          console.log(importantss)
          arraylist = [];
          if(importantss === 1){
               for(i=0; i<=7; i++){
                    arraylist.push(i)
                    
               }
          }
          else if(importantss == 2){
               for(i=8; i<=15; i++){
                    arraylist.push(i)
               }
          }
          else if(importantss == 3){
               for(i=16; i<=23; i++){
                    arraylist.push(i)
               }
          }
          else if(importantss == 4){
               for(i=24; i<=31; i++){
                    arraylist.push(i)
               }
          }
          else if(importantss == 5){
               for(i=32; i<=39; i++){
                    arraylist.push(i)
               }
          }
          console.log(arraylist)
          document.getElementById("n12").innerHTML = get3daily.list[arraylist[0]].main.temp
          document.getElementById("n03").innerHTML = get3daily.list[arraylist[1]].main.temp
          document.getElementById("n05").innerHTML = get3daily.list[arraylist[2]].main.temp
          document.getElementById("n09").innerHTML = get3daily.list[arraylist[3]].main.temp
          document.getElementById("p12").innerHTML = get3daily.list[arraylist[4]].main.temp
          document.getElementById("p03").innerHTML = get3daily.list[arraylist[5]].main.temp
          document.getElementById("p06").innerHTML = get3daily.list[arraylist[6]].main.temp
          document.getElementById("p09").innerHTML = get3daily.list[arraylist[7]].main.temp

          
          var arraysrc = []
          for(var a of arraylist){
               // get3daily.list[arraylist].weather[0].main
               if(get3daily.list[a].weather[0].main== "Rain"){
                    arraysrc.push("./img/rain.png")
               }
               else if(get3daily.list[a].weather[0].main == "Clouds"){
                    arraysrc.push("./img/scarandbroken.png")
               }
               else if(get3daily.list[a].weather[0].main == "Clear"){
                    arraysrc.push("./img/clear-sky.png")
               }
               else if(get3daily.list[a].weather[0].main == "Drizzle"){
                    arraysrc.push("./img/showerrain.png")
               }
               else if(get3daily.list[a].weather[0].main == "Mist"){
                    arraysrc.push("./img/mist(2).png")
               }
               console.log(a)
               console.log(arraysrc)
          }
          document.getElementById("n12forimg").src = arraysrc[0]
          document.getElementById("n03forimg").src = arraysrc[1]
          document.getElementById("n05forimg").src = arraysrc[2]
          document.getElementById("n09forimg").src = arraysrc[3]
          document.getElementById("p12forimg").src = arraysrc[4]
          document.getElementById("p03forimg").src = arraysrc[5]
          document.getElementById("p06forimg").src = arraysrc[6]
          document.getElementById("p09forimg").src = arraysrc[7]

          console.log(arraylist)
          mondaycallback()
          
    
     }
//  var todaycity = document.getElementById("week-per-id2")
//  todaycity.addEventListener("click",todaycitycall)
//  function todaycitycall(){
//      dailydetailscall(installcity.value) 
//  }


 var weekcheck = document.getElementById("weekcall")
 
 weekcheck.addEventListener("click",weekdisplay)

 
 function weekdisplay(){
     // document.getElementById("week-per-id").style.display ="none";
     // document.getElementById("week-per-id2").style.display="flex";
     document.getElementById("week-per-id").style.display ="flex";
     document.getElementById("week-per-id2").style.display="none";
     weekcheck.style.color="black";
     weekcheck.style.borderBottom="1px solid black";
     today.style.color="rgb(212, 148, 148)";
     today.style.borderBottom="none";
     dailydetailscall(installcity.value) 
 } 
 var today = document.getElementById("todaycal")
 today.style.color="black";
 today.style.borderBottom="1px solid black";
 today.addEventListener("click",todaydisplay)
 function todaydisplay(){
     // document.getElementById("week-per-id").style.display ="flex";
     // document.getElementById("week-per-id2").style.display="none";
     document.getElementById("week-per-id").style.display ="none";
     document.getElementById("week-per-id2").style.display="flex";
     today.style.color="black";
     today.style.borderBottom="1px solid black";
     weekcheck.style.color="rgb(212, 148, 148)";
     weekcheck.style.borderBottom="none";
     // dailydetailscall(installcity.value) 
     
 }
 function mondaycallback(){
     document.getElementById("week-per-id").style.display ="flex";
     document.getElementById("week-per-id2").style.display="none";
     // dailydetailscall(installcity.value) 
 }

// console.log(fetch(weatherurl + `&appid=${weatherid}`))

// weatherdetails().then((res)=>console.log(res));

  
    









// function identidycall(daycall) {

//      var array1 = []

//      switch (daycall) {


//           case 1:
//                array1 = [0, 1, 2, 3, 4, 5, 6, 7];
//                break
//           case 2: array1 = [8, 9, 10, 11, 12, 13, 14, 15];
//                break
//           case 3: array1 = [16, 17, 18, 19, 20, 21, 22, 23];
//                break
//           // case (day4) : array1 =[0,1,2,3,4,5,6,7];
//           // break
//      }
//      return array1

// }
// var abc = identidycall(2)
// console.log(abc)

























