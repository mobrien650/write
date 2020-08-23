import React from 'react';
import { Link } from 'react-router-dom'

import BasePage from 'pages/ui/BasePage';
import HomeViewModel from 'pages/logic/HomeViewModel'

import Break from 'components/Break';

import Avatar from 'assets/images/avatar.png'
import Books from 'assets/images/books-white.png'

export default class HomePage extends BasePage {
    constructor(props) {
        super(props, HomeViewModel)
    }

    getDrawer() {
        return this.props.drawer
    }

    openDrawer(e) {        
        this.getDrawer().openDrawer()
        e.stopPropagation()
    }

    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <div className="hero-left">
                        {/* <img className="hero-image" alt="" src={HeroImage} /> */}
                    </div>
                    <div className="hero-right">
                        <h1>WELCOME</h1>
                        <h2>I'm ME O'Brien</h2>
                        <h3>Fiction Writer | Always Learning</h3>
                        <p>Read my work: <Link to="/" onClick={e => this.openDrawer(e)}>Stories</Link></p>
                    </div>
                </div>
                <section className="Panel">
                    <div>
                        <p>Read my first short story: <Link to="/story/window">The Window</Link></p>
                        <span className="news date">-August 23, 2020</span>
                        <Break />
                        <div className="Split">
                            <div>
                                <p>About the Author Section Bio with more information and more text that makes these paragraphs a bit longer for testing purposes. We need to make sure that the text wraps to multiple lines so we can see what it looks like. That way it is a really, really good test. This might go longer, who knows?</p>
                            </div>
                            <div className="center"><img src={Avatar} alt=""/></div>
                        </div>
                    </div>
                </section>
                <section className="Panel">
                    <div>
                        <p>Check back for upcoming stories in the future.</p>
                    </div>
                </section>
                <section className="Panel"s>
                    <div>
                    <div className="Split Flip">
                            <div className="center"><img src={Books} alt=""/></div>
                            <div>
                                <p>Check my short stories section, I'm always adding new short stories for you to read.</p>
                                <p>You can contact me at abc@123.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}