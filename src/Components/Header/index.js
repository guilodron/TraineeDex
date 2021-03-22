import Logo from '../../assets/logo.svg';
import Hamburguer from '../../assets/hamburguer.svg';
import { Container } from './styles';

const Header = () => {
    return (
        <Container>
            <img src={Logo} alt="logo"/>
            <img src={Hamburguer} alt=""/>
        </Container>
    )
}

export default Header
