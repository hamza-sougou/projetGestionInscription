const express = require('express')
const mysql = require('mysql')
const port = 3020;

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.get("/affiche",(req,res)=>{
    const requeteSql = 'SELECT * FROM unetable'
    db.query(requeteSql,(err,resultat)=>{
        if(err) throw err
        console.log(resultat)
        res.send({resultat})
        
    })
})

/*CONNECTION*/

//ETUDIANT
app.get("/connexion/etudiant/:mail/:mdp",(req,res)=>{
    const requeteSql = `SELECT * FROM etudiant WHERE mail ='${req.params.mail}' AND mdp= '${req.params.mdp}' `
    db.query(requeteSql,(err,resultat)=>{
        if(err) throw err
        console.log(resultat)
        res.send(resultat)
        
    })
})

app.get("/listeEtudiant",(req,res)=>{
    const requeteSql = `SELECT * FROM etudiant WHERE STATUS = 'attente'`
    db.query(requeteSql,(err,resultat)=>{
        if(err) throw err
        console.log(resultat)
        res.send(resultat)
        
    })
})
app.get("/inscription/:nom/:prenom/:mail/:date/:mdp/:annee/:filiere",(req,res)=>{

     
    const user ={
         nom:`${req.params.nom}`,
         prenom : `${req.params.prenom}`,
         mail : `${req.params.mail}`,
         date_naissance : `${req.params.date}`,
         mdp : `${req.params.mdp}`,
         annee_inscription : `${req.params.annee}`,
         filiere : `${req.params.filiere}`,
    }
    const sqlQuery = "INSERT INTO etudiant SET ?";
    db.query(sqlQuery, user, (err, result)=>{
         if(err) throw err;
         console.log(result);
         res.send({status:true})
    })
})
app.get("/inscription/valider/:id",(req,res)=>{

    const sqlQuery = `UPDATE etudiant SET status='inscrit' WHERE id = '${req.params.id}' `
    db.query(sqlQuery,(err, result)=>{
         if(err) throw err;
         console.log(result);
         res.send(result)
    })
})
app.get("/inscription/rejeter/:id",(req,res)=>{

    const sqlQuery = `UPDATE etudiant SET status='rejeter' WHERE id = '${req.params.id}' `
    db.query(sqlQuery,(err, result)=>{
         if(err) throw err;
         console.log(result);
         res.send(result)
    })
})



//ADMINISTRATEUR

app.get("/connexion/admin/:mail/:mdp",(req,res)=>{
    const requeteSql = `SELECT * FROM admin WHERE mail_admin ='${req.params.mail}' AND mdp_admin= '${req.params.mdp}' `
    db.query(requeteSql,(err,resultat)=>{
        if(err) throw err
        console.log(resultat)
        res.send(resultat)
        
    })
})




//CONNECTION
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'inscription'
})

















































//CONNECTING
db.connect(err=>{
    if(err) throw err;
    console.log('MYSQL DEMARER...')
})

app.listen(port,()=>{
    console.log(`DEMARRER SUR PORT ${port}`)
})


