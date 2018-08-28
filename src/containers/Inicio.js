import React from 'react'
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';

import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"


const Noticias = () => {
  return (
    <div className="jumbotron ">
      <Container className="rdp">
        <h2 className="h1-responsive font-weight-bold text-center my-5"><p>Bem vindo</p></h2>
        <p className="lead grey-text w-responsive text-center mx-auto  mb-5">Ao colégio Superativa. Conheça nosso trabalho...</p>
        <Row>
          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src="http://superativa.net/images/17.jpg" alt="Sample image" />
              <a><Mask overlay="white-slight" /></a>
            </View>
          </Col>
          <Col lg="7">
            <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Sobre</h6></a>
            <h3 className="font-weight-bold mb-3 p-0"><strong>Proposta pedagógica</strong></h3>
            <p className="lead grey-text text-left mx-auto mb-5"> Nossa proposta, está norteada pelos princípios sociointeracionistas (sociocultural e sócio histórica) de Vygotsky, segundo o qual a aprendizagem se dá, através de processos de interação e mediação.</p>
            <p className=" grey-text text-left mx-auto ">Para saber mais e entender melhor clique no botão.</p>
            <Button href="/Sobre" color="dark-green" size="md" className="waves-light ">Ler mais</Button>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row>
          <Col lg="7" align="left">
            <a className="pink-text " align="right">
              <h6 className="font-weight-bold mb-3">
                <Fa icon="image" className="pr-2"></Fa>
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0" align="right"><strong>Escola</strong></h3>
            <p className="lead grey-text text-left mx-auto mb-5">Nossa escola possui uma ampla estrutura para atender seu filho, composta por entrata principal, parque de areia, parque de grama, salas de aula/artes adequadas, biblioteca e cantina. </p>
            <p className=" grey-text text-left mx-auto">Para saber mais e entender melhor clique no botão.</p>
            <Button href="/Escola" color="unique" size="md" className="mb-lg-0 mb-4 waves-light">Ler mais</Button>
          </Col>
          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4">
              <img className="img-fluid" src="http://superativa.net/images/IMG-20170210-WA0069.jpg" width="100%" height="105%" alt="Sample image" />
              <a><Mask overlay="white-slight" /></a>
            </View>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row>
          <Col lg="5">
            <View className="rounded z-depth-2 mb-lg-0 mb-4">
              <img className="img-fluid" src="http://superativa.net/images/IMG-20170210-WA0055.jpg" width="100%" height="105%" alt="Sample image" />
              <a><Mask overlay="white-slight" /></a>
            </View>
          </Col>
          <Col lg="7">
            <a className="indigo-text"><h6 className="font-weight-bold mb-3"><Fa icon="suitcase" className="pr-2"></Fa>Novidades</h6></a>
            <h3 className="font-weight-bold mb-3 p-0"><strong>Ensino</strong></h3>
            <p className="lead grey-text text-left mx-auto mb-5"> Nosso ensino começa desde a Educação Enfantil, levando seus filhos a darem os primeiros passos, até passar pelo Ensino Fundamental I e Fundamental II. Também temos Periodo Integral, Atividades Extracurriculares e Aulas Especiais.
            </p >
            <p className="grey-text text-left mx-auto">Para saber mais e entender melhor clique no botão.</p>
            <Button href="/Novidades" color="indigo" size="md" className="mb-lg-0 mb-4 waves-light " >Ler mais</Button>

          </Col>
        </Row>
        <hr className="my-5" />
        <Row>
          <Col lg="7">
            <a className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <Fa icon="image" className="pr-2"></Fa>Ensino
            </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0"><strong>Contato</strong></h3>
            <p className="lead grey-text text-left mx-auto mb-5">  Faça parte do nosso presente se preparando para o futuro. Para isso basta formalizar sua matrícula em nossa unidade. Se preferir faça sua pré matrícula e receba mais informações...
           </p>
            <p className="grey-text text-left mx-auto">Para entrar em contato clique no botão.</p>
            <Button href="/Ensino" color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Ler mais</Button>
          </Col>
          <Col lg="5">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4287.323053687743!2d-49.097800646805545!3d-25.36479416769803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56baf2f248981102!2sEscola+Super+Ativa!5e0!3m2!1spt-PT!2sbr!4v1534826847759"
              width="100%" height="105%" frameborder="0" allowfullscreen></iframe>


          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Noticias;