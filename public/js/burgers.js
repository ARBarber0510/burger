// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var devourStatus = $(this).data("devoured");

      var update = 0;
      if (devourStatus === 0) {
        update = 1;
      }
      if (devourStatus === 1) {
        update = 0;
      }
  
      var newDevour = {
        devoured: update
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          console.log("Changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  