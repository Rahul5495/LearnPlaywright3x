
/* Write a JavaScript function that receives two arrays: one with names and one with roles. 
Return a new array of user objects in the format { username, email, role }. 
The username should be lowercase with spaces replaced by underscores, and the email should use the domain @playwrightbatch.com. */

function createUsers(names, roles) {
  return names.map((name, index) => {
    const username = name.toLowerCase().replaceAll(" ", "_");

    return {
      username,
      email: `${username}@playwrightbatch.com`,
      role: roles[index]
    };
  });
}

// Example
const names = ["John Doe", "Jane Smith"];
const roles = ["admin", "editor"];

console.log(createUsers(names, roles));