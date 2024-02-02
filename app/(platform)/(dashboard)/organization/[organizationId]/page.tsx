import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Board from "./board";
import { create } from "@/action/create-board";
import { Form } from "./form";

interface Board {
    id: string;
    title: string;
    // Otras propiedades...
}


const OrganizationIdPage = async () => {

    const boards = await db.board.findMany();



    return (
        <div className="flex flex-col space-y-4">
            <Form />


            <div className="space-y-2">
                {boards.map((board: Board) => (
                    <Board key={board.id} title={board.title} id={board.id} />
                ))}
            </div>

        </div>
    )
}
// cada pagina que uino crea esd un server component - excep is rendered insaid client component -> use client
export default OrganizationIdPage
