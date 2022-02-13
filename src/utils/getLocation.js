export default function getLocation() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      return {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        error: false,
        message: null,
      };
    },
    function (error) {
      return {
        lat: null,
        lon: null,
        error: true,
        message: error.message,
      };
    }
  );
}
