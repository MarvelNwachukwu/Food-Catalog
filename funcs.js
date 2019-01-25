let $main = $("main");
let $infotext = $(".infotext");
let $infoimg = $(".infoimg");
let $section =  $("section");

$section.hide();

$main.on("click", function(e){
    $main.hide(700)
    $section.show(1200)
    let realImg = $(e.target).parent().children("img");

    // The H1
    $( $infotext.children("h1") ).text( $(e.target).parent().children("h1").text() );
    // The Paragraph
    $( $infotext.children("p") ).text( $(e.target).parent().children("p").text() );
    // The image
    $( $infoimg.children("img") ).attr("src", $(realImg).attr("src"))

    
})


$section.on("click", function(e){
    if($(e.target).text() === "X"){
        $section.hide(1800);
        $main.show(1300)
    }
})