function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      fetch("http://localhost:3000/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
      .then(() => {
        alert("Location sent successfully!");
      })
      .catch(() => {
        alert("Error sending location");
      });
    },
    function () {
      alert("Location permission denied");
    }
  );
}
