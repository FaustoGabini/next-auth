import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useRouters } from "next/router";
const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }
  return (
    <div
      style={{
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <div>
        <button
          style={{
            padding: "12px 16px",
            fontSize: "18px",
            color: "white",
            background: "#24292f",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => signIn("github")}
        >
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
