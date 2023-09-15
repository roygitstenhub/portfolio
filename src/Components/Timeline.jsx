import React from 'react'
import { Education } from '../assets/Education'

const Timeline = () => {
    return (
        <div id='timeline'>
            <div className="timeline-box">
                {
                    Education.map((item,index) => (

                        <TimelineItem education={item.desc} year={item.year}  index={index} />
                        // console.log(item)

                    ))
                }
            </div>
        </div>
    )
}

const TimelineItem = ({ education, year, index }) => {
    return (
        <div className={`timeline-item ${
            index % 2 === 0? 'left-timeline' : 'right-timeline'
        }`}>
            <div>
                <h4>{ education }</h4>
                <span> Year :{year}</span> 
            </div>
        </div>
    )
}

export default Timeline