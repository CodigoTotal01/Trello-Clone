//! Requiere un default export 
const TestLayout = ({
    children
}: {
    children: React.ReactNode //? ReactNode es un tipo de dato que puede ser cualquier cosa que renderice React
}) => {
        return (
            <div className="h-full">
                <div>
                    This is a nabvar
                </div>
                <hr />
                {children} //? Esto es lo que renderiza el componente que se le pase como children (del path de la carpeta)
            </div>
        )
}
export default TestLayout;