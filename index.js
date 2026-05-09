function getUserFromDatabase(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, username: "theharmony", email: "gvabeme124ceg@gmail.com" });
    }, 1000); // waits 1 second to simulate database delay
  });
}
function getBrokenUser() {
  const user = getUserFromDatabase(1); // doesn't wait
  console.log("Got user:", user);      // prints before user arrives ❌
}

getBrokenUser();
async function getCorrectUser() {
  const user = await getUserFromDatabase(1);
  console.log("Got user:", user);
}

getCorrectUser();