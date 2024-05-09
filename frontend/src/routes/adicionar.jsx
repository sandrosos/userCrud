import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Insert = () => {
    const [usuario, setUsuario] = useState({
        nome: "",
        idade: null,
        rua: "",
        bairro: "",
        estado: "",
        biografia: "",
        foto: "",
    });

    const [errors, setErrors] = useState({}); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prev => ({ ...prev, [name]: value }));
        
        if (name === 'idade') {
            if (isNaN(value) || value < 0 || value > 150) {
                setErrors(prev => ({ ...prev, [name]: 'Idade inválida' }));
            } else {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        } else {
            if (value.trim() === '') {
                setErrors(prev => ({ ...prev, [name]: 'Este campo não pode estar vazio' }));
            } else {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const emptyFields = Object.keys(usuario).filter(key => usuario[key].trim() === '');
        if (emptyFields.length > 0) {
            setErrors(prev => ({
                ...prev,
                ...emptyFields.reduce((acc, key) => ({ ...acc, [key]: 'Este campo não pode estar vazio' }), {})
            }));
            return;
        }
        if (Object.values(errors).some(error => error !== '')) {
            return;
        }
        try {
            await axios.post("http://localhost:8800/users", usuario);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='container-fluid bg-dark vh-100 d-flex justify-content-center align-items-center'>
            <div className='form-body w-md-75 w-sm-100 h-100 p-5 justify-content-center align-content-center align-middle d-flex flex-column'>
                <h1 className='title text-white text-center m-5'>Adicionar novo Usuário</h1>
                <input className='form-control m-2' type="text" placeholder='Nome' onChange={handleChange} name='nome' />
                {errors.nome && <div className="text-danger">{errors.nome}</div>}
                <input className='form-control m-2' type="number" placeholder='Idade' onChange={handleChange} name='idade' />
                {errors.idade && <div className="text-danger">{errors.idade}</div>}
                <input className='form-control m-2' type="text" placeholder='Rua' onChange={handleChange} name='rua' />
                {errors.rua && <div className="text-danger">{errors.rua}</div>}
                <input className='form-control m-2' type="text" placeholder='Bairro' onChange={handleChange} name='bairro' />
                {errors.bairro && <div className="text-danger">{errors.bairro}</div>}
                <input className='form-control m-2' type="text" placeholder='Estado' onChange={handleChange} name='estado' />
                {errors.estado && <div className="text-danger">{errors.estado}</div>}
                <textarea className='form-control m-2' rows="3" type="text" placeholder='Biografia' onChange={handleChange} name='biografia' />
                {errors.biografia && <div className="text-danger">{errors.biografia}</div>}
                <input className='form-control m-2' type="text" placeholder='Foto de perfil (url)' onChange={handleChange} name='foto' />
                {errors.foto && <div className="text-danger">{errors.foto}</div>}

                <button className='btn btn-success m-5' onClick={handleClick}>Adicionar</button>
            </div>
        </div>

    );
};

export default Insert;
