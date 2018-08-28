import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import '.././style.css'

const images = [
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
];

const smallImages = [
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(133).jpg'
];
class Fotos extends React.Component  {
    
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
  
    render() {
      const { photoIndex, isOpen } = this.state;
      return(
        <div className="jumbotron">
         <Container>
                    <section className="my-5" >
                        <h2 className="h1-responsive font-weight-bold text-center my-5">Fotos</h2>
                        <p className="lead grey-text w-responsive text-center mx-auto mb-5">Nossos principios vão além de apenas educar, queremos que as crianças criem valores e aprimorem suas skills.</p>

                    </section>
                </Container>
        <Container className="mt-5">
          <div className="mdb-lightbox no-margin">
            <Row>
              <Col md="4" className="ftss">
                <figure>
                  <img src={smallImages[0]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 0, isOpen: true })} />
                </figure>
              </Col>
              <Col md="4" className="ftss">
                <figure>
                  <img src={smallImages[1]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 1, isOpen: true })} />
                </figure>
              </Col>
              <Col md="4">
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
              <Col md="4">
                <figure>
                  <img src={smallImages[6]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 6, isOpen: true })} />
                </figure>
              </Col>
              <Col md="4">
                <figure>
                  <img src={smallImages[7]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 7, isOpen: true })} />
                </figure>
              </Col>
              <Col md="4">
                <figure>
                  <img src={smallImages[8]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 8, isOpen: true })} />
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