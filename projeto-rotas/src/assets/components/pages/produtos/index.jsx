import './style.css'

import imgVitoria from './vitoria.png'

export default function Produtos() {

    const camisas = [
        { id: 1, nome: "Camisa Oficial do Vitória", img: imgVitoria },
        { id: 2, nome: "Camisa da Seleção Brasileira", img: "https://placehold.co/300x350/eab308/000000?text=Brasil" },
        { id: 3, nome: "Camisa do Real Madrid", img: "https://placehold.co/300x350/ffffff/0f172a?text=Real+Madrid" },
        { id: 4, nome: "Camisa da Seleção de Portugal", img: "https://placehold.co/300x350/b91c1c/facc15?text=Portugal" }
    ];

    return (
        <div className="page-produtos">
            <h1>Nossos Produtos</h1>
            <p className="subtitle">Modelos exclusivos e materiais de alta performance com entrega ágil.</p>

            <div className="products-grid">
                {camisas.map(camisa => (
                    <div key={camisa.id} className="product-card">
                        <div className="product-image-container">
                            <img src={camisa.img} alt={camisa.nome} />
                        </div>
                        <h3>{camisa.nome}</h3>
                        <button className="btn-buy">Ver Detalhes</button>
                    </div>
                ))}
            </div>
        </div>
    );
}