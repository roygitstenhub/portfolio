import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import myimg from '../assets/yourimg.png';
const Home = () => {


    const clientcount = useRef(null)
    const Projectcount = useRef(null)

    const animateClientCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => { clientcount.current.textContent = v.toFixed() }
        })
    }

    const animateProjectCount = () => {
        animate(0, 10, {
            duration: 1,
            onUpdate: (v) => { Projectcount.current.textContent = v.toFixed() }
        })
    }

    const aminations = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },

        button: {
            initial: {
                y: '-100%',
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            }
        }

    }
    return (
        <div id='home'>

            <section>
                <div>
                    <motion.h1 {...aminations.h1}>
                        Hi <img decoding="async" src="https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/plugins/ambrox-core/assets/img/4.png" style={{width:'25px',height:'25px'}} alt="Icon" className='hand-img'/> I Am <br /> Roysten Gonsalves
                    </motion.h1>

                    <Typewriter options={{
                        strings: ['A Developer', 'A Designer', 'A Graduate'],
                        autoStart: true,
                        loop: true,
                        cursor: '',
                        wrapperClassName: 'typewriterpara',
                    }} />

                    <div>
                        <a href="mailto:roystongonsalves2002@gmail.com">Hire me</a>
                        <a href="#projects">projects <BsArrowUpRight /> </a>
                    </div>

                    <article>
                        <p>
                            +<motion.span ref={clientcount} whileInView={animateClientCount}></motion.span>
                        </p>
                        <span>clients worldWide</span>
                    </article>

                    <aside>
                        <article>
                            <p>
                                +<motion.span ref={Projectcount} whileInView={animateProjectCount}>500</motion.span>
                            </p>
                            <span>projects Made</span>
                        </article>

                        <article>
                            <p>
                                contact
                            </p>
                            <span style={{ textTransform: 'lowercase' }}>roystongonsalves2002@gmail.com</span>
                        </article>
                    </aside>

                </div>
            </section>

            {/* section two */}
            <section>
                <img src={myimg} alt='roysten' />
            </section>

            <BsChevronDown />
        </div>
    )
}

export default Home