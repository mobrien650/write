import React from 'react';

import BasePage from 'pages/ui/BasePage';
import HomeViewModel from 'pages/logic/HomeViewModel'

import Break from '../../components/Break';

import HeroImage from '../../assets/images/toa-heftiba-DakDfhDHMSA-unsplash.jpg';

export default class HomePage extends BasePage {
    constructor(props) {
        super(props, HomeViewModel)
    }

    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <div className="hero-left">
                        <img alt="" src={HeroImage} />
                    </div>
                    <div className="hero-right">
                        <h2>ALL ABOUT ME!!</h2>
                        <p>I am an amazing writer and will quit my day job to sell books for 99 cents.</p>
                    </div>
                </div>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut neque at nulla commodo consequat ac eu erat. Pellentesque sed sagittis enim, ac egestas felis. Suspendisse accumsan justo magna, nec placerat tortor porta sed. Cras pellentesque, quam ultrices imperdiet facilisis, metus quam tincidunt sapien, eget commodo urna dolor vel urna. Sed turpis ex, egestas et justo at, volutpat consectetur dolor. Nulla non dapibus est, eget luctus dolor. Donec nec dolor varius, lacinia ante ut, cursus turpis. Etiam sit amet vulputate sapien. Duis ultrices pulvinar eros non ultricies. Praesent vestibulum ultricies sem, vel congue nisl lobortis at. Maecenas convallis ligula sodales, pharetra mi ac, ultricies mi. Donec quam tellus, luctus a cursus in, mollis non augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus id tellus sit amet efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis nunc et lorem fringilla molestie.</p>
                    <Break />
                    <p>Mauris non varius erat, et eleifend sapien. Vivamus id ante vel orci sodales euismod vel sed lectus. Cras ultrices molestie placerat. Integer velit quam, fermentum sit amet neque in, placerat cursus est. Pellentesque non porttitor justo. Vivamus arcu velit, tincidunt et aliquet at, vulputate sed tortor. Morbi a magna non tellus iaculis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida libero venenatis magna tincidunt ultricies. Donec placerat in metus eget blandit. Morbi bibendum facilisis diam, non consectetur urna convallis molestie.</p>
                </section>
                <section>
                    <p>Nullam hendrerit, metus id pulvinar fermentum, tortor sem placerat nulla, quis eleifend mi massa efficitur sapien. Nulla aliquam ante vel arcu varius, in porttitor odio scelerisque. Suspendisse pharetra mattis diam sed lacinia. Aliquam rutrum, urna dapibus dignissim condimentum, neque orci elementum neque, sit amet interdum nulla nisi ultrices enim. Nulla lorem risus, aliquet non massa eu, iaculis iaculis lorem. Donec scelerisque pellentesque nisl in auctor. Etiam blandit justo nisl, quis molestie leo laoreet ut. Phasellus quis placerat justo. Maecenas in tincidunt sem. Donec vel massa pharetra, convallis urna eu, condimentum eros. Suspendisse gravida dui vitae orci condimentum, id cursus sem venenatis. Fusce aliquet, ipsum ac porta luctus, nibh erat consequat quam, non mattis lacus est at tellus. In et diam ut risus scelerisque iaculis viverra quis magna.</p>
                </section>
                <section>
                    <p>Mauris at dui non urna fermentum ornare eget a mi. Suspendisse ligula mauris, scelerisque a auctor eu, pharetra et eros. Cras sem elit, feugiat ac volutpat quis, fermentum a arcu. Cras ac dictum neque. Nullam pellentesque vestibulum risus eget pharetra. Nulla eu elementum enim. Ut luctus diam eros, non pretium quam accumsan sit amet. Proin varius pharetra pellentesque. Proin sit amet sollicitudin sem. Cras quis ipsum consectetur, elementum elit nec, egestas tortor.</p>
                    <p>Ut vel urna luctus tellus pulvinar gravida. Aenean iaculis facilisis mauris, ut placerat quam gravida pellentesque. Donec ut orci non nunc porttitor hendrerit dapibus vitae dui. Pellentesque at imperdiet sem, non elementum metus. Aenean vestibulum orci vitae metus pharetra, eget iaculis mi mollis. Donec volutpat tincidunt libero at porta. Cras volutpat a metus a lacinia. Duis sollicitudin urna eu lacus porttitor, in ornare justo lobortis. Cras tincidunt congue justo interdum ullamcorper. </p>
                </section>
            </React.Fragment>
        )
    }
}