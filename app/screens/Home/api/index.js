import Axios from "../../../commons/utils/axios";

export const getListMusic = async ({ params }) => {
  try {
    const response = await Axios.get("https://itunes.apple.com/search", {
      params: {
        limit: 30,
        ...params,
      },
    });
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

//artist: https://itunes.apple.com/search?term=Diana&limit=30&entity=musicTrack&attribute=allArtistTerm
//song https://itunes.apple.com/search?term=enya&limit=20&entity=musicTrack
