import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import { Router } from 'react-static'

function regular_map() {
    var var_location = new google.maps.LatLng(40.725118, -73.997699);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map-container-8"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
    });
}


class Ensino extends Component {
    render() {
        return (
            <div className="jumbotron">
                <Container>
                    <section className="my-5" >
                        <h2 className="h1-responsive font-weight-bold text-center my-5">Ensinos</h2>
                        <p className="lead grey-text w-responsive text-center mx-auto mb-5">Nossos principios vão além de apenas educar, queremos que as crianças criem valores e aprimorem suas skills.</p>

                    </section>
                </Container>
                <div className="card-columns">
                    <div className="card p-3 text-right">
                        <div class="card-body">
                            <h5 className="font-weight-bold my-4">Educação Infantil</h5>
                            <p className="grey-text mb-md-0 mb-5">Nessa fase do aprendizado, o aluno é estimulado ao desenvolvimento do raciocínio lógico e crítico, da criatividade e da sensibilidade estética...</p>
                            <Button className="margbtn" color="light-green" size="sm">Leia Mais</Button>
                        </div>
                    </div>
                    <div className="card p-3 text-right">
                        <div className="card-body">
                            <h4 className="font-weight-bold my-4">Estrutura</h4>
                            <p className="grey-text">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                        </div>
                    </div>
                    <div className="card  text-center">
                        <div className="card-body">
                            <h5 className="font-weight-bold my-4">Ensino Fundamenta I</h5>
                            <p className="grey-text mb-md-0 mb-5">O aprendizado nesse nível de ensino acontece por meio de aulas expositivas, saídas pedagógicas, aulas práticas e projetos diferenciados, o que permite ao aluno o aprendizado dinâmico e a consolidação do hábito de estudo.</p>
                            <Button className="margbtn" color="danger" size="sm">Leia mais</Button></div>

                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="font-weight-bold my-4">Período Integral</h5>
                            <p className="grey-text mb-md-0 mb-5">Para ampliar as possibilidades de descobertas, a Escola Super Ativa oferece o período integra, em um projeto que permite o aprendizado mais dinâmico e significativo. Nessa proposta, o início das aulas podem acontecer das 8h00 às 17h...</p>
                            <Button className="margbtn" color="amber" size="sm">Leia Mais</Button>
                        </div>
                    </div>
                    <div className="card p-3 text-left">
                        <div className="card-body">
                            <h5 className="font-weight-bold my-4">Ensino Fundamental II</h5>
                            <p className="grey-text mb-md-0 mb-5">Nessa fase do aprendizado, o aluno é estimulado ao desenvolvimento do raciocínio lógico e crítico, da criatividade e da sensibilidade estética...</p>
                            <Button className="margbtn" color="info" size="sm" >Leia Mais</Button>
                        </div>
                    </div>
                    <div className="card p-3 text-left">

                        <h4 className="font-weight-bold my-4">Aulas Especiais</h4>
                        <p className="grey-text">A escola Super Ativa possui um amplo espaço com uma ótima estrutura para atender seus filhos.</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Ensino;