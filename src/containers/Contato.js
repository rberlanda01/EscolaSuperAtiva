import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import { Router } from 'react-static'
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import '.././app.css'


class Contato extends Component {
    render() {
        return (
            <Container>
                <div className="jumbotron">
                    <div classNameName="row">

                        <form className="text-center border border-light p-5" >
                            <Container>
                                <section className="my-5" >
                                    <h2 className="h1-responsive font-weight-bold text-center my-5">Contato</h2>
                                </section>
                            </Container>
                            <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Nome" />
                            <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
                            <label>Objetivo</label>
                            <select className="browser-default custom-select mb-4">
                                <option value="" disabled>Outras opções</option>
                                <option value="1" selected>Feedback</option>
                                <option value="3">Matrícula</option>
                                <option value="3">Trabalhe conosco</option>
                                <option value="2">Reclamaçãoes</option>
                            </select>
                            <div className="form-group">
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Menssagem"></textarea>
                            </div>
                            <div className="custom-control custom-checkbox mb-4">
                                <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
                                <label className="custom-control-label" for="defaultContactFormCopy">Enviar uma cópia para meu e-mail.</label>
                            </div>
                            <Button className="margbtn " color="primary" size="sm">Enviar</Button>
                            <hr />
                            <div className="card p-3 text-center bbb ">
                                <div className="card-body ">
                                    <h5 className="font-weight-bold my-4">Preencha nosso formulario de pré matrícula.</h5>
                                    <p className="grey-text mb-md-0 mb-5">Responda algumas perguntas para entrar na lista.</p>
                                    <Button className="margbtn" color="info" size="sm">Preencher</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="map">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4287.323053687743!2d-49.097800646805545!3d-25.36479416769803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56baf2f248981102!2sEscola+Super+Ativa!5e0!3m2!1spt-PT!2sbr!4v1534826847759"
                            width="100%" height="450" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </Container>
        );
    };
}

export default Contato;