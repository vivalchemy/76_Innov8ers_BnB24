function submitForm() {
  var title = document.getElementById("title").value;
  var msg = document.getElementById("message").value;
  var latitude = document.getElementById("latitude").value;
  var longitude = document.getElementById("longitude").value;
  var file = document.getElementById("file").value;

  if (
    title === "" ||
    msg === "" ||
    latitude === "" ||
    longitude === ""
  ) {
    alert("Please, fill out the info first");
  } else {
    alert(
      "Form submitted!\nTitle: " +
        title +
        "\nLatitude: " +
        latitude +
        "\nLongitude: " +
        longitude
    );
    window.location.href = "Reports.html";
  }
}

document
  .getElementById("geolocation-btn")
  .addEventListener("click", function () {
    // Open a new window or tab with Google Maps URL
    window.open("https://www.google.com/maps", "_blank");
  });

// Add an event listener to listen for a message from the child window
window.addEventListener("message", function (event) {
  if (event.origin === "https://www.google.com") {
    // Update latitude and longitude values in the form
    document.getElementById("latitude").value = event.data.latitude.toFixed(6);
    document.getElementById("longitude").value =
      event.data.longitude.toFixed(6);
  }
});

