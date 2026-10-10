
const internships = [
  {
    title: "Java Developer Intern",
    company: "Tech Solutions",
    duration: "3 months"
  },
  {
    title: "Python Developer Intern",
    company: "CodeWorks",
    duration: "3 months"
  },
  {
    title: "AI & ML Intern",
    company: "AI Technologies",
    duration: "4 months"
  },
  {
    title: "Web Development Intern",
    company: "Digital World",
    duration: "2 months"
  }
];

const list = document.getElementById("internshipList");
const select = document.getElementById("internship");
const form = document.getElementById("applicationForm");
const submitButton = document.getElementById("submitButton");
const retryButton = document.getElementById("retryButton");
const statusMessage = document.getElementById("statusMessage");

function showMessage(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = "status-message " + type;
}

function loadInternships() {
  list.replaceChildren();

  internships.forEach(function (item) {
    const card = document.createElement("article");
    card.className = "internship-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const company = document.createElement("p");
    company.textContent = "Company: " + item.company;

    const duration = document.createElement("p");
    duration.textContent = "Duration: " + item.duration;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Apply for this role";

    button.addEventListener("click", function () {
      select.value = item.title;
      document.getElementById("application").scrollIntoView({
        behavior: "smooth"
      });
      document.getElementById("fullName").focus();
    });

    card.append(title, company, duration, button);
    list.appendChild(card);

    const option = document.createElement("option");
    option.value = item.title;
    option.textContent = item.title;
    select.appendChild(option);
  });
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!form.reportValidity()) {
    showMessage("Please correct the required fields.", "error");
    return;
  }

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const internship = select.value;
  const message = document.getElementById("message").value.trim();

  if (
    fullName.length < 2 ||
    fullName.length > 60 ||
    message.length < 10 ||
    message.length > 500 ||
    !internships.some(function (item) {
      return item.title === internship;
    })
  ) {
    showMessage("Please check your form details and try again.", "error");
    return;
  }

  if (!email || email.length > 100) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  submitButton.disabled = true;
  retryButton.hidden = true;
  showMessage("Checking your application...", "");

  try {
    // Front-end demonstration only.
    // A real project must send this data to a validated backend API.
    await new Promise(function (resolve) {
      setTimeout(resolve, 600);
    });

    showMessage(
      "Demo successful! Your form passed browser-side validation. " +
      "No application was sent or saved to a server.",
      "success"
    );

    form.reset();
  } catch (error) {
    showMessage(
      "Something went wrong. Please try again.",
      "error"
    );
    retryButton.hidden = false;
  } finally {
    submitButton.disabled = false;
  }
});

retryButton.addEventListener("click", function () {
  retryButton.hidden = true;
  showMessage("You can check the form and submit again.", "");
});

loadInternships();