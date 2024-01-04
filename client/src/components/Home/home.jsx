import './home.css'
import serviceimage from './images/serviceimg.png'
// images
import mainimg from '../../assets/Images/landing-image.png'
import { Card } from '@mui/material'
import whycarbay from './images/whycarbay.png'
import Workshop from './workshop'

// workshop images
import workshap1 from '../../assets/Images/car-work-2.jpg'
import Carservice from './carservice'
import Header from '../../pages/Header/header'
import Footer from '../../pages/Footer/footer'

const Home =(()=>{
    return(
        <>
           <Header/>
           <div className='home-section'>
            <div className="home-con">
                    <div className="home-content">
                        <p>Where Every Journey Begins: Your Ultimate Car Service Destination!</p>
                    </div>
                    <div className="home-image">
                    <img src={mainimg} alt='main-img'/>
                    </div>
                </div> 
                <div className='home-services'>
                    <div className='service-head'>
                        <h1>Car Services for to You</h1>
                        <p>Your ride's care, our expertise, both tailored true, Car services aplenty, all just for you!</p>
                    </div>
                    <div className='service-types-home'>
                        <div className='service-sub'>
                              <img src={serviceimage} alt=''/>
                              <p>General service</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='Denting and painting'/>
                              <p>Denting and painting</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='Ac and electrical repairs'/>
                              <p>Ac and electrical repairs</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='Paint protection film and ceramic coating'/>
                              <p>Paint protection film and ceramic coating</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='Battery replacement'/>
                              <p>Battery replacement</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='General car health check up/others'/>
                              <p>General car health check up/others</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='Tyres services'/>
                              <p>Tyres services</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='Insurance claims'/>
                              <p>Insurance claims</p>
                        </div>
                        <div className='service-sub'>
                              <img src={serviceimage} alt='Door step servicess'/>
                              <p>Door step services</p>
                        </div>
                          
                    </div>
                </div>
                    {/* why car-bay */}
                    <div className='why-carbay'>
                        <div className='why-carbay-content'>
                               <h1>Why CARBAY ?</h1>
                               <p>Choosing Car Bay for your car service means opting for unparalleled expertise, convenience, and dedicated care. Our team of seasoned professionals is committed to providing top-notch service, ensuring your vehicle receives the attention it deserves. With a blend of cutting-edge technology and a customer-centric approach, we prioritize your satisfaction, making your car care experience seamless and reliable. Trust Car Bay for quality service that exceeds expectations, leaving your vehicle in the best hands possible.</p>
                        </div>
                        <div className='why-carby-image'>
                               <h1>Why CARBAY ?</h1>
                               <img src={whycarbay} alt='whycarbay-image'/>
                        </div> 
                    </div>
                    {/* how does it works */}
                     <div className='how-it-works'>
                          <div className='how-it-works-head'>
                            <h1>How does it work ?</h1>
                          </div>
                          <div className='how-it-works-main'>
                              <div className='how-it-works-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>BOOK SERVICE</p>
                              </div>
                              <div className='how-it-works-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>FREE PICKUP</p>
                              </div>
                              <div className='how-it-works-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>VIA SMS / E-MAIL</p>
                              </div>
                              <div className='how-it-works-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>FREE DROP - OFF</p>
                              </div>          
                          </div>
                          
                     </div>
                     {/* Advantages of carbay */}
                     <div className='advantages'>
                        <div className='advantages-head'>
                            <h1>Advantages of CARBAY</h1>
                        </div>
                        <div className='advantages-types'>
                              <div className='advantages-types-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>CASHLESS INSURANCE CLAIM</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>GENUINE OEM SPARE PARTS</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>SKILLED MECHANICS</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>PICKUP & DROP</p>
                              </div> 
                              <div className='advantages-types-sub'>
                                    <img src={serviceimage} alt=''/>
                                    <p>UPTO SAVE ON BILLS</p>
                              </div> 
                        </div>
                     </div>

                     {/* carservice home */}
                 <div className='home-service-main'>
                         <Carservice/>
                 </div>

                <div className='workshop-home'>
                   <h1>About our Workshop</h1>
                   <p>Our work shop and team members</p>
                     <Workshop/>
                </div>
           </div>
        <Footer/>
            
        </>
    )
})
export default Home
