"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import { useLocalStorage } from "usehooks-ts"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Accordion } from "@/components/ui/accordion"
import NavItem, { Organization } from "./nav-item"

interface SidebardProps {
    storageKey?: string
}

export const Sidebard = ({ storageKey = "t-sidebar-state" }: SidebardProps) => {

    // se usa para guardar el estado de la barra lateral
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
        storageKey,
        {}
    )
    // se usa para guardar el estado de la organizacion
    const { organization: activeOrganization, isLoaded: isLoadedOrg } =
        useOrganization()

    // se usa para guardar el estado de la organizacion
    const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    })



    const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
        (acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key)
            }
            return acc
        },
        []
    )


    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <Skeleton />
            </>
        )
    }

    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id],
        }));
    };

    return (

        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-4">
                    Workspace
                </span>

                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-auto mr-2"
                >
                    <Link href="/select-org">
                        <Plus className="h-4 w-4">
                        </Plus>
                    </Link>

                </Button>
            </div>


            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                {
                    userMemberships.data.map(({ organization }) => (
                        <NavItem
                            key={organization.id}
                            isActive={activeOrganization?.id === organization.id}
                            isExpanded={expanded[organization.id]}
                            organization={organization as Organization}
                            onExpand={onExpand}
                        >

                        </NavItem>
                    ))
                }
            </Accordion>



        </>
    )

}
