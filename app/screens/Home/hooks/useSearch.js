import { useState } from "react";
import useDebounceValue from "../../../commons/hooks/useDebounce";
let defaultInit = "enya";

const useSearch = () => {
  const [active, setActive] = useState(2);
  const [search, setSearch] = useState(defaultInit);

  const debounceSearch = useDebounceValue(search, 600);

  const onChangeSearch = (e) => {
    if (defaultInit) {
      defaultInit = "";
    }
    setSearch(e);
  };

  const onBtnSearchClick = (params) => {
    setActive(params);
  };

  const params = () => {
    if (active === 2) {
      return {
        entity: "musicTrack",
        term: debounceSearch,
      };
    }
    return {
      attribute: "allArtistTerm",
      term: debounceSearch,
    };
  };

  return {
    active,
    search,
    params,
    onBtnSearchClick,
    onChangeSearch,
    defaultInit,
    hideValueSearch: search === defaultInit,
  };
};

export default useSearch;
