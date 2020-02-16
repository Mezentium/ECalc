import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageBanner from '../components/PageBanner'

import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic14 from '../assets/images/pic14.jpg'

const Residential = (props) => (
    <Layout>
        <Helmet>
            <title>Residential - ECalcs, LLC - Home for quality energy and load calculations</title>
            <meta name="description" content="Residential Calculations" />
        </Helmet>

        <PageBanner title='Residential Calculations' 
                    bannerContent = {['Your Florida Residential Energy Calculations and Heat Load Calculations provider.']} />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Residential servicing</h2>
                    </header>
                    <p>E-Calc LLC is the premier provider of Residential Energy Calculations in Florida: If you are building a new home or 
                        addition or renovating an existing home in Florida, Energy and Load Calculations are required by the State of 
                        Florida to ensure that the HVAC equipment is sized correctly and that the home is being built to current energy 
                        efficiency standards per Florida Energy Code Compliance.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={pic12} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What's Included</h3>
                            </header>
                            <ul>
                                <li>Cover Page</li>
                                <li>EPL Display Card – Energy Performance Level – Posted at job Site</li>
                                <li>R405-2017 Energy Efficiency Calculations – for Permitting or R402-2017 Short Form</li>
                                <li>Checklists and Mandatory Requirements</li>
                                <li>Whole Home Leakage Page for Blower Door Testing (yes we provide blower door testing)</li>
                                <li>Duct Leakage Form if required (yes we provide duct leakage testing too)</li>
                                <li>Manual S and J Calculations – for Permitting – Equipment Sizing (S) and Load (J)</li>
                                <li><Link to="/ductdesign">Duct Design</Link> is available at an additional charge  – Price TBD</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic13} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>What's Required</h3>
                            </header>
                            <ul>
                                <li>Address of Project and / or front door orientation</li>
                                <li>Email Plans to ecals@ecalcs.com – floor plan and wall cross section</li>
                                <li>Window schedule with SHGC and U factors – not totally required if the basic type 
                                    of windows being used is specified (Example: PGT Low E Single Pane Aluminum Impact)</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic14} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Completion</h3>
                            </header>
                            <p>Once the Florida Energy calculations are completed they will be automatically 
                               emailed upon payment using Debit or Credit card as one combine and signed PDF 
                               file.  Cash and checks are accepted, and Florida Energy Calculations can be 
                               hand delivered or mailed if necessary. Payment terms are available upon request.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Residential