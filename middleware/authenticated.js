export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (process.client && !localStorage.getItem("user")) {
        return redirect("/login");
      }
  }