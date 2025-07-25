import type React from "react"
import {Inter} from "next/font/google"
import {ThemeProvider} from "@/components/theme-provider"
import {AuthProvider} from "@/components/auth-provider"
import './globals.css'
import {RoomProvider} from "@/components/room-provider";
import {VideoProvider} from "@/components/video-provider";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "Connectify",
    description: "Watch videos together, synchronized across devices",
    generator: 'v0.dev'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <AuthProvider>
            <RoomProvider>
                <VideoProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </VideoProvider>
            </RoomProvider>
        </AuthProvider>
        </body>
        </html>
    )
}