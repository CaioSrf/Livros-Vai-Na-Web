import { useEffect, useState } from 'react';
import axios from 'axios';
import s from './livrosdoados.module.scss';

export default function LivrosDoados() {
    const [livros, setLivros] = useState([]);

    // Função para buscar os livros da API
    const getLivros = async () => {
        try {
            const resposta = await axios.get("https://api-vnw.onrender.com/livros");
            console.log("Livros recebidos:", resposta.data); // Debug dos dados recebidos

            // Filtrar livros duplicados com base no ID
            const livrosUnicos = Array.from(new Map(resposta.data.map(livro => [livro.id, livro])).values());
            setLivros(livrosUnicos);
        } catch (error) {
            console.error("Erro ao buscar os livros:", error);
        }
    };

    useEffect(() => {
        getLivros();
    }, []);

    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <p className={s.descricao}>
                Confira os livros que já foram doados! Quem sabe um deles não te inspira a ler algo novo?  
            </p>
            <section className={s.containerCards}>
                {livros.length > 0 ? (
                    livros.map((item) => (
                        <section className={s.containerLivros} key={item.id}>
                            <img 
                                src={item.image_url || "https://via.placeholder.com/150"} 
                                alt={`Capa do livro ${item.titulo}`} 
                                onError={(e) => e.target.src = "https://via.placeholder.com/150"} 
                            />
                            <h3>{item.titulo}</h3>
                            <p><strong>Autor:</strong> {item.autor}</p>
                            <p><strong>Gênero:</strong> {item.categoria}</p>
                        </section>
                    ))
                ) : (
                    <p className={s.mensagemCarregando}>Carregando livros...</p>
                )}
            </section>
        </section>
    );
}
