var posts = [
  {
    title: "title1",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
    tempore sed esse, dolores mollitia magnam aperiam adipisci cum,
    reprehenderit id non voluptate in praesentium sunt perferendis fuga
    officia et aspernatur.`,
    thumbnail:
      "https://fastly.picsum.photos/id/117/500/300.jpg?hmac=X1AgJutKgMNrjN-i96pBeLqMwRhCW2uPo8gaf8FrkqA",
  },
  {
    title: "title2",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
    tempore sed esse, dolores mollitia magnam aperiam adipisci cum,
    reprehenderit id non voluptate in praesentium sunt perferendis fuga
    officia et aspernatur.`,
    thumbnail:
      "https://fastly.picsum.photos/id/117/500/300.jpg?hmac=X1AgJutKgMNrjN-i96pBeLqMwRhCW2uPo8gaf8FrkqA",
  },
  {
    title: "title3",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
    tempore sed esse, dolores mollitia magnam aperiam adipisci cum,
    reprehenderit id non voluptate in praesentium sunt perferendis fuga
    officia et aspernatur.`,
    thumbnail:
      "https://fastly.picsum.photos/id/117/500/300.jpg?hmac=X1AgJutKgMNrjN-i96pBeLqMwRhCW2uPo8gaf8FrkqA",
  },
  {
    title: "title4",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
    tempore sed esse, dolores mollitia magnam aperiam adipisci cum,
    reprehenderit id non voluptate in praesentium sunt perferendis fuga
    officia et aspernatur.`,
    thumbnail:
      "https://fastly.picsum.photos/id/117/500/300.jpg?hmac=X1AgJutKgMNrjN-i96pBeLqMwRhCW2uPo8gaf8FrkqA",
  },
];
// console.log(posts);
var html = ` <div class="posts">
${
  posts?.length
    ? posts
        .map?.(function (post, index) {
          return `<div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
    <img
      src="${post.thumbnail}"
      alt="${post.title}"
    />
    <div>
      <h2>${post.title}</h2>
      <p>
       ${post.excerpt}
      </p>
    </div>
  </div>`;
        })
        .join("")
    : "khong co bai viet"
}
</div>
`;
document.write(html);
console.log(html);
