async function moderatePost(content) {
  console.log("Sending to Claude...");
  const claudeResponse = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        approved: true,
        reason: "Content is safe and appropriate"
      });
    }, 1500);
  });
  console.log("Claude responded:", claudeResponse);
  return claudeResponse;
}
async function createPost(userId, content) {
  console.log("User creating post:", content);
  const moderation = await moderatePost(content);
  if (moderation.approved) {
    console.log("Post approved and published ✅");
  } else {
    console.log("Post rejected ❌ Reason:", moderation.reason);
  }
}
createPost(1, "Hello from TheHarmony platform!");