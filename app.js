import { login } from './features/login.js';
console.log('hello world');

// git status - check the status of the repo
// git add <filename> - add file to the staging area
// git add . - add all unstaged changes
// git commit -m "<message>"
// "the purpose of this commit is to... <message>"
// git log - view commits
// git log --oneline
// git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
// git config --global user.name "FirstName LastName"
// git config --global user.email "youremail@fake.com"
// git config --global --edit - open the config file
// git config --global core.editor "code --wait" - open git config in vscode
// when adding an alias give the full command minus git (see alias.txt)
// git push origin - send changes to remote repo
// git pull origin - downloads the files from master branch to local machine
// git checkout -b <branchname> create a new branch
// git checkout <branchname> switches from one branch to another
// git switch -  -switches to the previous branch
// git branch - views all branches
// git merge <branchname> it updates current branch with new information from the other branch
// git branch -d <branchname> - deletes the specified branch
console.log('hello from git');
console.log('asdfasdf');

console.log(login('Les', 'Chinyanga'));
