
import arctic from "../assets/arctic.png"
import bmth from "../assets/bmth.png"
import strokes from "../assets/strokes.png"
import './Clients.css';

export default function Clients() {
  const clients = [
    {
      img: arctic,
      name: 'Arctic Monkeys',
      description: ' Nos gusta la representación que obtenemos por parte de su calzado, único en todos los aspectos.',
    },
    {
      img: bmth,
      name: 'Bring Me The Horizon',
      description: ' El estilo agresivo que obtenemos por parte de Saccarine nos mantiene vigentes como una banda diferente al resto.',
    },
    {
      img: strokes,
      name: 'The Strokes',
      description: 'Sin nuestros distribuidores de calzado, no seriamos igual de buenos.',
    },
  ];

  return (
    <div className="client-container">
      {clients.map((client, index) => (
        <div className="client-card" key={index}>
          <img src={client.img} alt={client.name} />
          <h3>{client.name}</h3>
          <div className="red-line" />
          <p>{client.description}</p>
        </div>
      ))}
    </div>
  );
}
