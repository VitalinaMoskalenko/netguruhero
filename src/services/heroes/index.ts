import axios, { AxiosResponse } from "axios";
import { HeroesResponseType } from "../../types";
import { HeroTypeResponseType } from "../../types/models/responses/HeroTypeResponseType";
import { getHeroesEndpoint, getHeroesTypesEndpoint } from "./enpoints";

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

export const fetchTypesService = (): Promise<HeroTypeResponseType> => {
  return axios
    .get(getHeroesTypesEndpoint)
    .then((response: AxiosResponse<HeroTypeResponseType>) => response.data);
};
