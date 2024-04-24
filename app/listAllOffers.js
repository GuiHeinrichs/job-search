function listAllJobOffers(jobs) {
  const containerItemElement = document.getElementById("content");
  
  jobs.forEach((job) => {
    containerItemElement.innerHTML += `
      <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="${job.companyLogo}" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${job.companyName}</strong> 
              <br/>
              <small class="has-text-light"> Region: ${job.jobGeo}</small> - <small class="has-text-light">${localeDateFormat(job.pubDate)}</small>
              <div class="is-flex is-justify-content-end mb-2" style="gap: 0.5rem"> 
                <span class="is-spaced tag is-info">${job.jobIndustry[0]}</span>
                <span class="is-spaced tag is-primary">${job.jobLevel}</span>
                <span class="is-spaced tag is-primary">${job.jobTitle}</span>
              </div>
              <div class="">
                ${job.jobDescription}
              </div>
            </p>
          </div>
        </div>
      </article>
      <div class="is-flex is-justify-content-right">
        <a class="button is-responsive" href="${job.url}">
          Apply
        </a>
      </div>
    </div>
    `
  })
}