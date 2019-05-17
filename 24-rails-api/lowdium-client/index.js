const usernameEl = document.querySelector('#username')
const postsEl = document.querySelector('#posts')
const newPostForm = document.querySelector('#new-post-form')

const MOCK_USER = {
  "id": 1,
  "name": "Nicolas",
  "posts": [
    {
      "id": 1,
      "title": "My first post!",
      "content": "A lot of content here...",
      "claps": 10
    },
    {
      "id": 2,
      "title": "My second post!",
      "content": "A lot more content here...",
      "claps": 55
    },
    {
      "id": 3,
      "title": "My third post!",
      "content": "Even more content here...",
      "claps": 12
    }
  ]
}

function addPost(post) {
  const postDiv = document.createElement('div')
  postDiv.className = 'card'
  postDiv.innerHTML = `
    <div class="content">
      <div class="header">${post.title}</div>
      <div class="description">
        ${post.content}
      </div>
      <div class="extra content">
        <a>
          <i class="sign language icon clap"></i>
          <span class='clap-count'>${post.claps}</span> Claps
        </a>
      </div>
    </div>
  `

  const clapIcon = postDiv.querySelector('.clap')
  const clapCount = postDiv.querySelector('.clap-count')

  clapIcon.addEventListener('click', () => {
    post.claps++
    clapCount.innerText = post.claps
  })

  postsEl.append(postDiv)
}

function addPosts(posts) {
  posts.forEach(post => addPost(post))
}

function loadUser(user) {
  usernameEl.innerText = user.name
  addPosts(user.posts)
}

function listenToNewPostForm() {
  newPostForm.addEventListener('submit', event => {
    event.preventDefault()
    const post = {
      title: newPostForm.title.value,
      content: newPostForm.content.value
    }

    addPost(post)
  })
}

function getUserData() {
	return fetch('http://localhost:3000/users/1')
		.then(resp => resp.json())
}

function init() {
  getUserData()
    .then(user => loadUser(user))
  listenToNewPostForm()
}

init()


/// HOMEWORK

// turn this into a function and make it happen when a new post is created
// bonus: build the clap functionality on the server

// fetch('http://localhost:3000/posts', {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify({
// 		title: 'Hello world!',
// 		content: 'I am learning to build APIs! :)',
// 		user_id: 1
// 	})
// }).then(resp => resp.json())
