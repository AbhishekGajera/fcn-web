import React from 'react'

const PaidVideo = () => {
  return (
    <div>
    <div className="page-header">
      <h3 className="page-title"> Paid Video </h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Training</a></li>
          <li className="breadcrumb-item active" aria-current="page">Paid Video</li>
        </ol>
      </nav>
    </div>
    <div className="row">
      
     
    
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
          <iframe 
           width="300"
           height="200"
          src="https://www.youtube.com/embed/hVQx_bWNg1Q">
            </iframe>
          </div>
        </div>
      </div>
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
          <iframe
           width="300"
           height="200"
            src="https://www.youtube.com/embed/hVQx_bWNg1Q">
            </iframe>
          </div>
        </div>
      </div>
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
          <iframe
           width="300"
           height="200"
          src="https://www.youtube.com/embed/hVQx_bWNg1Q">
            </iframe>
          </div>
        </div>
      </div>
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
          <iframe
            width="300"
            height="200"
          src="https://www.youtube.com/embed/hVQx_bWNg1Q">
            </iframe>
          </div>
        </div>
      </div>
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
          <iframe
           width="300"
           height="200"
          src="https://www.youtube.com/embed/hVQx_bWNg1Q">
            </iframe>
          </div>
        </div>
      </div>
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
          <iframe
           width="300"
           height="200"
          src="https://www.youtube.com/embed/hVQx_bWNg1Q">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaidVideo