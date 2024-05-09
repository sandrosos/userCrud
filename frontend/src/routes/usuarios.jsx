import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        const fecthAllUsuarios = async () => {
            try {
                const res = await axios.get('http://localhost:8800/users')
                setUsuarios(res.data);
            }catch(err) {
                console.log(err);
            }
        }
        fecthAllUsuarios()
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/users/"+id)
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container-fluid bg-dark d-flex flex-column justify-content-center align-items-center'>
            <button className='btn btn-primary m-2'>
                <Link className='text-decoration-none text-light' to={"/adicionar"}>Adicionar usuário</Link>
            </button>

            <div className='container mt-2 mb-2 p-2 d-flex justify-content-center flex-wrap'>
                {usuarios.map((usuario) => (
                    <div key={usuario.id} className='card p-4 text-center border border-secondary-subtle m-2 bg-dark text-white col-lg-3 col-md-4 col-sm-6'>
                        <img className='card-img-top h-50 d-flex flex-column justify-content-center align-items-center' src={usuario.foto} alt='Foto de Perfil' />
                        <span className='name mt-3'><strong>Nome:</strong> {usuario.nome}</span>
                        <span><strong>Idade:</strong> {usuario.idade}</span>
                        <span><strong>Rua:</strong> {usuario.rua}</span>
                        <span><strong>Bairro:</strong> {usuario.bairro}</span>
                        <span><strong>Estado:</strong> {usuario.estado}</span>
                        <p className='text-justify h-50'>{usuario.biografia}</p>

                        <div className="btn-group m-1">
                            <button className="btn btn-success">
                                <Link className='text-decoration-none text-light' to={`/editar/${usuario.id}`}>Editar</Link>
                            </button>
                            <button className='btn btn-danger' onClick={()=>handleDelete(usuario.id)}>Apagar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Usuarios;