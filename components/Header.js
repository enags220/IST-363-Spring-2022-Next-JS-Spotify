import { useState } from 'react'

import ButtonUI from './ButtonUI'
import Col from './Col'
import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'
import NavOverlay from './NavOverlay'
import Row from './Row'

import styles from './header.module.scss'


const Header = () => {
    const [isMenuVisable, setMenuVisable] = useState(false);

    return <header className={styles.header}>
        {isMenuVisable &&
            <NavOverlay clickHandler={setMenuVisable} />
        }
        <Container>
            <Row 
                justifyContent="space-between"
                alignItems="center"
            >
                <Col xs='3' sm='3'>
                    <Logo color="white" size={2} />
                </Col>
                <Col xs='9' sm='9' justifyContent="flex-end" alignItems='flex-end'>
                    <Nav />
                    <ButtonUI 
                        icon="menu" 
                        color="white"
                        clickHandler={() => {
                            setMenuVisable(true)
                        }}
                    />
                </Col>
            </Row>
        </Container>
    </header>
}
export default Header;