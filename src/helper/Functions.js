export function searchItem(input, totalData) {
  const regex = new RegExp(input, "i");
  const filteredArray = totalData.filter((item) => {
    return regex.test(item.name);
  });
  return filteredArray;
}
export const searchResultFunction = (
  { peoples, planetsData, peopleData, planets },
  search
) => {
  let totalData;
  if (search == "") return [];
  if (peoples == true && planets == true) {
    totalData = [...peopleData, ...planetsData];
  } else if (peoples == true) {
    totalData = [...peopleData];
  } else {
    totalData = [...planetsData];
  }
  return searchItem(search, totalData);
};
