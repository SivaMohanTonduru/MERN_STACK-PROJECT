import React from 'react'

const Tripdetails = () => {
  return (
    <div class="row container-fluid">
                <div class="c0l-3">
                    <div className="card">
                    <ul>
                        <li>RUSSIA</li>
                        <li>MALDIVES</li>
                        <li>AUSTRALIA</li>
                        <li>ENGLAND</li>
                        <li>GERMANY</li>
                        <li>PARIS</li>
                    </ul>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src="somnath.jpg" alt=""></img>
                        <div className="card-body">
                          <h1 className="card-title">MOSCOW CITY</h1>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="https://google.com" class="btn btn-primary">$6000</a>
                        </div>
                      </div>
                </div>
                

          
    </div>
  )
}

export default Tripdetails;