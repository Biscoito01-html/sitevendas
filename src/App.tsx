
import './App.css';
import image from './assets/image-logo.webp'
import Card from './components/Cart';
import { produtos } from './data/data';

function App() {
  return (
    <div className="App">
        <div className="menu-top">
          <div><img src={image} alt="logo" style={{ width: 50, height: 50 }} /></div>
          <ul className='menu'>
            <li className='menu-item'>
              <a className='link-item' target="blank"
                href="https://www.amazon.com.br/gp/search?ie=UTF8&tag=matheusc1991-20&linkCode=ur2&linkId=ae85ea82e95e5976269b5a617f4ec9f1&camp=1789&creative=9325&index=aps&keywords=Produtos">
                Amazon
              </a>
            </li>
            <li className='menu-item'><a className='link-item-hotmart' href="http://">Hotmart</a></li>
          </ul>
        </div>
        <div className='section'>
        <h1>Lista da Amazon</h1>
          {produtos.map((p) => <Card key={p.descricao} descricao={p.descricao} valor={p.valor} foto={p.fotos}	link={p.link}/>)}
          
        </div>
      </div>
  );
}

export default App;
