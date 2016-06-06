// var words = ["word1", "word2", "word3"];
// var wordsToUpperCase = words.map(function(word) {
//   return word.toUpperCase();
// });
// alert(wordsToUpperCase);

$(document).ready(function(){
  $("#list").submit(function(event) {
    debugger;
    var secondArray = [];
    // var result = [$("#item1").val(),$("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val()]
    var results = ["item1", "item2", "item3", "item4", "item5"];
    var secondArray = results.map(function(result) {
      return $("input#" + result).val();

      // add to a new array here
      // var toAlphabetic = results.map(function(toAlp) {
      //   return toAlp.sort();
      // // });
      // alert(toAlphabetic);

    });
    //now sort array.
    secondArray.sort();
    alert(secondArray);
    $(secondArray).forEach(function(userInput) {
      $("#items").append("<li>" + userInput + "</li>");
    });


    $("#shoppingList").show();
    event.preventDefault();


  });
});
