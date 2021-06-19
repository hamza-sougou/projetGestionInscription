import {Component} from 'react'

class Connexion extends Component {

  
  authen=async(mail,mdp,role)=>{
    const response = await fetch(`/connexion/${role}/${mail}/${mdp}`)
    let body = await response.json()
    // console.log(body)
    if(response.status !=200) throw Error(body.message)
    return body
  }
  connexion=e=>{
    // console.log(e);
    e.preventDefault()
    const mail = document.getElementById('email')
    const mdp = document.getElementById('mdp')
    const role = document.getElementById('role')
    if(mail.value==''||mdp.value==''||role.value=='null'){
      alert("Veuillez remplir tout les champs")
    }else{
      this.authen(mail.value,mdp.value,role.value)
        .then(res=>{
          if(res.connection == false){
            alert('Mot de passe ou email incorrect')
            mail.value = '';
            mdp.value = ''
          }else{
            console.log(res.connection)
            localStorage.setItem('mail',mail.value);
            localStorage.setItem('mdp',mdp.value)
            localStorage.setItem('role',role.value)
            
            window.location.assign(`/dashboard/${role.value}`)
          }
        })
    }

  }
  render(){
      return (
        <div className="page connexion">
        <div className="edge">
        <form>
              <h1>Connectez vous!</h1>
          <input id='email' type="email" placeholder="Email" className="sign-up-form"></input>
          <input id='mdp' type="password" placeholder="Mot de passe" className="sign-up-form"></input>
          <select id='role' className="sign-up-form">
            <option value='null' >Connection entant que:</option>
            <option value='etudiant'>Etudiant</option>
            <option value='admin'>ADMINISTRATEUR</option>
          </select>
          <button onClick={this.connexion} className="connexionbtn">Connexion</button>
            </form>
        </div>
        <img src="femme.png" className="woman"></img>
        </div>
      );

  }
}
  
  export default Connexion;