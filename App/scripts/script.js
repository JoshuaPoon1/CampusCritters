// Calculate the center coordinates for the marker
var centerCoordinates = [25.8617, -80.1918];

// Initialize the map
var map = L.map('map').setView(centerCoordinates, 19);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var customIcon = L.icon({
    iconUrl: 'images/monster.png',
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    popupAnchor: [0, -50]
});

// Add a marker to the map
var monsterMarker = L.marker(centerCoordinates, { icon: customIcon }).addTo(map);
monsterMarker.bindPopup("<b>Hello Im Frank, ur monster</b>").openPopup();

var customIcon2 = L.icon({
    iconUrl: 'images/question.png',
    iconSize: [80, 100],
    iconAnchor: [50, 50],
    popupAnchor: [0, -50]
});

var centerCoordinates2 = [25.8623, -80.192];
// Add a marker for the second location (Orlando)
var questionMarker = L.marker(centerCoordinates2, { icon: customIcon2 }).addTo(map);
questionMarker.bindPopup("<b>!!!!</b>");

// Function to calculate distance between two points
function getDistance(point1, point2) {
    return point1.distanceTo(point2);
}

// Function to move the marker to the clicked location and check distance
function moveMarker(e) {
    var newCoordinates = e.latlng;
    monsterMarker.setLatLng(newCoordinates);
    
    var distance = getDistance(newCoordinates, questionMarker.getLatLng());
   // console.log(distance)
    if (distance <= 22) { // Adjust the threshold as needed
        console.log("hi");
        questionMarker.setIcon(L.icon({
            iconUrl: 'images/purpleMonster.png', // Specify the path to your new JPG image
            iconSize: [80, 100], // Set the size of the new icon
            iconAnchor: [50, 50], // Set the anchor point of the new icon (center)
            popupAnchor: [0, -50] // Set the anchor point for the popup
        }));

        /*   INVOKE EXP+ FUNCTION */
        questionMarker.openPopup();
        user.addXP(20); 
        updateXpDisplay();

    }
}

// Listen for a click event on the map and call moveMarker function
map.on('click', moveMarker);