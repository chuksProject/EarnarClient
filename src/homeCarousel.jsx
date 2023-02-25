import React,{useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "./style/home2.css"

const HomeCarousel = () => {

  const [forex,setForex] = useState("")
  const [sports,setSports]= useState("sports")
  const [Cryptocurrency,setCryptocurrency] = useState("")
  const [Binary,setBinary] = useState("")



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1// optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
  return (
    <div>
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  

            { sports === "sports"? 
                   <div className="sport2 cappin">
                       <div className="divS"><span className="Nog">Game No: </span>SP-2022/10/07</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">80.34%</p>
                       <p className="addErn">odd:1.834</p>
                       <div className="EarnLoss">Earned</div>

                   </div>
                    : ""}
                         

{ sports === "sports"?     
                   <div className="sport2 cappin">
                       <div className="divS"><span className="Nog">Game No: </span>SP-2022/10/08</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">56.34%</p>
                       <p className="addErn">odd:1.5634</p>
                       <div className="EarnLoss loss">Lossed</div>
                   </div>
                    : ""}


{ sports === "sports"?  
                   <div className="sport2 cappin">
                       <div className="divS"><span className="Nog">Game No: </span> SP-2022/10/09</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">106.34%</p>
                       <p className="addErn">Odd:2.634</p>
                       <div className="EarnLoss">Earned</div>
                   </div>
                    : ""}

{ sports === "sports"?  
                   <div className="sport2 cappin">
                       <div className="divS"><span className="Nog">Game No: </span> SP-2022/10/09</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">106.34%</p>
                       <p className="addErn">Odd:2.634</p>
                       <div className="EarnLoss">Earned</div>
                   </div>
                    : ""}

{ sports === "sports"?  
                   <div className="sport2 cappin">
                       <div className="divS"><span className="Nog">Game No: </span> SP-2022/10/09</div>
                       <p className="dailyP21">Daily Profit</p>
                       <p className="Dyc">106.34%</p>
                       <p className="addErn">Odd:2.634</p>
                       <div className="EarnLoss">Earned</div>
                   </div>
                    : ""}
               
 








</Carousel>

    </div>
  )
}

export default HomeCarousel