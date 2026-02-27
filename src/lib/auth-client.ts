import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: "http://localhost:8080",
	basePath: "/api/v1/auth",
	plugins: [
		inferAdditionalFields({
			user: {
				role: {
					type: "string",
				},
			},
		}),
	],
});
