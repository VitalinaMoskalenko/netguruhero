export const baseUrl = "http://localhost:4000/";

export const getHeroesEndpoint = `${baseUrl}heroes`;

export const getHeroesTypesEndpoint = `${baseUrl}types`;

export const postHeroEndpoint = getHeroesEndpoint;

export const getHeroByIdEndpoint = (id: string) => {
  return `${baseUrl}heroes/${id}`;
};

export const deleteHeroByIdEndpoint = (id: string) => {
  return `${baseUrl}heroes/${id}`;
};
