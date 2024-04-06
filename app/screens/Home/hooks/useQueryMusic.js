import { useQuery } from "@tanstack/react-query";
import { getListMusic } from "../api/";
import { useEffect } from "react";
import useMusicStore from "../../../commons/store/index";

const useQueryMusic = ({ params }) => {
  const setSongList = useMusicStore((state) => state.setSongList);
  const setArtistList = useMusicStore((state) => state.setArtistList);
  const songList = useMusicStore((state) => state.songList);
  const artistList = useMusicStore((state) => state.artistList);

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["list-music", params()],
    queryFn: () => getListMusic({ params: params() }),
    staleTime: 60000,
  });

  useEffect(() => {
    if (!isLoading) {
      const { entity, attribute } = params();
      if (entity === "musicTrack") {
        setSongList(data?.results || []);
      }

      if (attribute === "allArtistTerm") {
        setArtistList(data?.results || []);
      }
    }
  }, [isLoading, params(), data?.results]);

  const formatArtist = (item = []) => {
    return artistList?.reduce((acc, cur) => {
      if (!acc?.[cur?.artistId]) {
        acc[cur?.artistId] = {
          name: cur?.artistName,
          ...cur,
          trackId: cur?.trackId,
          items: [],
        };
      }

      acc?.[cur?.artistId]?.items?.push({
        ...cur,
        name: cur.artistName,
        artworkUrl100: cur.artworkUrl100,
        artworkUrl60: cur.artworkUrl60,
        artworkUrl30: cur.artworkUrl30,
      });

      return acc;
    }, {});
  };

  return {
    artistList: formatArtist(artistList || []),
    data: songList,
    isLoading: isLoading || isFetching,
  };
};

export default useQueryMusic;
