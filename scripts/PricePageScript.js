var xmlhttp = new XMLHttpRequest();
var url = "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd%2Cgbp%2Ceur&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true";
		
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4  &&  this.status == 200) {
    var json = JSON.parse(this.responseText);
    parseJson(json);
  }		
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

//Function to process the JSON and displays it on the price page.
function parseJson(json) {
    console.log(json)
    var usdValue = json["dogecoin"]["usd"];
    var usd24hChange = json["dogecoin"]["usd_24h_change"];
    var gbpValue = json["dogecoin"]["gbp"];
    var gbp24hChange = json["dogecoin"]["gbp_24h_change"];
    var eurValue = json["dogecoin"]["eur"];
    var eur24hChange = json["dogecoin"]["eur_24h_change"];
    var dateTimeUpdated = json["dogecoin"]["last_updated_at"];
    var usd24hVol = json["dogecoin"]["usd_24h_vol"];
    var gbp24hVol = json["dogecoin"]["gbp_24h_vol"];
    var eur24hVol = json["dogecoin"]["eur_24h_vol"];

    usdValue = usdValue * 1000;
    usdValue = Number(usdValue).toFixed(2);
    gbpValue = gbpValue * 1000;
    gbpValue = Number(gbpValue).toFixed(2);
    eurValue = eurValue * 1000;
    eurValue = Number(eurValue).toFixed(2);

    gbp24hChange = Number(gbp24hChange).toFixed(2);
    usd24hChange = Number(usd24hChange).toFixed(2);
    eur24hChange = Number(eur24hChange).toFixed(2);

    usd24hVol = Number(usd24hVol).toFixed(2);
    gbp24hVol = Number(gbp24hVol).toFixed(2);
    eur24hVol = Number(eur24hVol).toFixed(2);

    

    //Pushes values to page.
    $("#usd-price").html("$" + usdValue);
    $("#gbp-price").html("£" + gbpValue);
    $("#eur-price").html("€" + eurValue);

    $("#usd-24h-change").html(usd24hChange + "%")
    $("#gbp-24h-change").html(gbp24hChange + "%")
    $("#eur-24h-change").html(eur24hChange + "%")

    $("#usd-24h-vol").html("$" + usd24hVol);
    $("#gbp-24h-vol").html("£" + gbp24hVol);
    $("#eur-24h-vol").html("€" + eur24hVol);

    $("#last-updated").html(" " + Unix_timestamp(dateTimeUpdated) + " UTC")

    //Changes colour to red or green depending on the 24-hour price change of the currency
    if(usd24hChange <= 0) {
        $("#usd-24h-change").css('color', 'red');
    } else {
        $("#usd-24h-change").css('color', 'green');
    }

    if(gbp24hChange <= 0){
        $("#gbp-24h-change").css('color', 'red');
    } else {
        $("#gbp-24h-change").css('color', 'green');
    }

    if(eur24hChange <= 0){
        $("#eur-24h-change").css('color', 'red');
    } else {
        $("#eur-24h-change").css('color', 'green');
    }

}

//Unixtime to time converter function courtesy of www.w3resource.com


function Unix_timestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}