const searchElement = document.getElementById("search-button");
const containerItemElement = document.getElementById("content");
const searchInputElement = document.getElementById("search-input");

searchElement.addEventListener('click', applySearchFilter);

function applySearchFilter(){
  searchElement.classList.add("is-loading");
  const filteredJobs = jobs.filter((job) =>
  job.jobTitle.includes(searchInputElement.value));
  searchInputElement.focus();
  containerItemElement.innerHTML = ``;
  if(!filteredJobs) getInformations();
  listAllJobOffers(filteredJobs);
  searchElement.classList.remove("is-loading");
}