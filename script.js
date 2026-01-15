document.getElementById("helloBtn").addEventListener("click", () => {
    if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const message = `📍 My Location:
Latitude: ${lat}
Longitude: ${lon}
🗺️ Map: https://www.google.com/maps?q=${lat},${lon}`;

            const phoneNumber = "919235951295"; 
            // replace with your WhatsApp number (country code, no +)

            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");
        },
        () => {
            alert("Location permission denied");
        }
    );
});
