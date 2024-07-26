import { useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Header({}) {
  let { pathname }: { pathname: string } = useLocation();
  const where = useMemo(
    (): string[] =>
      pathname
        .replace(/%C3%A8/gi, "è")
        .replace(/%C3%A9/gi, "é")
        .split("/").filter( a => a !== "")
      ,
    [pathname]
  );

  return (
    <header className="d-flex align-items-center gap-2 m-2 text-capitalize">
      <NavLink to="/resumes">Acceuil</NavLink>
        <b> ❯ </b>
        {where[0] && where.map( (Tr,index) => <NavLink
            to={`${index > 0 ? "/" + where[index - 1] : ""}/${Tr}`}
            key={index}
            className={({ isActive, isPending }) =>
              isPending ? "placeholder-glow" : isActive ? "active" : ""
            }
          >
            {Tr === "" ? "Acceuil" : Tr}
        </NavLink>)}
    </header>
  );
}
