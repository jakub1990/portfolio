import axios from "axios";


export const getPlacesData = async (type, sw,ne) => {
    try {
        console.log(sw,ne)
     const options = {
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {
    'X-RapidAPI-Key': 'e71f93ee76msh4921612e8e6da86p12592ejsna84ddd949a85',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};
     const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options);
     return data;
    } catch(error) {
      console.log(error);
    }
}
