import React from 'react'
import mypic from '../images/photo.JPG'

const About  = ()=>{
    return(
        <section id='1' data-aos='fade-right' className='about'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>

                         <div className='col-lg-6 mt-5 order-1 order-lg-2 header-img'>
                            <img src={mypic} height='450' />
                        </div>


                        <div className='col-md-6 pt-5 order-2 order-1'>
                            <h1 className='text-center'><strong>About</strong> </h1>
                            <div>
                                <p>
                                    Hello! I'm Deshani Kaveesha, currently studying as a third
                                    year undergraduate at the university of Sri Jyewardenepura,
                                    Faculty of Humanities and Social Sciences, Department of
                                    Information Technology. And also, I am doing a BSc Hons ICT
                                    degree.

                                     <br />
                                    <br />So, I would like to prepare my career as a front-end developer.
                                    And I am also interesting UI/UX design side. As an undergraduate of
                                    ICT department, I wish to advance the field of ICT.
                                 </p>
                                <br />
                                <p>
                                    Here are a few technologies I've been working with recently:
                                    <li>JavaScript (ES6+)</li>
                                    <li>HTML5 & (S)CSS3</li>
                                    <li>ReactJS</li>
                                    <li>Bootstrap</li>
                                    <li>Wordpress</li>
                                    {/*<li>Gatsby</li>*/}


                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}
export default About;