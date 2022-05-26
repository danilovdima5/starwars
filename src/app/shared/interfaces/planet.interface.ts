export interface Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface SmallPlanetCard {
  name: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  climate: string;
}

export interface BigPlanetCard {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
}
