import {Component} from 'react'

class Dashboard extends Component{

  state={
    user:[]
  }
  authentification=async(mail,mdp,role)=>{
    const response = await fetch(`/connexion/${role}/${mail}/${mdp}`)
    let body = await response.json()
    // console.log(body)
    if(response.status !=200) throw Error(body.message)
    return body
  }
  deconnection=()=>{
    localStorage.clear()
    window.location.assign('/connexion')
  }
  componentDidMount(){
    const mail = localStorage.getItem('mail');
    const mdp = localStorage.getItem('mdp')
    const role = localStorage.getItem('role')
    if(mail == ''||mdp==''||role==''){
      window.location.assign('/connexion')
    }else{
      this.authentification(mail,mdp,role)
        .then(res=>{
          this.setState({user:res[0]})
        })
    }
  }
  render(){
    const {user} = this.state;

      const AproposEtudiant = (props)=>{
        console.log(user)
        if(props.status == 'attente'){
          return(
            <h4>
              Votre dossier au nom de, {user.nom}, est en attente 
              vous etes inscrit dans la classe de {user.filiere}
            </h4>
          )
        }else if(props.status == 'inscrit'){
          return(
              
            <h4>
              Felicitation, {user.nom}, vous avez ete accepter 
              avec le matricule SIDK{user.id} dans la classe de 
              {user.filiere}
            </h4>
          )
        }else if(props.status == 'rejeter'){
          
          return(
            <h4>
              Mr/ Mde, {user.nom}, a ete rejeter 
               pour l'inscription dans la classe de {user.filiere}
            </h4>
          )
          
        }else{
          return(
            <h1>Chargement...</h1>
          )
        }
      }
      return (
        <div className="dashboard"> 
                <img src="logosup.png" className="logo"></img>       
          <div>

            
              <AproposEtudiant status={user.status}/>
              
              
          
              
          </div>
          <div className='utilitaire'>
              <button onClick={this.deconnection} className='color2'> Deconnexion</button>
          </div>
        </div>
      );
      
  }
}
  
  export default Dashboard;