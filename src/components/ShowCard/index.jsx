import { Card, Info } from './styles';

export default function ShowCard({ title, image, language }) {
    const defaultImage = 'https://via.placeholder.com/210x295?text=No+Image';
    return(
        <Card>
            <img src={image || defaultImage} alt={title} />
            <Info>
                <h3>{title}</h3>
                <p>Idioma: {language || 'Não especificado'}</p>
            </Info>
        </Card>
    )
}