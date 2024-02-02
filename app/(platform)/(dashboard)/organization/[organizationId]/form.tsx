"use client";

import { create } from "@/action/create-board";
import { Button } from "@/components/ui/button";
import { title } from "process";
import { useFormState } from "react-dom";
export type State = {
    errors?: {
        title?: string[]
    }
    message?: string | null
}

export const Form = () => {
    const initialState = { errors: {}, message: null, }
    // @ts-ignore
    const [state, dispatch] = useFormState(create, initialState);

    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Enter a board tittle"
                    className="border-black border p-1"
                />
            </div>
            {
                state?.errors?.title ? (
                    <div>
                        {
                            state?.errors?.title.map((error, index) => (
                                <p key={error} className="text-red-500">{error}</p>
                            )
                            )}
                    </div>
                ) : (<></>)
            }

            <Button type="submit">Submit</Button>
        </form>
    )
}