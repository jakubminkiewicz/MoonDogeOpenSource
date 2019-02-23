var num1 = Math.floor(Math.random() * articles.length-1) + 1;
var num2 = Math.floor(Math.random() * articles.length-1) + 1;
while(num1 == num2){
    var num2 = Math.floor(Math.random() * articles.length-1) + 1;
}
var randomNums = [num1,num2]

var theTemplateScript = $("#news-bottom-bar").html();
var theTemplate = Handlebars.compile(theTemplateScript);

for (i=0;i<2;i++){
    articles[randomNums[i]].ids = "news-container"
    var theCompiledHtml = theTemplate(articles[randomNums[i]]);
    $('.news-container').append(theCompiledHtml);
}