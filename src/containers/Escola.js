import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import '.././style.css'


const images = [

    'http://superativa.net/images/IMG-20170210-WA0069.jpg ',
    'http://superativa.net/images/IMG-20170210-WA0065.jpg ',
    'http://superativa.net/images/IMG-20170210-WA0055.jpg',
    'http://superativa.net/images/4-estruturas.jpg',
    'http://superativa.net/images/IMG-20170210-WA0061.jpg',
    'http://superativa.net/images/IMG-20170210-WA0067.jpg',
    'http://superativa.net/images/IMG-20170210-WA0067.jpg',
    'http://superativa.net/images/4-estruturas.jpg',

];

const smallImages = [

    'http://superativa.net/images/IMG-20170210-WA0069.jpg',
    'http://superativa.net/images/IMG-20170210-WA0065.jpg',
    'http://superativa.net/images/IMG-20170210-WA0055.jpg',
    'http://superativa.net/images/4-estruturas.jpg',
    'http://superativa.net/images/IMG-20170210-WA0067.jpg',
    'http://superativa.net/images/IMG-20170210-WA0061.jpg',



];
class Fotos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="jumbotron">
                <Container>
                    <section className="my-5" >
                        <h2 className="h1-responsive font-weight-bold text-center my-5">Escola</h2>
                        <p className="lead grey-text w-responsive text-center mx-auto mb-5">Nossa escola possui uma ampla estrutura para atender seu filho, composta por entrata principal, parque de areia, parque de grama, salas de aula/artes adequadas, biblioteca e cantina.</p>

                    </section>
                </Container>
                
                <Container className="mt-5">
                    <div className="mdb-lightbox no-margin ">
                        <Row>
                         
                                <Col md="4" >
                                    <figure >
                                        <img src={smallImages[0]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 0, isOpen: true })} data-max-height="600" />
                                    </figure>
                                </Col>
                                <Col md="4" >
                                    <figure>
                                        <img src={smallImages[1]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 1, isOpen: true })} />
                                    </figure>
                                </Col>
                                <Col md="4" >
                                    <figure>
                                        <img src={smallImages[2]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 2, isOpen: true })} />
                                    </figure>
                                </Col>
                                <Col md="4">
                                    <figure>
                                        <img src={smallImages[3]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 3, isOpen: true })} />
                                    </figure>
                                </Col>
                                <Col md="4">
                                    <figure>
                                        <img src={smallImages[4]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 4, isOpen: true })} />
                                    </figure>
                                </Col>
                                <Col md="4">
                                    <figure>
                                        <img src={smallImages[5]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 5, isOpen: true })} />
                                    </figure>
                                </Col>
                     
            </Row>
          </div>

                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                imageTitle={photoIndex + 1 + '/' + images.length}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length,
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}
          
        </Container>
        </div>
                );
              }
            };
            
  export default Fotos;