import React from 'react'

import AnimatedHeader from 'components/AnimatedHeader'
import Break from 'components/Break'

export default (props) => {
    return (
        <header>
            <nav className="main-nav">
                <div className="logo monospaced">
                    <AnimatedHeader title="OBwrites" letterDelay={150} split={2} splitDelay={400} blinkCount={15} />
                </div>
            </nav>
            <Break />
        </header>
    )
}
