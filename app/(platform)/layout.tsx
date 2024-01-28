import { ClerkProvider } from "@clerk/nextjs"

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    )
}

export default PlatformLayout
