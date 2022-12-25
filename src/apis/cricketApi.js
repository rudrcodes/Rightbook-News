import axios from "axios";

export const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  headers: {
    'X-RapidAPI-Key': '8caf4f2ebcmsh246562588c26fdep1437e0jsn4a7c06021ff2',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};
