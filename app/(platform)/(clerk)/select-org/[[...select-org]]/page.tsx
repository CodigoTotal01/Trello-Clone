import { OrganizationList } from "@clerk/nextjs"

export default function CreateOrganizationPage() {
    return (
        // Pide seleccionar una organizacion - Redirecciona con el id de la organización seleccionada
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        />
    )
}
