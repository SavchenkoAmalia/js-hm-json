//! 1

// const bookmarkInput = document.getElementById("bookmarkInput");
// const addBookmarkBtn = document.getElementById("addBookmarkBtn");
// const bookmarkList = document.getElementById("bookmarkList");

// addBookmarkBtn.addEventListener("click", function () {
//   addBookmark();
// });

// function addBookmark() {
//   const url = bookmarkInput.value;
//   if (url) {
//     const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//     bookmarks.push(url);
//     localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//     displayBookmark(url);
//     bookmarkInput.value = "";
//   }
// }

// function loadBookmarks() {
//     const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//     bookmarks.forEach(bookmark => displayBookmark(bookmark));
// }

// function deleteBookmark(url) {
//     let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//     bookmarks = bookmarks.filter(bookmark => bookmark !== url);
//     localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//     bookmarkList.innerHTML = '';
//     loadBookmarks();
// }

// function displayBookmark(url) {
//     const li = document.createElement("li");
//     li.innerHTML =
//         `<a href="${url}" target="_blank">${url}</a>
//         <div>
//             <button onclick="editBookmark('${url}')">Редагувати</button>
//             <button class="delete" onclick="deleteBookmark('${url}')">Видалити</button>
//         </div>`
//     ;
//     bookmarkList.appendChild(li);
// }

// function editBookmark(url) {
//     bookmarkInput.value = url;
//     deleteBookmark(url);
// }

//! 2

// function saveData() {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   localStorage.setItem("username", username);
//   localStorage.setItem("password", password);
// }

// function loadData() {
//   const savedUsername = localStorage.getItem("username");
//   const savedPassword = localStorage.getItem("password");

//   if (savedUsername) {
//     document.getElementById("username").value = savedUsername;
//   }
//   if (savedPassword) {
//     document.getElementById("password").value = savedPassword;
//   }
// }

// document.getElementById("saveBtn").addEventListener("click", saveData);

// window.onload = loadData;
