import { cookies } from "next/headers";

export const getServerSession = async () => {
	const cookieStore = cookies();

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/get-session`, {
		headers: {
			Cookie: (await cookieStore).toString(),
		},
		cache: "no-store",
	});

	const data = await res.json();

	return data;
};
