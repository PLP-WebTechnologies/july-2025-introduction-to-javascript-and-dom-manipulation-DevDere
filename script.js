// === Part 1: Variables and Conditionals (Refined) ===
document.getElementById("check-age-btn").addEventListener("click", () => {
  const age = parseInt(prompt("Please enter your age:"), 10);
  const output = document.getElementById("part1-output");

  if (isNaN(age) || age < 0) {
    output.textContent =
      "⚠️ Invalid input. Please enter a positive number for age.";
    return;
  }

  let category = "";
  if (age <= 2) {
    category = "Baby";
  } else if (age <= 12) {
    category = "Child";
  } else if (age <= 17) {
    category = "Teenager";
  } else if (age <= 25) {
    category = "Young Adult";
  } else if (age <= 60) {
    category = "Adult";
  } else {
    category = "Senior";
  }

  output.textContent = `You are ${age} years old, which places you in the "${category}" category.`;
});

// === Part 2: Functions ===
let nums = [4, 5, 6];
let currentIndex = 0;

function calculateSquare(num) {
  return num * num;
}

document.getElementById("next-square-btn").addEventListener("click", () => {
  const num = nums[currentIndex];
  const square = calculateSquare(num);
  document.getElementById(
    "part2-output"
  ).textContent = `Number: ${num}, Square: ${square}`;

  currentIndex = (currentIndex + 1) % nums.length;
});

// === Part 3: Loops ===
document.getElementById("run-loop-btn").addEventListener("click", () => {
  const outputDiv = document.getElementById("part3-output");
  outputDiv.textContent = ""; // clear previous output

  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      const step = document.createElement("div");
      step.textContent = `Step ${i}: Number is ${i}`;
      outputDiv.appendChild(step);
    }, i * 1000); // 1 second delay between steps
  }
});

// === Part 4: DOM Manipulation ===
let tasks = [
  "Learn HTML",
  "Practice CSS",
  "Master JavaScript",
  "Build Projects",
  "Review Code",
];
let taskIndex = 0;

document.getElementById("add-task-btn").addEventListener("click", () => {
  if (taskIndex < tasks.length) {
    const li = document.createElement("li");
    li.textContent = tasks[taskIndex];
    document.getElementById("task-list").appendChild(li);
    taskIndex++;
  } else {
    alert("All tasks are already added!");
  }
});
