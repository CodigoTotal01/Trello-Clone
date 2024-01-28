"use client"

import { UserButton } from "@clerk/nextjs"

const ProtectedPage = async () => {
    return (
        <div>
            {/* Esto hara que se vea como una landing page, no nos redifgira a su propio enlace  */}
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default ProtectedPage
