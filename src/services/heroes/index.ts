import axios, { AxiosResponse } from "axios";
import { CreateHeroRequestType, Heroes, HeroesResponseType } from "../../types";
import { HeroTypeResponseType } from "../../types/models/responses/HeroTypeResponseType";
import {
  deleteHeroByIdEndpoint,
  getHeroByIdEndpoint,
  getHeroesEndpoint,
  getHeroesTypesEndpoint,
  postHeroEndpoint,
} from "./enpoints";

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

export const createHeroService = (
  heroData: CreateHeroRequestType
): Promise<boolean> => {
  return axios.post(postHeroEndpoint, heroData).then(() => true);
};

export const fetchHeroByIdService = (id: string): Promise<Heroes> => {
  return axios
    .get(getHeroByIdEndpoint(id))
    .then((response: AxiosResponse<Heroes>) => response.data);
};

export const deleteHeroByIdService = (id: string): Promise<boolean> => {
  return axios.delete(deleteHeroByIdEndpoint(id)).then(() => true);
};
