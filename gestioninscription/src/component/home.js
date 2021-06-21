import {Component} from 'react'

class Homepage extends Component {
  state={
    user:""
  }

  getInfo = async(mail,mdp)=>{
    const reponse = await fetch(`/connection/etudiant/${mail}/${mdp}`)
    const body = await reponse.json()
    if(reponse.status != 200) throw Error(body.message);
    console.log(body)
    return body
  }

  componentDidMount(){
    this.getInfo()
      .then(res=>{
        const data = res;
        this.setState({user:data})
      })
  }
  render(){
    const {data} = this.state;
    console.log(data)
    return (
      <div className="page home">
        <span className="presentationCont">
        <img src="logosup.png" className="logo"></img>
            <h1 className="presentation">Nous préparons nos étudiants à un avenir radieux!</h1>
        </span>
        <span>
            <img src="office2.png" className="office"></img>
        </span>
      </div>
    );
  }
    
  }
  
  export default Homepage;