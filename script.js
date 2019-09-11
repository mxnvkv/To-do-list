var input = $("input[type='text']");
var addButton = $("#add");
var form = $("#form");
var ul = $("ul");

// function returnLis() {
//     var li = $("ul li");
//     return li.length;
// }

form.submit(function(e) {
  e.preventDefault();
  var li = document.createElement("li");
  var item = input.val();

  if ( item !== "" ) {
      li.append(item);
      ul.append(li);
      input.val("");
  } else {
      console.log("Ooops: you can not add 'nothing'");

      // build a pop-up message
  }
});

ul.on("click", "li", function() {
  $(this).remove();
});
