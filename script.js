/*jshint esversion: 6 */
const url = "https://randomuser.me/api/";
const fullName = document.querySelector("#fullname");
const userName = document.querySelector("#username");
const avatar = document.querySelector("#avatar");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const age = document.querySelector("#age");
const city = document.querySelector("#city");
const updateBtn = document.querySelector("#btn");

function getProfile() {
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      var results = data.results;
      console.log(results[0]);
      updateProfile(results[0]);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateProfile(data) {
  fullName.innerHTML = data.name.first + " " + data.name.last;
  userName.innerHTML = data.login.username;
  avatar.src = data.picture.medium;
  email.innerHTML = data.email;
  phone.innerHTML = data.phone;
  age.innerHTML = data.dob.age;
  city.innerHTML = data.location.city;
}

updateBtn.addEventListener("click", getProfile);
