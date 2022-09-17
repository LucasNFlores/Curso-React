import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav>
            <img src="#" alt="Logo" />
            <ul>
                <li><a href="#">Sobre nosostros</a></li>
                <li><a href="#">Mangas</a></li>
                <li><a href="#">Manhwas</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;