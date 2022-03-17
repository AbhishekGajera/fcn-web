import React from 'react'

const FreeVideo = () => {
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Free Video </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Training</a></li>
              <li className="breadcrumb-item active" aria-current="page">Free Video</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          
         
        
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <iframe width="300" height="200" src="https://www.youtube.com/embed/3UF0ymVdYLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default FreeVideo