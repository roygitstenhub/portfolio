import React from 'react';
import {motion} from 'framer-motion';


const Testimonial = () => {
    return (
        <div id='testimonial'>
            <h2>Testimonials</h2>
            <section>

                <TestimonialItem name={'user one '} feedback={'Roysten is a talented web designer who understands the importance of user experience.'} />

                <TestimonialItem name={'user two'} feedback={'Absolutely love my new portfolio website! Roysten created a stunning design that perfectly captures my style.'} />

                <TestimonialItem name={'user three'} feedback={' The portfolio website he built for me has  increased my online visibility.'} />

            </section>
        </div>
    )
}

const TestimonialItem = ({name, feedback}) => {
      
    return (
        <motion.div>
                <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                <h3>{name}</h3>
                <p>❝ {feedback} ❞</p>
        </motion.div>
    )
}



export default Testimonial