import './App.css';

const scientists = [
  {
    id: 'curie',
    name: 'Maria Skłodowska-Curie', 
    profession: 'física y química', 
    awards: '4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)',
    discovery: 'polonio (elemento químico)', 
    imageId: 'marie-curie.jpg'
  },
  {
    id: 'saruhashi',
    name: 'Katsuko Saruhashi', 
    profession: 'geoquímica', 
    awards: '2 (Premio Miyake de geoquímica, Premio Tanaka)', 
    discovery: 'un método para medir el dióxido de carbono en el agua de mar', 
    imageId: 'katsuko-saruhashi.jpg'
  }
];


function ScientistCard({ scientist }) {
  const imageUrl = `/${scientist.imageId}`; 


  return (
    <div className="card">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={scientist.name}
        width={70}
        height={70}
      />
      <ul>
        <li><b>Profesión:</b> {scientist.profession}</li>
        <li><b>Premios:</b> {scientist.awards}</li>
        <li><b>Descubrió:</b> {scientist.discovery}</li>
      </ul>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      {scientists.map(scientist =>
        <ScientistCard key={scientist.id} scientist={scientist} />
      )}
    </div>
  );
}