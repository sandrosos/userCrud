import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"users"
});

app.use(express.json());
app.use(cors());


app.get("/", (req,res)=> {
    res.json("hello");
});

app.get("/users", (req,res)=>{
    const q = "SELECT * FROM usuario";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get("/users/:id", (req,res) => {
    const userId = req.params.id;
    const q = "SELECT * FROM usuario WHERE id = ?"

    db.query(q, [userId], (err,data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
})

app.post("/users", (req,res)=> {
    const q = "INSERT INTO usuario (`nome`,`idade`,`rua`,`bairro`,`estado`,`biografia`,`foto`) VALUES (?)"
    const values = [
        req.body.nome,
        req.body.idade,
        req.body.rua,
        req.body.bairro,
        req.body.estado,
        req.body.biografia,
        req.body.foto
    ];

    db.query(q,[values], (err,data)=> {
        if(err) return res.json(err);
        return res.json("Usuario adicionado com sucesso.");
    });
});

app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM usuario WHERE id = ?"

    db.query(q, [userId], (err,data) => {
        if(err) return res.json(err);
        return res.json("Usuario deletado com sucesso.");
    })
})

app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const q = "UPDATE usuario SET `nome`= ?, `idade`= ?, `rua`= ?, `bairro`= ?, `estado`= ?, `biografia`= ? WHERE id = ?"

    const values = [
        req.body.nome,
        req.body.idade,
        req.body.rua,
        req.body.bairro,
        req.body.estado,
        req.body.biografia
    ];

    db.query(q, [...values, userId], (err,data) => {
        if(err) return res.json(err);
        return res.json("Usuario atualizado com sucesso.");
    })
})

app.listen(8800, ()=>{
    console.log("conectado!")
})