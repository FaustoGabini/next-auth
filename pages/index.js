import { getSession, signOut } from "next-auth/react";

function HomePage({ session }) {
  const { user } = session;
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
      {user ? (
        <div>
          <img
            style={{ borderRadius: "4px", width: "150px" }}
            src={user.image}
          />
          <h1>{user.name}</h1>
          <p>{user.email}</p>
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
            onClick={() => signOut()}
          >
            Log out
          </button>
        </div>
      ) : null}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: session,
    },
  };
};

export default HomePage;
