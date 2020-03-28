import React from "react";
import './styles.css';
import logoImg from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva um caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link" >
                        <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                </Link>
                </section>
                <form >
                    <input type="text" placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input type="text" placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}