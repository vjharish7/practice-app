const user = {
    id: 1,
    username: "theharmony",
    email: "gvabeme124ceg@gmail.com",
    bio: "Building something real",
    followerCount: 0,
    isLoggedIn: true
};
console.log(user.username);
console.log(user.email);
console.log(user.followerCount);
user.followerCount = 10;
user.bio = "Building a social platform";
user.joinedDate = "2026-05-09";
console.log(user);
const post = {
  id: 1,
  userId: 1,
  content: "My first post",
  likes: 0,
  createdAt: "2026-05-09"
};
const notification = {
  id: 1,
  userId: 1,
  type: "like",
  isRead: false
};
const users = [
  { id: 1, username: "theharmony", followerCount: 10 },
  { id: 2, username: "vjharish7", followerCount: 25 },
  { id: 3, username: "buildersclub", followerCount: 5 }
];
console.log(users.length);
console.log(users[0]);
console.log(users[1].username);
function findUser(username) {
  return users.find(user => user.username === username);
}
function addUser(id, username, followerCount) {
  const newUser = { id, username, followerCount };
  users.push(newUser);
  console.log("User added:", newUser);
}
console.log(findUser("vjharish7"));
addUser(4, "newmember", 0);
console.log(users.length);