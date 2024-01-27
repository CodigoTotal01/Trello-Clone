const IdPage = ({
    params
}: {
    params: { id: string }
}) => {
    return (
        <div>
            IP: {params.id}
        </div>
    )
}


export default IdPage;


//! Ahora al acceder a `users` podemos acoplar el id `users/1` y funcionara 