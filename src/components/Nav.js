import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
`

const Container = styled.div`
width:80%;
margin:0 auto;
`
const InnerNav = styled.div`
display:flex;
gap:20em;

`
const Left = styled.div`
display:flex;
align-items:center;
gap:2em;
const 
`
const Right = styled.div`
cursor:pointer;
`
const Logo = styled.h1``
const SearchContainer = styled.div`
border:2px solid black;
border-radius:5px;
width:fit-content;
display:flex;
align-items:center;

`

const SearchInput = styled.input`
padding:1em 2em;
border:none;
outline:none;

`
const NavUl = styled.ul`
display:flex;
list-style-type:none;
gap:2em;
`


const NavList = styled.li`
`
const Nav = () => {
    return (
        <>
            <NavContainer>
                <Container>
                    <InnerNav>
                        <Left>
                            <Logo>Magoso Ent.</Logo>
                            <SearchContainer>
                                <SearchIcon />
                                <SearchInput type="text" placeholder="Search" />
                            </SearchContainer>
                        </Left>
                        <Right>
                            <NavUl>
                                <NavList><Link to="/">Home</Link></NavList>
                                <NavList><Link to="/shop">Shop</Link></NavList>
                                <NavList><Link to="/about">About</Link></NavList>
                                <NavList><Link to="/login">Login/Register</Link></NavList>
                                <NavList><Link to="/contact"> Contact</Link></NavList>
                                <NavList><Link to="/products">Product</Link></NavList>
                                <NavList><Link to="/Categorise">categorise</Link></NavList>
                            


                                <NavList>
                                    <Badge badgeContent={0} color="primary">
                                    <ShoppingCartIcon/>
                                </Badge>
                                </NavList>
                            </NavUl>
                        </Right>
                    </InnerNav>

                </Container>
            </NavContainer>
        </>
    )
}

export default Nav