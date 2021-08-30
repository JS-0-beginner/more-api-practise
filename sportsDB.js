console.log("SportsDB");

const searchTeams = () => {

  const searchField = document.getElementById('search');
  const searchFieldText = searchField.value;
  searchField.value = '';

  if (searchFieldText == '') //Caught Mistake
  {
    searchField.value = 'Please give a particular team name';
    
  } 
  else 
  {
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchFieldText}`; //Caught Mistake
    
       fetch(url)
      .then(res => res.json())
      .then(data => displayTeams(data.teams))
        
  }
}

const displayTeams = teams =>
{
    // console.log(teams);

    const allTheTeams = document.getElementById('all-Teams');
    allTheTeams.textContent = ''; 

    const noresult = document.getElementById('no-result');
    noresult.textContent = '';

    if(teams == null)
    {
      const giveNoResult = document.createElement('div');
      giveNoResult.innerHTML =
      `<h1 class="text-center p-5 text-secondary" >No Results Found</h1>` ;
      // allTheTeams.appendChild(giveNoResult); //Caught Mistake
      noresult.appendChild(giveNoResult);

    }

    else
    {
      teams.forEach( team =>  
        {
          // console.log(team);
          const dynamicTeams = document.createElement('div');
          dynamicTeams.classList.add('col');
          dynamicTeams.innerHTML =
          `
          <div onclick="loadSelectedTeam(${team.idTeam})" class="card" w-50">
          <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
          <div class="card-body">
          <h1>${team.strTeam}</h1>
          <p class="card-text">${team.strLeague}</p>
          <p class="card-text">${team.strStadiumLocation}</p>
          <p class="card-text">${team.strWebsite}</p>
          </div>
          </div>
  
          `;
  
          allTheTeams.appendChild(dynamicTeams);
  
        });
        //End of this function's forEach
    }
      
  
}

const loadSelectedTeam = teamID =>
{
  console.log(teamID);
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`;

  fetch(url)
  .then(res => res.json())
  .then(data => displaySelectedTeam(data.teams[0]))

}

const displaySelectedTeam = team =>
{
  // console.log(team);
  const particularTeam = document.getElementById('particular-team');
  particularTeam.textContent = '';

  const anotherDiv = document.createElement('div');
  anotherDiv.classList.add('card');
  anotherDiv.innerHTML =
  `
  
  <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${team.strTeam}</h5>
    <p class="card-text">${team.strDescriptionEN.slice(0, 200)}</p>
    <a href="https://www.youtube.com/watch?v=eRrMaxAE-SY&ab_channel=WatchMojo.com" target="_blank" class="btn btn-danger">View</a>
  </div>
  
  

  `;
  particularTeam.appendChild(anotherDiv);

}