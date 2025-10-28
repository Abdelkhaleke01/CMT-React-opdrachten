import{ useState } from "react";
import menu from "../data";
import Menu from "./Menu";

function MenuList() {
  const [gerechten, setGerechten] = useState(menu);

  return (
    <section className="menu-container">
      {gerechten.map((gerecht) => (
        <Menu
          key={gerecht.id}
          title={gerecht.title}
          category={gerecht.category}
          price={gerecht.price}
          img={gerecht.img}
          desc={gerecht.desc}
        />
      ))}
    </section>
  );
}

export default MenuList;
