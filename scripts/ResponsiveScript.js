//Adds a listener that checks the current width of the viewport -
//if it's bigger than 880px then it collapses the mobile nav-bar
//so that it doesn't reappear automatically when the user changes
//the viewport back to <880px.
var checkView = window.matchMedia( "(min-width: 880px)" );
changeView(checkView);
checkView.addListener(changeView);

function changeView(checkView) {
    if (checkView.matches) {
        $(".navbar>a:not(:nth-child(1))").show();
    } else {
        $(".navbar>a:not(:nth-child(1))").hide();
    }
}

//Mobile drop down menu script, hides and shows the navigation buttons.
$(document).ready(function(){
    $("#mobile-btn").click(function(){
        $(".navbar>a:not(:nth-child(1))").toggle();
});
});