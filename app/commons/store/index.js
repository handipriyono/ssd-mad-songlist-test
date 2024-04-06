import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendNotif } from "../hooks/useNotif";

export const useStoreSong = create(
  persist(
    (set, get) => ({
      selected: {},
      favoriteList: [],
      songList: [],
      artistList: [],
      isFav: (key) => {
        const { favoriteList } = get();
        return favoriteList?.[key];
      },
      setFavoriteList: (val) => {
        const { favoriteList } = get();
        let tempData = { ...favoriteList };
        const trackId = val?.trackId;

        if (tempData?.[trackId]) {
          tempData[trackId] = null;
        } else {
          tempData[trackId] = val;
          sendNotif({
            title: val?.trackName,
            body: `Successfully added ${val?.trackName} to favourite`,
          });
        }

        return set({ favoriteList: tempData });
      },
      setSongList: (val) => set({ songList: val }),
      setArtistList: (val) => set({ artistList: val }),
      setSelected: (val) => set({ selected: val }),
    }),
    {
      name: "music-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export default useStoreSong;
