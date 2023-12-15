function saveUserData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    if (name && age) {
      var userData = { name: name, age: age };
      var storedData = JSON.parse(localStorage.getItem("userData")) || [];

      storedData.push(userData);
      localStorage.setItem("userData", JSON.stringify(storedData));

      displayUserData();
    } else {
      alert("Please enter both name and age.");
    }
  }

  function displayUserData() {
    var tableBody = document.querySelector("#userDataTable tbody");
    tableBody.innerHTML = "";

    var storedData = JSON.parse(localStorage.getItem("userData")) || [];

    storedData.forEach(function (userData) {
      var row = tableBody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.textContent = userData.name;
      cell2.textContent = userData.age;
    });
  }