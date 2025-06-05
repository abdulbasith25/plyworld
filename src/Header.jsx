import Logo from './Logo';
import Nav from './Nav';
const Header=() =>{
return (
    <header className="bg-amber-100 bg-opacity-100 sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-2">
       <Logo />
       <Nav />
        <h1>
            
        </h1>
    </header>
);


};
export default Header;