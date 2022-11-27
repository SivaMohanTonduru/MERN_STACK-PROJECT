import React from 'react'

const Home = () => {
  
 const  add=(e)=>{

  e.preventDefault()
   let table=document.getElementById('table')
   let id=document.getElementById('id').value;
   let title=document.getElementById('title').value;
  let  source=document.getElementById('source').value;
  let  destination=document.getElementById('destination').value;
  let  travellers=document.getElementById('travellers').value;
  let  hoteltype=document.getElementById('hotel').value;
 let   hotelincludes=document.getElementById('includeshotel').value;
  let  vehicle=document.getElementById('vehicle').value;
 let   row=table.insertRow();
 let   col1=row.insertCell(0);
 let   col2=row.insertCell(1);
 let   col3=row.insertCell(2);
 let   col4=row.insertCell(3);
 let   col5=row.insertCell(4);
 let   col6=row.insertCell(5);
  let  col7=row.insertCell(6);
 let   col8=row.insertCell(7);

    col1.innerHTML=id;
    col2.innerHTML=title;
    col3.innerHTML=source;
    col4.innerHTML=destination;
    col5.innerHTML=travellers;
    col6.innerHTML=hoteltype;
    col7.innerHTML=hotelincludes;
    col8.innerHTML=vehicle;
    console.log(id)
 }



  return (
    <div>
      <div className='navbar bg-dark'>
        <h3 className='navbar-brand font-weight-bold btn btn-primary'><img src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="loading" height='80px width=80px'></img>Plan-My-Trip</h3>
        <h3 className='navbar-brand font-weight-italic btn btn-warning'><img src="https://images.unsplash.com/photo-1558659616-7742131dcfbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9yZCUyMHNoaXZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="loading" height='80px width=80px'></img>TRIPS TO HINDU TEMPLES and TOURIST GUIDES<img src="https://t4.ftcdn.net/jpg/04/46/86/15/360_F_446861578_odj0YK3Bxb0hNp9s8it6wPPYGHzPAH8B.jpg" alt="loading" height='80px width=80px'></img></h3>
        <div className=' dropdown btn btn-success font-weight-bold justify-content-center'>Trips
            <a href="https://google.com" className='dropdown-toggle' data-toggle='dropdown'> dropdown</a>
            <div className='dropdown-menu'>
                <a href="https://google.com" className='dropdown-item'>KEDARNATH</a>
                <a href="https://google.com" className='dropdown-item'>BADRINATH</a>
                <a href="https://google.com" className='dropdown-item'>VARANASI</a>
                <a href="https://google.com" className='dropdown-item'>PURI JAGANNATH</a>
                <a href="https://google.com" className='dropdown-item'>DWARAKA</a>
                <a href="https://google.com" className='dropdown-item'>SOMNATH DHAM</a>
            </div>
        </div>        
      </div> <br></br>
        <section>
           <div className='container-fluid'>
            <div className='row'>
              <div className='col-3'>
              <div className='card'>&nbsp;
                <ol>
                      <li><button className='btn btn-success'>SOMNATH</button></li>&nbsp;
                       <li><button className='btn btn-info'>DWARAKA</button></li>&nbsp;
                       <li> <button className='btn btn-warning'>VARANASI</button> </li>&nbsp;
                       <li> <button className='btn btn-secondary'>PURI JAGANNADH</button></li>&nbsp;
                       <li> <button className='btn btn-primary'>KEDARNATH</button> </li>&nbsp;
                       <li><button className='btn btn-info'>BADRINATH</button></li>
                </ol>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                      <center>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Somanath_mandir.jpg/1024px-Somanath_mandir.jpg" alt="loading" width='270px' height='150px' ></img></center>
                        <div className="card-body">
                          <h1 className="card-title">SOMNATH DHAM</h1>
                          <p className="card-text">Somnath is a magnificent temple situated in Sagar Kant of Saurashtra in Gujarat state. One of the 12 holy Jyotirlingas of Lord Shiva is in Jyotirlinga here in Somnath.</p>
                          <a href="https://google.com" class="btn btn-secondary">$5000</a>&nbsp;
                          <a href="https://google.com" class="btn btn-primary">BOOK NOW</a>
                        </div>
                      </div>
                </div>
                <div class="col-3">
                    <div class="card">
                     <center><img src="https://www.shutterstock.com/image-photo/one-most-sacred-famous-centres-600w-1103908961.jpg" alt="loading" width='270px' height='150px'></img></center>   
                        <div className="card-body">
                          <h1 className="card-title">BADRINATH</h1>
                          <p className="card-text">Badrinath or Badrinarayana Temple is a Hindu temple dedicated to Vishnu. It is situated in the town of Badrinath in Uttarakhand, India. The temple is also one of the 108 Divya Desams dedicated to Vishnu - holy shrines for Vaishnavas - who is worshipped as Badrinath.</p>
                          <a href="https://google.com" class="btn btn-secondary">$6000</a>&nbsp;
                          <a href="https://google.com" class="btn btn-primary">BOOK NOW</a>
                        </div>
                      </div>
                </div>
                <div class="col-3">
                    <div class="card">
                    <center><img src="https://media.istockphoto.com/id/1156519654/photo/lone-hindu-temple-with-flag-on-arabian-sea-coast-with-wave-breakers.jpg?s=1024x1024&w=is&k=20&c=kq1RxD5saGsf3lpO7sOM1y-lK1WIwJZTjv0NQtZnW1Q=" alt="loading" width='270px' height='150px'></img></center>   
                        <div className="card-body">
                          <h1 className="card-title">DWARAKA</h1>
                          <p className="card-text">The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish, or 'King of Dwarka'</p>
                          <a href="https://google.com" class="btn btn-secondary">$4000</a>&nbsp;
                          <a href="https://google.com" class="btn btn-primary">BOOK NOW</a>
                        </div>
                      </div>
                </div>
                <div class="col-4">
                    <div class="card">
                    <center><img src="https://www.shutterstock.com/image-photo/view-kedarnath-temple-lights-night-600w-1454233511.jpg" alt="loading" width='270px' height='150px'></img></center>   
                        <div className="card-body">
                          <h1 className="card-title">KEDARNATH</h1>
                          <p className="card-text">Kedarnath temple is one of the sacred pilgrimage centre in Northern India, located on the bank of Mandakini river at an altitude of 3584 meters above sea level.</p>
                          <a href="https://google.com" class="btn btn-secondary">$12000</a>&nbsp;
                          <a href="https://google.com" class="btn btn-primary">BOOK NOW</a>
                        </div>
                      </div>
                </div>
                <div class="col-4">
                    <div class="card">
                    <center><img src='https://media.istockphoto.com/id/1069137628/photo/top-of-the-jagannath-temple-puri-odisha-india.jpg?s=1024x1024&w=is&k=20&c=TjNBkUbHRL7nT1qHd2uW8YW5CuT6RU--xHaPZGD8Agc=' alt="loading" width='270px' height='150px'></img></center>   
                        <div className="card-body">
                          <h1 className="card-title">PURI JAGANNADH</h1>
                          <p className="card-text">The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu - one of the trinity of supreme divinity in Hinduism, Puri is in the state of Odisha on the eastern coast of India. </p>
                          <a href="https://google.com" class="btn btn-secondary">$8000</a>&nbsp;
                          <a href="https://google.com" class="btn btn-primary">BOOK NOW</a>
                        </div>
                      </div>
                </div>
                <div class="col-4">
                    <div class="card">
                    <center><img src="https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?s=612x612&w=0&k=20&c=fFpEL17MiQJx5NkkNIVrTsesd2E8b04SCgzjfhUmQ7g=" alt="loading" width='270px' height='150px'></img></center>   
                        <div className="card-body">
                          <h1 className="card-title">VARANASI</h1>
                          <p className="card-text">The Kashi Vishwanath Temple is a famous Hindu temple dedicated to Lord Shiva. It is located in Vishwanath Gali of Varanasi, Uttar Pradesh in India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.</p>
                          <a href="https://google.com" class="btn btn-secondary">$10000</a>&nbsp;
                          <a href="https://google.com" class="btn btn-primary">BOOK NOW</a>
                        </div>
                      </div>
                </div>
            </div>

           </div>
        </section>
        <div className='jumbotron'>
          <center>
            <h3 className='btn btn-success font-weight-bold'>Enter the details</h3>
          <form>
            <input type='number' name='id' placeholder='Enter Id' id='id'/><br/><br/>
            <input type='text' name='title' placeholder='Enter title' id='title'/><br/><br/>
            <input type='text' name='source' placeholder='Enter source' id='source'/><br/><br/>
            <input type='text' name='destination' placeholder='Enter destination' id='destination'/><br/><br/>
            <input type='text' name='travellers' placeholder='Enter number of travellers' id='travellers'/><br/><br/>
            <select type='text' name='hotel' placeholder='choose hotel type' id='hotel'>
              <option>5-star</option>
              <option>3-star</option>
              <option>Normal</option>
              </select><br/><br/>
            <input type='boolean' name='includeshotel' placeholder='chooose option' id='includeshotel'/><br/><br/>
            <input type='boolean' name='vehicle' placeholder='choose option' id='vehicle'/><br/><br/>
            <button class='btn btn-primary' onClick={add}> submit</button>
          </form>
          </center>
        </div>
        <div >
          <center>
          <h2 className='btn btn-success font-weight-bold'>TABLE SHOWS TRVELLERS DETAILS</h2><br></br>
        <table id="table" border="1" style={{fontSsize:'medium',textAlign:"center",borderScolor:"red;"}}>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>SOURCE</th>
                <th>DESTINATION</th>
                <th>NO OF PERSONS</th>
                <th>HOTEL CATEGORY</th>
                <th>INCLUDES HOTEL</th>
                <th>VEHICLE</th>
            </tr>
        </table>
        </center>
        <br></br><br></br>
        <section>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://ihplb.b-cdn.net/wp-content/uploads/2019/01/Akshardham-Temple-Delhi.jpg" alt="First slide" height='800px' width='600px'></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Le_temple_de_Brihadishwara_%28Tanjore%2C_Inde%29_%2814354574611%29.jpg" alt="Second slide" height='800px' width='600px'></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Popular-Temples-in-India.jpg" alt="Third slide" height='800px' width='600px'></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </section><br></br><br></br>
       
        <div className= 'jumbotron'>
            <h2 className='container'>BEST OFFERS AVAILABLE LETS TRAVEL ACROSS THE WORLD</h2>
             <a href="https://google.com" className=' container btn btn-info'>MakeMyTrip</a>
        </div>
        </div>
    </div>
         
                
  )
}

export default Home;