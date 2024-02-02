import { deleteBoard } from "@/action/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps {
    title: string;
    id: string;
}

const Board = ({ title, id }: BoardProps) => {
    //crea 
    const deleteBoardWithId = deleteBoard.bind(null, id);
    return (
        <form action={deleteBoardWithId} className="flex items-center gap-x-2">
            <p>Board Title: {title}</p>
            <Button type="submit" variant="destructive" size="sm">
                Delete
            </Button>

        </form>


    );
}

export default Board