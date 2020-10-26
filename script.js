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
    .then(handleErrors)
    .then((res) => {
      console.log(res);
      var data = res.json();
      var results = data.results;
      return results;
    })
    .then(updateProfile(results[0]))
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

function handleErrors(res) {
    if(!res.ok) {
        throw Error(res.status);
    }
    return res;
}

updateBtn.addEventListener("click", getProfile);
