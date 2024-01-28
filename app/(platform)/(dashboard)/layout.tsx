import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}




export default DashBoardLayout
