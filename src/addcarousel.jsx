import React from "react"
import Carousel from "react-multi-carousel";


const Carousel34 =()=>{


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
    return(
        <div>
             <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
<div className="GameNO">
                          <div className="Won1">
                              <div className="WonDiv">
                                  <div   className="No1">GAME NO</div>
                                  <div  className="No1">PDT100101</div>
                              </div>
                              <div className="oods">2.5 ODDS</div>
                              <div  className="WonDiv">
                                  <div className="No1">DATE</div>
                                  <div className="No1">14TH AUGUST,2022</div>
                              </div>
                          </div>
                          <div className="Won loss"> <div className="firstWon"><div className="IF">Loss</div></div></div>
                      </div>

                      
  
                      <div className="GameNO">
                          <div className="Won1">
                              <div className="WonDiv">
                                  <div   className="No1">GAME NO</div>
                                  <div  className="No1">PDT100101</div>
                              </div>
                              <div className="oods">2.5 ODDS</div>
                              <div  className="WonDiv">
                                  <div className="No1">DATE</div>
                                  <div className="No1">14TH AUGUST,2022</div>
                              </div>
                          </div>
                          <div className="Won"> <div className="firstWon"><div className="IF">WON</div></div></div>
                      </div>
                      <div className="GameNO">
                          <div className="Won1">
                              <div className="WonDiv">
                                  <div   className="No1">GAME NO</div>
                                  <div  className="No1">PDT100101</div>
                              </div>
                              <div className="oods">2.5 ODDS</div>
                              <div  className="WonDiv">
                                  <div className="No1">DATE</div>
                                  <div className="No1">14TH AUGUST,2022</div>
                              </div>
                          </div>
                          <div className="Won"> <div className="firstWon"><div className="IF">WON</div></div></div>
                      </div>
                      <div className="GameNO">
                          <div className="Won1">
                              <div className="WonDiv">
                                  <div   className="No1">GAME NO</div>
                                  <div  className="No1">PDT100101</div>
                              </div>
                              <div className="oods">2.5 ODDS</div>
                              <div  className="WonDiv">
                                  <div className="No1">DATE</div>
                                  <div className="No1">14TH AUGUST,2022</div>
                              </div>
                          </div>
                          <div className="Won"> <div className="firstWon"><div className="IF">WON</div></div></div>
                      </div>

                      <div className="GameNO">
                          <div className="Won1">
                              <div className="WonDiv">
                                  <div   className="No1">GAME NO</div>
                                  <div  className="No1">PDT100101</div>
                              </div>
                              <div className="oods">2.5 ODDS</div>
                              <div  className="WonDiv">
                                  <div className="No1">DATE</div>
                                  <div className="No1">14TH AUGUST,2022</div>
                              </div>
                          </div>
                          <div className="Won"> <div className="firstWon"><div className="IF">WON</div></div></div>
                      </div>

                      <div className="GameNO">
                          <div className="Won1">
                              <div className="WonDiv">
                                  <div   className="No1">GAME NO</div>
                                  <div  className="No1">PDT100101</div>
                              </div>
                              <div className="oods">2.5 ODDS</div>
                              <div  className="WonDiv">
                                  <div className="No1">DATE</div>
                                  <div className="No1">14TH AUGUST,2022</div>
                              </div>
                          </div>
                          <div className="Won"> <div className="firstWon"><div className="IF">WON</div></div></div>
                      </div>
                      <div className="GameNO">
                          <div className="Won1">
                              <div className="WonDiv">
                                  <div   className="No1">GAME NO</div>
                                  <div  className="No1">PDT100101</div>
                              </div>
                              <div className="oods">2.5 ODDS</div>
                              <div  className="WonDiv">
                                  <div className="No1">DATE</div>
                                  <div className="No1">14TH AUGUST,2022</div>
                              </div>
                          </div>
                          <div className="Won"> <div className="firstWon"><div className="IF">WON</div></div></div>
                      </div>
</Carousel>

        </div>
    )
}

export default Carousel34;