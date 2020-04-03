import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import imgLog from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={imgLog} alt="" />
                <span>Bem vinda, APAD</span>
                <Link className="button" to="/incidents/new" >
                    Cadastrar novo caso
                </Link>
                <button>
                    <FiPower size={18} color="#E02041" />    
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Caso teste</p>

                    <strong>VALOR:</strong>
                    <p>120</p>

                    <button>
                        <FiTrash2  size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Caso teste</p>

                    <strong>VALOR:</strong>
                    <p>120</p>

                    <button>
                        <FiTrash2  size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Caso teste</p>

                    <strong>VALOR:</strong>
                    <p>120</p>

                    <button>
                        <FiTrash2  size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Caso teste</p>

                    <strong>VALOR:</strong>
                    <p>120</p>

                    <button>
                        <FiTrash2  size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    );
}