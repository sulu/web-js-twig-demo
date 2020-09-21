class Map {
    initialize(el, options) {
        this.map = new google.maps.Map(el, {
            center: { lat: options.latitude, lng: options.longitude },
            zoom: options.zoom ? options.zoom : 8
        });
    }
}

export default Map;
