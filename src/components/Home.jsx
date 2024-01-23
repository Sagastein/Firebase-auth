import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
function Home() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Sign out successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <section className="space-y-3">
        <h2 className="text-3xl">welcome : {auth?.currentUser?.email}</h2>
        {/* button logout */}
        <button
          onClick={handleLogout}
          className="border p-2 px-4 text-center rounded-md bg-slate-600 font-medium hover:scale-105 transition-all duration-200 delay-300 text-white"
        >
          Logout
        </button>
      </section>
    </main>
  );
}

export default Home;
