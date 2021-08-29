console.log("SportsDB");

const searchTeams = () => {

  const searchField = document.getElementById("search");
  const searchFieldText = searchField.value;
  searchField.value = '';

  if (searchField.value == '') 
  {
    searchField.value = 'Please give a particular team name';
  } 
  else 
  {
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?sname=${searchFieldText}`;

    fetch(url)
      .then(res => res.json())
      .then(data => displayTeams(data.teams))
        
  }
}

const displayTeams = teams =>
{
    console.log(teams);
}
