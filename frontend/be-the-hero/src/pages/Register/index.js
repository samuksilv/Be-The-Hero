import React, { useState } from 'react';
import './styles.css';
import logoImg from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();
        try {
            const data = { name, whatsapp, email, city, uf };

            const response = await api.post('ong', data);

            toast.success(`Seu ID de acesso: ${response.data.id}`);

        } catch (error) {
            toast.warn('Falha ao tentar cadastrar.');
        }

    }

    return (
        <div className="register-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link" >
                        <FiArrowLeft size={16} color="#e02041" />
                        Já tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister} >
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        onChange={e => setName(e.target.value)} />
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="whatsapp"
                        onChange={e => setWhatsapp(e.target.value)}
                        maxLength={14} />

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            onChange={e => setCity(e.target.value)} />
                        <input
                            type="text"
                            placeholder="UF"
                            style={{ width: 80 }}
                            onChange={e => setUf(e.target.value)}
                            maxLength={2} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}