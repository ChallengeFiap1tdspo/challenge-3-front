import { useEffect } from "react";

export default function Equipe(){
      useEffect(() => {
        document.title = "Equipe";
      }, []);

    return(
        <main>
            <h1>EQUIPE</h1>
        </main>
    );
}