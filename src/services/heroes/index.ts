import axios, { AxiosResponse } from "axios";
import { HeroesResponseType } from "../../types";
import { getHeroesEndpoint } from "./enpoints";

export const fetchHeroesService = (
  first: number,
  skip: number
): Promise<HeroesResponseType> => {
  return axios
    .get(getHeroesEndpoint, {
      params: {
        first,
        skip,
      },
    })
    .then((response: AxiosResponse<HeroesResponseType>) => response.data);
};
