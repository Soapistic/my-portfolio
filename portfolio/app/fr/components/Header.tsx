import CardNav from './CardNav';

const Header = () => {
  const items = [
    {
      label: "Projets", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Projets phares", href: "/#projects", ariaLabel: "Featured Projects" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:mohamedelguerjouma@gmail.com", ariaLabel: "Email Mohamed El Guerjouma" },
        { label: "Whatsapp", href: "https://wa.me/+212660726737", ariaLabel: "Whatsapp" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/elguerjoumamohamed/", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
      logo={"./logo.png"}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Header;