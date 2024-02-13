import Navigation from "@/components/Navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
]

function Footer() {
    return (
        <header className='container'>
           <Navigation navLinks={navItems}/>
        </header>
    );
}

export default Footer;