let jobs = [];

function getInformations() {
  fetch('https://jobicy.com/api/v2/remote-jobs')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar os dados da API');
    }
    return response.json();
  })
  .then(data => {
    jobs = data.jobs;
    listAllJobOffers(jobs);
  })
  .catch(error => {
    console.error('Houve um erro:', error);
  });

}

getInformations();