/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/
/* Give everything with the class 'hello' a white background when you click on one of them*/
//link hello class and call function to add CSS class on click
$(".hello").on("click", clickColor);
function clickColor() {
    $(this).addClass("blueBack")
}

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
//link h1 element and call function to change header size on mouse over
$("h1").on("mouseover", smallHeader);
function smallHeader() {
    $("h1").addClass("shrink")
}
//link h1 element and call function to restore header size on mouse off
$("h1").on("mouseout", regularHeader);
function regularHeader() {
    $("h1").removeClass("shrink")
}

/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
//link the first element in the hello class and call function to add a period to the element on click
$(".hello:first").on("click", addPeriod);
function addPeriod() {
    $(".hello:first").append("<span>.</span>")
}