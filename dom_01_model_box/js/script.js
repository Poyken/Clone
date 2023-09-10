var openLogin = document.querySelector(".open-login");
var modalAuth = document.querySelector(".modal-auth");
var overlay = document.querySelector(".overlay");
var tabNavItems = modalAuth.querySelectorAll(".tab-nav a");
var loginForm = modalAuth.querySelector(".login-form");
var togglePassword = loginForm.querySelector(".show-password");

var closeModal = function () {
  modalAuth.classList.remove("show");
};

openLogin.addEventListener("click", function () {
  modalAuth.classList.add("show");
});
// modalAuth.classList.add("show");

overlay.addEventListener("click", closeModal);

var currentTab = "#login";

//chuyen tab
tabNavItems.forEach(function (item) {
  //   console.log(item);
  item.addEventListener("click", function (e) {
    e.preventDefault();
    var activeTab = modalAuth.querySelector(".tab-nav a.active");
    // console.log(activeTab);
    activeTab.classList.remove("active");
    this.classList.add("active");
    //click chuyen background bang cach them xoa class

    var hash = this.getAttribute("href");
    // console.log(hash);
    console.log(currentTab);
    var tabPanel = modalAuth.querySelector(".tab-content .tab-panel" + hash);
    // console.log(tabPanel);
    var tabPanelActive = modalAuth.querySelector(
      ".tab-content .tab-panel.active"
    );
    tabPanelActive.classList.remove("active");
    tabPanel.classList.add("active");
    //click chuyen tab(display :none) bang cach them xoa class

    //reset cac field

    if (currentTab !== hash) {
      var formGroupList = loginForm.querySelectorAll(".form-group");
      formGroupList.forEach(function (e) {
        //   console.log(e);
        e.classList.remove("has-error");
        e.querySelector(".error").innerText = "";
        e.querySelector(".field-item").value = "";
      });
      loginForm.querySelector(".msg").innerText = "";
      currentTab = hash;
    }
  });
});

var handleValidate = function (current) {
  var emailEl = current.querySelector(".email");
  var passwordEl = current.querySelector(".password");
  var email = emailEl.value;
  var password = passwordEl.value;
  //   console.log(emailEl.value, passwordEl.value);
  var errors = {};
  if (!email.trim()) {
    errors.email = "vui long nhap email";
  }
  if (!password.trim()) {
    errors.password = "vui long nhap password";
  }
  //   console.log(errors);

  //chon tat ca cac form-group
  var formGroupList = loginForm.querySelectorAll(".form-group");
  //   console.log(formGroupList);
  formGroupList.forEach(function (e) {
    // console.log(e.querySelector(".field-item"));
    var fieldName = e.querySelector(".field-item").classList[1];
    // console.log(fieldName);
    e.classList.remove("has-error");
    e.querySelector(".error").innerText = "";
    if (errors[fieldName]) {
      //   console.log(errors[fieldName]);
      e.classList.add("has-error");
      e.querySelector(".error").innerText = errors[fieldName];
    }
  });

  return errors;
};

//xu ly login form submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("submit");

  var errors = handleValidate(this);
  if (!Object.keys(errors).length) {
    loginForm.querySelector(".msg").innerText = "dang nhap thanh cong";
  } else {
    loginForm.querySelector(".msg").innerText = "";
  }
});

var fieldItemLists = loginForm.querySelectorAll(".field-item");
fieldItemLists.forEach(function (fieldItem) {
  fieldItem.addEventListener("input", function () {
    handleValidate(loginForm);
  });
});

togglePassword.addEventListener("click", function () {
  var password = loginForm.querySelector(".password");
  if (this.classList.contains("hide")) {
    password.type = "text";
    this.classList.remove("hide");
  } else {
    password.type = "password";
    this.classList.add("hide");
  }
});
