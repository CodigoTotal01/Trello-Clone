
import { auth } from "@clerk/nextjs";
import { OrgControl } from "./_components/org-control";

export async function generateMetadata() {
    const { orgSlug } = auth();

};

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <OrgControl />
            {children}
        </div>
    );
}

export default OrganizationIdLayout;