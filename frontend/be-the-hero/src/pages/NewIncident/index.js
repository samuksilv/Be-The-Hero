import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from "react-toastify";
import './styles.css';
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const data = { title, description, value };

            const response = await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                },
            });

            console.log(response.data);
            toast.success("Cadastro realizado com sucesso.");

            history.push('/profile');

        } catch (error) {

            console.error(error.response.data);
            toast.warn("Erro ao cadastrar caso, tente novamente.");
        }
    }

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
                <form onSubmit={handleSubmit} >
                    <input
                        required
                        type="text"
                        placeholder="Título do caso"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        required
                        placeholder="Descrição"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        required
                        step={0.01}
                        min={0.00}
                        type="number"
                        placeholder="Valor em reais"
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}