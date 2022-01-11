
var request = require("request");

(function () {
    
    var timeout = setInterval(function () {
        try {
            //SetLeagueState();
            console.log(GetCurrentTime());
            console.log(GetCurrentDate());
            
            request("http://adok.ir/GamesData/ADok/SetLeagueState.php", function (error, response, body) {
                console.log(body);
            });
        } catch (e) {
            console.log("11: " + e.message);
        }
    }, 10000);

})();

function GetCurrentDate() {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    m++;
    var day = d.getDate();
    var dateHijri = gregorian_to_jalali(y, m, day);
    y = dateHijri[0];
    m = dateHijri[1];
    day = dateHijri[2];
    var mounth = "";
    var dayOfMounth = "";
    if (m < 10) {
        mounth = "0" + m;
    } else {
        mounth = "" + m;
    }
    
    if (day < 10) {
        dayOfMounth = "0" + day;
    } else {
        dayOfMounth = "" + day;
    }
    
    var curDate = y + "" + mounth + "" + dayOfMounth;
    return curDate;
}

function GetCurrentTime() {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var offset = 3.8;
    var teh = utc + (3600000 * offset);
    nd = new Date(teh);
    
    var h = nd.getHours();
    var Min = nd.getMinutes();
    
    var hour = "";
    var minute = "";
    var tm = "";
    
    //Min += 41;
    Min -= 30;
    if (Min > 59) {
        Min -= 59;
        h++;
    }
    
    if (Min < 0) {
        Min = 59 + Min;
        h--;
    }
    
    if (h > 24) {
        h = 1;
    }
    
    if (h < 0) {
        h = 24 + h;
    }
    
    if (h < 10) {
        hour = "0" + h;
    } else {
        hour = "" + h;
    }
    
    if (Min < 10) {
        minute = "0" + Min;
    } else {
        minute = "" + Min;
    }
    tm = hour + minute;
    return tm;
}

