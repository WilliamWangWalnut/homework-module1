// Toggle Table Events
$(document).ready(function() {
    $("*#events").click(function() {
        $(this).toggleClass("active");
    })
})

//User interaction with table cells
// $(document).read(function() {
//     $("td").click(function() {
//         var content = $(this).text();

//         if (content != "Not Available") {
//             $(this).toggleClass("tdhighlight");

//             if ($(this).hasClass("tdhighlight")) {
//                 $('#displaySelected').css("visibility","visible");
//                 $('#displaySelected').css("margin-top","2em");
//                 $('#result').append("<p>"+content+"</p>");

//             } else {
//                 $('#result p:contains('+content+')').remove();

//                 if ($('#result').has('p').length==false) {
//                     $('#displaySelected').css("visibility","hidden");
//                     $('#displaySelected').css("margin-top","0");
//                 }
//             }
//         }
//     });
// });

$(document).ready(function () {
  $("td").click(function () {
    var content = $(this).text();

    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");

      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css("visibility", "visible");
        $("#displaySelected").css("margin-top", "2em");
        $("#result").append("<p>" + content + "</p>");
      } else {
        $("#result p:contains(" + content + ")").remove();

        if ($("#result").has("p").length == false) {
          $("#displaySelected").css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }
    }
  });
});