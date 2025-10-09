import { useEffect } from "react";

export default function Ajuda(){
      useEffect(() => {
        document.title = "Ajuda";
      }, []);

    return(
        <main>
            <h1>Ajuda</h1>
        </main>
    );
}