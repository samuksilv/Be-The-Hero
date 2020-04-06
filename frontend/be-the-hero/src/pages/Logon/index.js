import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import './styles.css';

export default function Logon() {

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions/login', { id });

            console.log(response);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            console.error(error.response.data);
            toast.warn("Falha no Login, tente novamente.");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin} >
                    <h1>Faça seu logon</h1>
                    <input
                        type="text"
                        placeholder="Sua ID"
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    );

}