import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
                <Container style={{ marginTop: 20 }}>
                    <Row>
                        <Col size="md-2" background-color="dimgray">
                            <p style={{ marginTop: 30 }}>
                                <img src="../images/hhawmprofile.jpg" alt="hhawm" />
                            </p>
                        </ Col>
                        <Col size="md-10" background-color="dimgray">
                            <p style={{ marginTop: 30 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                                consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
                                sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
                                gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
                                turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
                                tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
                                quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
                                volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
                                mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
                                tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
                            </p>
                            <p>
                                Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
                                malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
                                ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
                                nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
                                Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
                                porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Hero>
        </div >
    );
}

export default About;
