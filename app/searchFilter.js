const searchElement = document.getElementById("search-button");
searchElement.addEventListener('click', applySearchFilter);

function applySearchFilter(){
  const searchInputValue = document.getElementById("search-input").value;

  const filteredJobs = jobs.filter((job) =>
  job.jobTitle.includes(searchInputValue));
  const containerItemElement = document.getElementById("content");
  containerItemElement.innerHTML = ``;
  listAllJobOffers(filteredJobs);
}