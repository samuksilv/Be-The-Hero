import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import {  toast } from "react-toastify";
import api from "../../services/api";


import imgLog from '../../assets/logo.svg';
import './styles.css';

export default function Profile() {

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    function loadIncidents() {
        api.get('profiles/incidents',
            {
                headers: {
                    Authorization: ongId
                }
            }
        )
        .then((response) => {
            setIncidents(response.data);
        })
        .catch((error) => {
            console.error(error.response.data);
            toast.error('Falha ao buscar dados, por favor recaregue a página.');
        });
    }

    useEffect(() => {
        loadIncidents();
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            toast.success("Caso deletado com sucesso.");
            
            loadIncidents();

        } catch (error) {
            console.error(error.response.data);
            toast.error("Erro ao deletar o caso.");
        }

    }

    async function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={imgLog} alt="" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new" >
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map((incident) => (
                    <li key={incident.id} >
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} >
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}