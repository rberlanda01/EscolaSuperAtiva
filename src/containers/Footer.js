import React from "react";
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import '.././app.css';

const Footer = () => (
    <div>
       <footer className="page-footer font-small rodape">
            <div className="">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Siga-nos em nossas redes sociais.</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="fb-ic">
                                <i className="fa fa-facebook white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Super Ativa</h6>
                        <p>Nossa escola está preparada para receber crianças dentre 1 a 15 anos.</p>
            </div>
                   <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Ensino</h6>
                        <p>
                            <a href="/Ensino">Ensino Fundamental I</a>
                        </p>
                        <p>
                            <a href="/Ensino">Ensino Fundamental I</a>
                        </p>
                        <p>
                            <a href="/Ensino">Educação Infantil</a>
                        </p>
                        <p>
                            <a href="/Ensino">Período Integral</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                       <h6 className="text-uppercase font-weight-bold"></h6>
                        <p>
                            <a href="/Ensino">Aulas Especiais</a>
                        </p>
                        <p>
                            <a href="/Ensino">Projetos</a>
                        </p>
                        <p>
                            <a href="/Colegio">Estrutura</a>
                        </p>
                      
                    </div>
                   <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contatos</h6>
                        <p>
                            <i className="fa fa-home mr-3"></i> Av. Alderico Bandeira de Lima, 381 - Jardim Paulista, Campina Grande do Sul - PR, 83430-000</p>
                        <p>
                            <i className="fa fa-envelope mr-3"></i> Superativa@contato.com</p>
                        <p>
                            <i className="fa fa-phone mr-3"></i> + 55 (41)3679-4613</p>
                       
                   
                   </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 ">© 2018 Direitos reservados:
      <a href="https://mdbootstrap.com/bootstrap-tutorial/"> Superativa.com.br</a>
            </div>
        </footer>
    </div>
);

export default Footer;