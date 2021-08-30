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
      noresult.appendChild(giveNoResult); //Caught Mistake

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
          <div class="card" w-50">
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
