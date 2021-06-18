import {Component} from 'react'

class Faq extends Component {

    componentDidMount(){
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
              } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
              }
        });
        }
    }
   render(){

   
        return (
        <div className="page faq">
            <h1 className="titre">FAQ</h1>
            <button class="accordion">Où pouvons-nous vous trouver?</button>
            <div class="panel">
                <p>Vous pouvez-nous nous trouver au 03 rue Aristide LeDantec, Dakar ou <a href="https://www.google.com/maps/place/Groupe+SUP'INFO+SENEGAL/@14.670191,-17.429768,15z/data=!4m5!3m4!1s0x0:0xcbe52db97b88c6ec!8m2!3d14.670191!4d-17.429768" target="_blank" className="link">Cliquez-ici!</a></p>
            </div>

            <button class="accordion">Combien coutent les études supérieurs?</button>
            <div class="panel">
                <p>Les études supérieures ont pour coutume d'être assez conséquentes d'un point de vue financier, mais heureusement, le groupe SUP a déja prévu cela et propose des formations accessibles à toutes classes financières</p>
            </div>

            <button class="accordion">Section 3</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
            <button class="accordion">Section 3</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
        </div>
        );
   }
  }
  
  export default Faq;