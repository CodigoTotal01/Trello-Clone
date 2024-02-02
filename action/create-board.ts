"use server"
import { z } from "zod"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export type State = {
    errors?: {
        title?: string[]
    }
    message?: string | null
}
//Validación de esquemas.
const CreateBoard = z.object({
    title: z.string().min(3, {
        message: "El titulo debe contener al menos 3 caracteres",
    }),
})

export async function create(prevState: State, formData: FormData) {
    //Validación de esquemas.
    const validatedFileds = CreateBoard.safeParse({
        title: formData.get("title"),
    })
    //Validación de esquemas.
    if (!validatedFileds.success) {
        return {
            errors: validatedFileds.error.flatten().fieldErrors,
            message: "Missing fields",
        }
    }

    const { title } = validatedFileds.data

    try {
        await db.board.create({
            data: {
                title,
            },
        })
    } catch (error) {
        return {
            message: "Database error",
        }
    }

    //toma la informacion en cache y actualisa solo lo necesario
    revalidatePath("/organization/org_2be451eaqVQSubFJabwFadXVszQ") //wow, this is a hack, but it works
    redirect("/organization/org_2be451eaqVQSubFJabwFadXVszQ")
}
