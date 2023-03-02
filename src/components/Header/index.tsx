import { HeaderContainer } from "./styles";
import {Timer, Scroll} from "phosphor-react"

import stichWebp from "../../img/stich.webp"
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={stichWebp} alt="" />
      <nav>
        <NavLink to="/"><Timer size={24} /></NavLink>
        <NavLink to="/history"><Scroll size={24} /></NavLink>
      </nav>
    </HeaderContainer>
  )
}