"use client";

import { authClient } from "@/lib/auth-client";
import { Dropdown } from "@heroui/react";
import { useRouter } from "next/navigation";

export const Logout = () => {
	// Router hook
	const router = useRouter();

	// Handler for logout
	const handleLogout = async () => {
		await authClient.signOut();
		router.push("/auth/login");
	};

	return (
		<Dropdown.Item
			textValue="Logout"
			onClick={handleLogout}
			className="text-base hover:bg-zinc-800 transition-colors duration-200 rounded-xl"
		>
			Logout
		</Dropdown.Item>
	);
};
