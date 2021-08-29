console.log("SportsDB");

const searchTeams = () => {

  const searchField = document.getElementById("search");
  const searchFieldText = searchField.value;
  searchField.value = '';

  if (searchFieldText == '') //Mistake
  {
    searchField.value = 'Please give a particular team name';
    
  } 
  else 
  {
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?sname=${searchFieldText}`;
    
       fetch(url)
      .then(res => res.json())
      .then(teams => displayTeams(teams))
        
  }
}

const displayTeams = teams =>
{
    console.log(teams);
    const allTeams = document.getElementById('allTeams');

      teams.forEach( team => 
      {
        // console.log(team);
        const dynamicTeams = document.createElement('div');
        dynamicTeams.classList.add('col');
        dynamicTeams.innerHTML =
        `
        <div class="card" style="width: 18rem;">
        <img src="${team.strStadiumThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h1>${team.strTeam}</h1>
        <p class="card-text">${team.strDescriptionEN}</p>
        </div>
        </div>

        `;

        allTeams.appendChild(dynamicTeams);

      });
      //forEach
  
}
