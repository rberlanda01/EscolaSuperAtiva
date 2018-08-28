import React from 'react'
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';

import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"


const Inicio = () => {
    return (
        <div className="jumbotron ">
            <Container className="rdp">
                <h2 className="h1-responsive font-weight-bold text-center my-5"><p>Noticias</p></h2>
                <section className="my-5" />
                <div className="row">
                    <div className="col-lg-5 col-xl-4">
                        <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">

                            <img className="img-fluid" src="http://lavish-aunt.surge.sh/img/blog1.jpg" alt="Sample image" />
                            <a>
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>


                    </div>

                    <div class="col-lg-7 col-xl-8">
                        <h3 className="font-weight-bold mb-3 p-0"><strong>Aula de Inglês 1° ano</strong></h3>
                        <p className="lead grey-text text-left mx-auto mb-5">Na aula de inglês os alunos do 1° ano estão trabalhando sobre as partes do corpo , e confeccionaram um lindo robô.</p>
                        <p>by <a class="font-weight-bold">Prof Paula</a>, 18 Outubro de 2018</p>
                        <Button href="/Novidades" color="amber" size="md" className="mb-lg-0 mb-4 waves-light " >Saber mais</Button></div>
                </div>
                <hr class="my-5" />
                <section className="my-5" />
                <div className="row">
                    <div className="col-lg-5 col-xl-4">
                        <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">

                            <img className="img-fluid" src="http://lavish-aunt.surge.sh/img/blog2.jpg" alt="Sample image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>


                    </div>

                    <div class="col-lg-7 col-xl-8">
                        <h3 className="font-weight-bold mb-3 p-0"><strong>Artesanato no Integral D</strong></h3>
                        <p className="lead grey-text text-left mx-auto mb-5">Mais uma vez o integral nos surpreendeu. Confecção de porta treco com caixinha de leite.ficou lindo 😍.</p>
                        <p>by <a class="font-weight-bold">Prof Juliana</a>, 12 Maio de 2018</p>
                        <Button href="/Escola" color="unique" size="md" className="mb-lg-0 mb-4 waves-light">Saber mais</Button>
                    </div>
                </div>
                <hr class="my-5" />
                <section class="my-5" />
                <div class="row">
                    <div class="col-lg-5 col-xl-4">
                        <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">

                            <img class="img-fluid" src="http://lavish-aunt.surge.sh/img/blog3.jpg" alt="Sample image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>


                    </div>

                    <div class="col-lg-7 col-xl-8">
                        <h3 className="font-weight-bold mb-3 p-0"><strong>Dia dos Pais</strong></h3>
                        <p className="lead grey-text text-left mx-auto mb-5">"Um Pai é alguém para se orgulhar, alguém para se agradecer e especialmente alguém para se amar." Um Feliz dia dos Pais.😍</p>
                        <p>by <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
                        <Button className="margbtn" color="dark-green" size="sm" >Saber mais</Button>

                    </div>
                </div>

            </Container>
        </div >
    );
}
export default Inicio;