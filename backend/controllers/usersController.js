import db from "../models/db.js";

export const getUsers = (req, res) => {
    const q = "SELECT * FROM usuario";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const getUserById = (req, res) => {
    const userId = req.params.id;
    const q = "SELECT * FROM usuario WHERE id = ?";
    db.query(q, [userId], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const createUser = (req, res) => {
    const q = "INSERT INTO usuario (`nome`,`idade`,`rua`,`bairro`,`estado`,`biografia`,`foto`) VALUES (?)";
    const values = [req.body.nome, req.body.idade, req.body.rua, req.body.bairro, req.body.estado, req.body.biografia, req.body.foto];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Usuario adicionado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM usuario WHERE id = ?";
    db.query(q, [userId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Usuario deletado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const userId = req.params.id;
    const q = "UPDATE usuario SET `nome`= ?, `idade`= ?, `rua`= ?, `bairro`= ?, `estado`= ?, `biografia`= ? WHERE id = ?";
    const values = [req.body.nome, req.body.idade, req.body.rua, req.body.bairro, req.body.estado, req.body.biografia];
    db.query(q, [...values, userId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Usuario atualizado com sucesso.");
    });
};
