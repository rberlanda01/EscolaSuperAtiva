import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import { Router } from 'react-static'


class Video extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div id="Video" class="section md-padding bg-grey">

                    <h2 className="h1-responsive font-weight-bold text-center my-5"><p>Vídeo</p></h2>


                    <Container>

                        <div class="embed-responsive embed-responsive-21by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_f5zhj59nac"></iframe>
                        </div>
                    </Container>
                </div>
            </div>

        );
    };
}

export default Video;