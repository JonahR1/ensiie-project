const fetch = require("node-fetch");
module.exports = class {
    constructor(){
    }

    static async getCoordsByAddr(input) { // fonction async necessite async contexte lors de l'appel
    if (typeof input == "undefined" || input == null) {
        throw 'Parameter missing'
    }
    var encodedInput = input.split(' ').join('+');
    var url = "https://nominatim.openstreetmap.org/search?q="

    var encodedURL = url + encodedInput + "&format=json"
    try {
        const response = await fetch(encodedURL);
        const json = await response.json();
        // console.log(json[0].display_name);
        return {
            'lat': json[0].lat,
            'lon': json[0].lon
        };

    } catch (error) {
        throw error;
    }
}
       
    static ComputeDistance(lat1, lat2, lon1, lon2){ // Formule de Haversine pour la distance à vol d'oiseau
        // On travaille avec des radians donc tout nos angles sont convertis en radians en multipliant par pi / 180 
       if(typeof(lat1) == 'undefind' || typeof(lat2) == 'undefind' || typeof(lon1) == 'undefind'|| typeof(lon2) == 'undefind' || lat1 == null || lat2 == null || lon1 == null || lon2 == null){
           throw 'Parameter missing';
       }
       if(isNaN(lat1) ||isNaN(lat2) || isNaN(lon1)|| isNaN(lon2)){
        throw 'Parameter must be a number';
    }
        var R = 6371; // km
        var dLat = (lat2-lat1)*Math.PI / 180;
        var dLon = (lon2-lon1)*Math.PI / 180; 
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1*Math.PI / 180) * Math.cos(lat2*Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
    
        return d;
    }
}