$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burgerName: $("#newBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function() {
            console.log("Created a new burger");
            location.reload();
        })
    })

    $(".eatBurger").on("click", function(event) {
        event.preventDefault();

        const id = $(this).data("id");
        const devouredStatus = {
            devoured = 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function() {
            console.log("burger has been devoured");
            location.reload();
        })
    });

    $(".throwBurger").on("click", function(event) {
        event.preventDefault();

        const id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    })
})