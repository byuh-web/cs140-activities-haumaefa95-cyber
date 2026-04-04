document.getElementById("myForm").addEventListener("Submit",
    function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const data = { name: name, username: username };

        console.log(data);

        if (!name || !username) {
            alert("Please provide your first and last name.");
            return; // stops the function here
        }

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "font.json");
        xhr.send();

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("myForm").innerHTML =
                    "<p>" + response.message + "</p>";
            }
        };
    });