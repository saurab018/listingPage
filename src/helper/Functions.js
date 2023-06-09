export function searchItem(input, { searchPeople, searchPlantes }) {
  let people;
  let planets;
  const regex = new RegExp(input, "i");

  if (searchPeople.length > 0) {
    people = searchPeople.filter((item) => {
      return regex.test(item.name);
    });
  }
  if (searchPlantes.length > 0) {
    planets = searchPlantes.filter((item) => {
      return regex.test(item.name);
    });
  }
  return { people: people || [], planets: planets || [] };
}

export const searchResultFunction = (
  { peoples, planetsData, peopleData, planets },
  search
) => {
  let searchPeople = [];
  let searchPlantes = [];
  if (search == "") return [];
  if (peoples == true && planets == true) {
    searchPeople = [...peopleData];
    searchPlantes = [...planetsData];
  }
  if (peoples == true) {
    searchPeople = [...peopleData];
  }
  if (searchPlantes) {
    searchPlantes = [...planetsData];
  }

  return searchItem(search, { searchPeople, searchPlantes });
};
