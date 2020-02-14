import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import wrightsoft from '../assets/images/logo_MiTek-WRIGHTSOFT.png'

class HomeIndex extends React.Component {
    /*
    <article style={{backgroundImage: `url(${pic05})`}}>
        <header className="major">
            <h3>About</h3>
            <p>Ipsum dolor sit amet</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article>
    <article style={{backgroundImage: `url(${pic06})`}}>
        <header className="major">
            <h3>Etiam</h3>
            <p>Feugiat amet tempus</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article> 
    */

    render() {

        return (
            <Layout>
                <Helmet
                    title="ECalcs, LLC - Home for quality energy and load calculations"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Residential Calculations</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Commercial Calculations</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Duct Design</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Certifications and Tools</h2>
                            </header>
                            <ul className="actions">
                                <li><a href="https://www.wrightsoft.com"><img width={300} src={wrightsoft} /></a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex