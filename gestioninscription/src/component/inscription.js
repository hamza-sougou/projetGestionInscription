import {Component} from 'react'

class Inscription extends Component {

  newInscritpion= async(nom,prenom,mail,date,mdp,annee,filiere ='web')=>{
    let response = await fetch(`/inscription/${nom}/${prenom}/${mail}/${date}/${mdp}/${annee}/${filiere}`)
    const body = await response.json()
    console.log(body)
    if(response.status != 200) throw Error(body.message)
    return body
  }
  inscriptionBtn=(e)=>{
    console.log(e);
    e.preventDefault();
    const nom = document.getElementById('nom')
    const prenom = document.getElementById('prenom')
    const mail = document.getElementById('mail')
    const mdp = document.getElementById('mdp')
    const filiere = document.getElementById('filiere')
    const annee = document.getElementById('annee')

    if(nom.value =='' || prenom.value==''|| mail.value==''|| mdp.value==''||filiere.value=='null'||annee.value=='null'){
      alert("Veuillez remplir tout les champs !")
    }else{
      this.newInscritpion(nom.value,prenom.value,mail.value,mdp.value,annee.value,filiere.value)
        .then(res=>{
          localStorage.setItem("role","etudiant")
          localStorage.setItem("mail", mail.value)
          localStorage.setItem("mdp", mdp.value)
          window.location.assign("/dashboard/etudiant")
        })
    }
  }
  componentDidMount(){

  }

  render(){
      return (
        <div className="page inscription">
            <div className="edges">
            <form> 
              <h1>Inscrivez vous!</h1>
          <input id='prenom' type="text" placeholder="Prénom" className="sign-up-form"></input>
          <input id='nom' type="text" placeholder="Nom" className="sign-up-form"></input>
          <input id='mail' type="email" placeholder="Email" className="sign-up-form"></input>
          <input id='mdp' type="password" placeholder="mot de passe" className="sign-up-form"></input>
          <input id='date' type="text" placeholder="date naissaince: AAAA-MM-JJ" className="sign-up-form"></input>

          <input type="text" placeholder="Adresse à Dakar" className="sign-up-form"></input>
          <select id='filiere' className="sign-up-form">
            <option >Filière recherchée</option>
            <option value='gestion des entreprises'>Gestion des entreprises </option>
            <option value='marketing'>Marketing-Communication</option>
            <option value='BFA'>Banque-Finance-Assurance</option>
            <option value='GRH'>Gestion des ressources humaines</option>
            <option value='commerce international'>Commerce international</option>
            <option value='transport logistique'>Transport-Logistique</option>
            <option value='programmation'>Programmation-Développement web</option>
            <option value='reseaux'>Réseaux informatiques et Télécommunication</option>
          </select>
          <select id='annee' className="sign-up-form">
            <option>Année d'inscription</option>
            <option value='L1'>Licence 1</option>
            <option value='L2'>Licence 2</option>
            <option value='L3'>Licence 3</option>
            <option value='M1'>Master 1</option>
            <option value='M2'>Master 2</option>

          </select>
          <button onClick={this.inscriptionBtn} className="inscriptionbtn">Inscription</button>
          
            </form>


            </div>
            <img src="femme.png" className="woman"></img>
        </div>
      );
  }
}
  
  export default Inscription;