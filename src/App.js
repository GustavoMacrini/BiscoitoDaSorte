import React, { Component } from 'react';
import './style.css';

class App extends Component{

  constructor (props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.frases = ['Siga os bons e aprenda com eles.', 
                  'O bom-senso vale mais do que muito conhecimento.', 
                  'O riso é a menor distância entre duas pessoas.', 
                  'Deixe de lado as preocupações e seja feliz.',                  
                  'Acredite em milagres, mas não dependa deles.',
                  'A maior barreira para o sucesso é o medo do fracasso.'];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);                  
  }

  quebraBiscoito(){
    let state = this.state;
    let random = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[random] + '"';
    this.setState(state);
  }

  render(){
    return(
      <section id='biscoito'>
        <div className="container">
          <img src={require('./assets/biscoito.png')} className='img'/>
          <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
          <h3 className='frase'>{this.state.textoFrase}</h3>
        </div>
      </section>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <a onClick={this.props.acaoBtn} className='botao'>{this.props.nome}</a>
      </div>
    );
  }
}

export default App;