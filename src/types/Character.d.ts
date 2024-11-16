declare interface Character {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    films: string[];
    homeworld: string;
    id: string;
    homeworldDetails:Homeworld;
    imageUrl: string;
  }

  declare interface Homeworld {
    name: string;
    terrain: string;
    climate: string;
    population: string;
  }


  