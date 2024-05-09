import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const [usuario, setUsuario] = useState({
        nome: "",
        idade: "",
        rua: "",
        bairro: "",
        estado: "",
        biografia: "",
    });
    const [usuarioAntigo, setUsuarioAntigo] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const location = useLocation();

    const usuarioId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [name]: value
        }));
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
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get("http://localhost:8800/users/" + usuarioId);
                setUsuarioAntigo(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        if (usuarioId) {
            fetchUserData();
        }
    }, [usuarioId]);

    const handleClick = async (e) => {
        e.preventDefault();
        // Check for empty fields
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
            await axios.put("http://localhost:8800/users/" + usuarioId, usuario)
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='bg-dark h-100 w-100 p-2 justify-content-center d-flex flex-column'>
            
            {loading ? (
                <p>Carregando...</p>
            ) : usuarioAntigo ? (
                <div className='h-50 d-flex flex-column m-auto col col-md-8 mx-auto p-1 bg-dark text-white p-4 text-center align-content-center align-middle'>
                    <img className='img-fluid m-auto col-sm-5' src={usuarioAntigo[0].foto} alt='Foto de Perfil' />
                    <span><strong>Nome:</strong> {usuarioAntigo[0].nome}</span>
                    <span><strong>Idade:</strong> {usuarioAntigo[0].idade}</span>
                    <span><strong>Rua:</strong> {usuarioAntigo[0].rua}</span>
                    <span><strong>Bairro:</strong> {usuarioAntigo[0].bairro}</span>
                    <span><strong>Estado:</strong> {usuarioAntigo[0].estado}</span>
                    <p className='text-justify h-50'>{usuarioAntigo[0].biografia}</p>
                </div>
            ) : (<p>Erro.</p>)}
            

            <div className='form-body m-auto col col-md-6 mx-auto p-1 justify-content-center align-content-center align-middle d-flex flex-column'>
                <h1 className='title text-white text-center w-100'>Editar Usuário</h1>
                <input className='row form-control m-2' type="text" placeholder='Nome' onChange={handleChange} name='nome' value={usuario.nome} />
                {errors.nome && <div className="text-danger">{errors.nome}</div>}
                <input className='row form-control m-2' type="number" placeholder='Idade' onChange={handleChange} name='idade' value={usuario.idade} />
                {errors.idade && <div className="text-danger">{errors.idade}</div>}
                <input className='row form-control m-2' type="text" placeholder='Rua' onChange={handleChange} name='rua' value={usuario.rua} />
                {errors.rua && <div className="text-danger">{errors.rua}</div>}
                <input className='row form-control m-2' type="text" placeholder='Bairro' onChange={handleChange} name='bairro' value={usuario.bairro} />
                {errors.bairro && <div className="text-danger">{errors.bairro}</div>}
                <input className='row form-control m-2' type="text" placeholder='Estado' onChange={handleChange} name='estado' value={usuario.estado} />
                {errors.estado && <div className="text-danger">{errors.estado}</div>}
                <textarea className='row form-control m-2' rows="3" type="text" placeholder='Biografia' onChange={handleChange} name='biografia' value={usuario.biografia} />
                {errors.biografia && <div className="text-danger">{errors.biografia}</div>}

                <button className='btn btn-success m-5' onClick={handleClick}>Salvar</button>
            </div>
        </div>
    )
}

export default Update;
