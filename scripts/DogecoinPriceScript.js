var xmlhttp = new XMLHttpRequest();
var url = "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true";
        
//This function parses the JSON to something we can use in the code
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4  &&  this.status == 200) {
    var json = JSON.parse(this.responseText);
    parseJson(json);
  }		
};

//Gets the API data
xmlhttp.open("GET", url, true);
xmlhttp.send();

//This function reads the data in the JSON file, and then manipulates it and displays it on the website.
function parseJson(json) {
    var usdValue = json["dogecoin"]["usd"];
    var usd24hChange = json["dogecoin"]["usd_24h_change"];
    var dateTimeUpdated = json["dogecoin"]["last_updated_at"];
    usdValue = usdValue * 1000;
    usdValue = Number(usdValue).toFixed(2);
    usd24hChange = Number(usd24hChange).toFixed(2);

    

    //Pushes values to page.
    $("#json-data").html("$" + usdValue + "/1000 Ð");
    $("#json-24h-data").html(usd24hChange + "%")
    $("#json-date-time").append(" " + Unix_timestamp(dateTimeUpdated))

    //Changes colour to red or green depending on the 24-hour price change of the currency
    if(usd24hChange <= 0) {
        $("#json-24h-data").css('color', 'red');
    } else {
        $("#json-24h-data").css('color', 'green');
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