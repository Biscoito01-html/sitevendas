import  './styles.css';
 type Props = {
    descricao: string,
    valor: string,
    foto: string,
    link: string
    
 }   

export default function Card ({ descricao, valor, foto, link  }: Props) { 
    return (
        <div className='card'>
            <a href={link} target="blank">
            <div><img src={foto} style={{ width: 100, height: 100, borderRadius: 10 }} alt="amazon" /> </div>
            <div className='descricao'>{descricao}</div>
            <div className='valor'> <p>{valor}</p></div>
            </a>
        </div>
    )
}