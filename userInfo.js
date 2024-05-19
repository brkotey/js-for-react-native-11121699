function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

const originalNames = ["Charlotte", "Matthew", "Jerry", "Nii", "Eva"];
const modifiedNames = ["CHARLOTTE", "matthew", "JERRY", "nii", "EVA"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
/*
[
  { id: 1, originalName: 'Charlotte', modifiedName: 'ALICE' },
  { id: 2, originalName: 'Matthew', modifiedName: 'bob' },
  { id: 3, originalName: 'Jerry', modifiedName: 'CHARLIE' },
  { id: 4, originalName: 'Nii', modifiedName: 'david' },
  { id: 5, originalName: 'Eva', modifiedName: 'EVE' }
]
*/

module.exports = { createUserProfiles };