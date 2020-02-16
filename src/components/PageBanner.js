import React from 'react'

const PageBanner = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                <p>{props.bannerContent.map((item,i) => <>{item}<br/></>)}</p>
            </div>
        </div>
    </section>
)

export default PageBanner
