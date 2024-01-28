import { ReactNode } from "react"

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex items-center justify-center">
            {/* Renderizaremos cualuqiera de loas dos paginas de in y up */}
            {children}
        </div>
    )
}
export default ClerkLayout
