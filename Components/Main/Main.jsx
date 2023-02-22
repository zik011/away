import React from 'react'
import './main.css'

//images 
import img from '../../Assets/img(1).jpg'


//import icons

import {HiOutlineLocationMarker} from  'react-icons/hi'
import {BsClipboardCheck} from  'react-icons/bs'


//array named Data

const Data =[
  {
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location:'New Zealand',
  grade:'Cultural Relax',
  fees:'$700',
  description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'

},

// {
//   id:2,
//   imgSrc: img,
//   destTitle: 'Langkawi',
//   location:'Kedah',
//   grade:'Cultural Relax',
//   fees:'$300',
//   description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'

// },

// {
//   id:3,
//   imgSrc: img,
//   destTitle: 'Bora Bora',
//   location:'New Zealand',
//   grade:'Cultural Relax',
//   fees:'$700',
//   description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'

// },

// {
//   id:4,
//   ingSrc: img,
//   destTitle: 'Bora Bora',
//   location:'New Zealand',
//   grade:'Cultural Relax',
//   fees:'$700',
//   description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'

// },

// {
//   id:5,
//   ingSrc: img,
//   destTitle: 'Bora Bora',
//   location:'New Zealand',
//   grade:'Cultural Relax',
//   fees:'$700',
//   description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'

// },

// {
//   id:6,
//   ingSrc: img,
//   destTitle: 'Bora Bora',
//   location:'New Zealand',
//   grade:'Cultural Relax',
//   fees:'$700',
//   description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'

// },
// {
//   id:7,
//   ingSrc: img,
//   destTitle: 'Bora Bora',
//   location:'New Zealand',
//   grade:'Cultural Relax',
//   fees:'$700',
//   description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'
// },

// {
//   id:8,
//   ingSrc: img,
//   destTitle: 'Bora Bora',
//   location:'New Zealand',
//   grade:'Cultural Relax',
//   fees:'$700',
//   description:'The epitone of romance,Bora Bora is one of the best travel destinations in the world.'

// },

// {
//   id:9,
//   ingSrc: img,
//   destTitle: 'Bora Bora',
//   location:'New Zealand',
//   grade:'Cultural Relax',
//   fees:'$700',
//   descript
// }
]

export const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* high offer array method ... to do that we shall use 
        a list of object in one array .. 
        1st step an array named data 
        and from that we shall .map() array to fetch
        destination at one. I hope this will make sense to u*/}
      
      {
        Data.map(({id, imgSrc, destTitle,location,grade,fees,
          description })=>{
            return (
              <div key={id} className="singleDestination">
                {/*Here it will return single id from the map array*/}

                <div className="imageDiv">
                  <img src={imgSrc} 
                  alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon"/>
                  </button>


                </div>
              </div>
            
            )
        } )
      }

      </div>

    </section>
  )

}

export default Main;