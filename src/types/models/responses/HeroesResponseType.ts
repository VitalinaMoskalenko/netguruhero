import { Heroes } from "../Heroes";

export type HeroesResponseType = {
  data: Heroes[];
  total_count: number;
};
