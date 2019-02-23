    var theTemplateScript = $("#grid-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);

    var types = ["article1","main-article","article3","article4"]
    var tabIndex = ['6','8','9','10']
    var typeNum = 0;
    var homePageArticles = articles.slice(articles.length-4, articles.length+1);
    console.log(homePageArticles)

    for (i=3;i>=0;i--){
        console.log(i)
        homePageArticles[i].ids = types[typeNum]
        homePageArticles[i].tabIndex = tabIndex[typeNum]
        typeNum++
        var theCompiledHtml = theTemplate(homePageArticles[i]);
        $('.container').append(theCompiledHtml);
    }

//Handlebars template file for the home page, gets data from Articles.js and displays the LATEST articles on the home page.