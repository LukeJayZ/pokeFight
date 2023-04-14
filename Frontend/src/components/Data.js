export default function Data({getPokemon}) {
    
    return (
        <div>
            <ul>
            {getPokemon && getPokemon.map((e) => 
                <li key = {e.id}>{e}</li>
            )}</ul>
        </div>
    )
}

