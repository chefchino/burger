$(function() {
$(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var newAte = {
      devoured: devoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newAte
    }).then(
      function() {
        console.log("You Devoured it");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#bu").val().trim()
    //   devoured: $("[name=devoured]:checked").val().trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
