// Las carpetas que adelante tienen _ son

import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

//carpetas que no se renderizan como paginas, son componentes que se usan en otras paginas
export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 border-b shadow bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex itemscenter w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="outline" asChild>
                        <Link href="/sing-in">Login</Link>
                    </Button>

                    <Button size="sm" asChild>
                        <Link href="">Get Tassky for free</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
