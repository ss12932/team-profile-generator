const generateTeamMembers = (employees) => {
  //sortlist to define order of generating cards to write to index.html
  const sortList = ["manager", "engineer", "intern"];
  return employees
    .sort((a, b) => {
      // compares instantiated objs a and b in totalEmployees Arr and sorts in same order as sortList by reading object role property.
      let indexOfa = sortList.indexOf(a.role);
      let indexOfb = sortList.indexOf(b.role);
      // negative values will be arranged first, positive numbers arranged last
      return indexOfa > indexOfb ? 1 : indexOfa < indexOfb ? -1 : 0;
    })
    .map((employee) => employee.createCard().join(""));
};

const generateHTML = (employees) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./main.css" />
    </head>
    <body class="min-h-screen">
      <!-- main section -->
      <main class="w-full min-h-screen bg-onyx">
        <!-- profile-section-wrapper  -->
        <div>
          <!-- jumbrotron with title -->
          <div class="flex w-full justify-center bg-eerie-black">
            <h1 class="font-bold text-5xl py-6 text-white">
              Team Profile Generator
            </h1>
          </div>
          <!-- cards container -->
          <div
            class="flex w-full justify-center items-center gap-6 flex-wrap p-6"
          >
      ${generateTeamMembers(employees)}
          </div>
        </div>
      </main>
    </body>
  </html>
  `;
};
module.exports = generateHTML;
