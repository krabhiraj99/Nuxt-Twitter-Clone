export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    console.log("In middleware");
    return redirect('/login')
  }

  else if(store.state.authenticated){
    return redirect("/");
  }
}