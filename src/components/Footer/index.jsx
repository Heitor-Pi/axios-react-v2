import { Container } from './styles';

export default function Footer() {
    return (
        <Container>
            &copy; {new Date().getFullYear()} Catálogo de filmesTVMaze. Todos os direitos reservados.
        </Container>
    );
}