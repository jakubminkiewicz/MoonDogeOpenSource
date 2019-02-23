    var theTemplateScript = $("#article-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    
    for (i=articles.length-1;i>=0;i--){
        console.log(i)
        articles[i].ids = "news-container"
        var theCompiledHtml = theTemplate(articles[i]);
        $('#tester').append(theCompiledHtml);
    }

//Displays all the articles in Articles.js on the News page.