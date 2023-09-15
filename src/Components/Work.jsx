import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../assets/Data.json';

const Work = () => {
  return (
    <div id='work'>
      <h2>WORK</h2>

      <section>

        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >

            {
              data.projects.map((item) => (

                <div key={item.title} className='workitem'>
                  <img src={item.imgSrc} alt={item.title} />
                  <aside>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.url} target={'blank'}>View demo</a>
                  </aside>
                </div>
              ))
            }


          </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Work