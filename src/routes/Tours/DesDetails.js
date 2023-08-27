import React from 'react'
import Days from './Days'
import ContactForm from '../../components/ContactForm'
import "./DesDetails.css"
import {Tabs, Tab} from 'react-bootstrap-tabs';
import {Col,Row, Container} from 'react-bootstrap'
import img1 from '../../assets/arunachal1.jpg'
import {RxClock} from 'react-icons/rx'
import {HiLocationMarker} from 'react-icons/hi'
import {AiOutlineTag} from 'react-icons/ai'


const DesDetails = () => {
  return (
    <div className='mainsection'>
        {/* MAIN */}
        <div className="mainlay1">
            {/* LEFT */}
            <div className="leftlay1">
            <div className="deshead1">Bali - Nuda Penida Island Tour</div>
            <div  style={{fontSize:"1rem", color:"#4F5231", fontWeight:"500"}} className="desicons1">
                <div><RxClock style={{fontSize:"1.3rem", color:"#2D728F", fontWeight:"600"}}/> 4 days - 3 nights</div>
                <div><HiLocationMarker  style={{fontSize:"1.3rem", color:"#2D728F", fontWeight:"600"}}/> Bali, Indonesia</div>
                <div><AiOutlineTag  style={{fontSize:"1.3rem", color:"#2D728F", fontWeight:"600"}}/> Adventure, Culture/Nature, Popular</div>
            </div>
            {/* IMAGES DISPLAY */}
            <div className='desimages'>
            <div>
            <Row style={{margin:"1rem 0",padding:"1rem 0"}}>
                <Col className='col1'>
                <img style={{height:"100%", width:"100%", padding:"0.2rem", borderRadius:"2rem"}} alt="aaa" src={img1}/>
                </Col>
                <Col className='col2'>
                <img style={{height:"100%", width:"100%", padding:"0.2rem", borderRadius:"2rem"}} alt="aaa" src={img1}/>
                </Col>
              
                
            </Row>
        
    </div>
            </div>
            {/* TABS */}
            <Tabs style={{margin:"1rem 0", minHeight:"40vh"}} onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label="Overview">
            <div className='desoverview'>
                <div className='desoverviewhead'>Overview</div>
                <div className='desoverviewdesp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi doloribus beatae voluptatem dolorum.
                 Aspernatur ipsum id ut. Enim, ipsa consequuntur veniam voluptate sequi ullam id laboriosam dicta error exercitationem.</div>
            </div>

            <div className="desitinerary">
                <Days 
                head="Day 1"
                day="01"
                l1="Breakfast"
                l2="Lunch"
                l3="Dinner"
                />
                <Days 
                head="Day 2"
                day="02"
                l1="Breakfast"
                l2="Lunch"
                l3="Dinner"
                />
            </div>
             {/* REVIEWS */}
             <div className="desreviewhead">
                <div className='desreviewcard'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nam placeat illum officiis minus ducimus. Modi magnam a cum accusamus, 
                        quas quaerat voluptatibus obcaecati alias quibusdam hic ducimus, quisquam aperiam facilis.</p>
                </div>
            </div>
            </Tab>
            <Tab label="What's Included">
                  {/* INCLUDED */}
            <div className="includedmain">
                <div className="includedtext">What's Included?</div>
                <ul>
                    <li>Pick Up</li>
                    <li>Tour Guide</li>
                </ul>
            </div>
            </Tab>
            {/* TAB 3 */}
            <Tab label="Gallery">
                  {/* INCLUDED */}
            <div className="includedmain">
                <div className="includedtext">What's Included?</div>
                <ul>
                    <li>Pick Up</li>
                    <li>Tour Guide</li>
                </ul>
            </div>
            </Tab>
            </Tabs>
           
          
           
            </div>
            {/* RIGHT */}
            <div className="rightlay1">
                <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default DesDetails