import React from "react";
import NavHead from "./NavHead";
import NavLinks from "./NavLinks";
import NavMarquee from "./NavMarquee";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navbar = async () => {
    const serverSession = await auth.api.getSession({
        headers: await headers(),
    });
    return (
        <nav>
            <NavHead serverSession={serverSession}></NavHead>
            <NavLinks></NavLinks>
            <NavMarquee></NavMarquee>
        </nav>
    );
};

export default Navbar;
