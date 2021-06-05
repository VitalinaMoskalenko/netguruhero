export type Heroes = {
  full_name: string;
  description: string;
  id: string;
  type: HeroesType;
  avatar_url: string;
};

type HeroesType = {
  id: string;
  name: string;
};
