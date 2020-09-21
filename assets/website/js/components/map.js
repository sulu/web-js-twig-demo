class Map {
    initialize(el, options) {
        this.el = el;
        this.latitude = options.latitude;
        this.longitude = options.longitude;
        this.zoom = options.zoom ? options.zoom : 8;

        this.initMap();
    }

    createMap() {
        new google.maps.Map(this.el, {
            center: { lat: this.latitude, lng: this.longitude },
            zoom: this.zoom
        });
    }

    initMap() {
        // if google maps js not loaded yet add createMap to the initMaps functions
        if (Array.isArray(window.initMaps)) {
            window.initMaps.push(() => {
                this.createMap();
            });

            return;
        }

        this.createMap();
    }
}

export default Map;
