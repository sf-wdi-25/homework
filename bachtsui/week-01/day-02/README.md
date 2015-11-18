# Homework submission

Homework will be turned in to your fork of this repository daily.

## Setup Instructions

To set up your initial homework repository follow these instructions.  You should only need to do this once.  
Note in the below:
- **GITHUB-USER-NAME** should be replaced with your actual git user name (must be exact)
- **CLONE-URL-FROM-GITHUB** this URL is in a small box on the right-hand side of the main page of each Github Repository.  Copy it and replace this text.

### Fork & Clone
1. Using the github website, fork this repo to create a copy of it on your github account.
2. Clone the forked repo from your github account onto your computer inside your `dev/` directory.  The **clone URL** is in a small text-box on the right-side of a repository's main page.
  ```bash
  cd ~/dev

  git clone CLONE-URL-FROM-GITHUB
  ```
  Note: if you don't have a `dev` directory yet, you may need to create it first: `mkdir ~/dev`.
3. `cd` into the newly cloned repo on your computer.
4. Make a copy of the directory template using your github username as the new name.
   ```bash
   cp -a zz_template GITHUB-USER-NAME

   git add .

   git commit -m "created my directory"
   ```
5. `git push origin master` to put your changes up on github!
6. You should now be able to go to github and make a pull-request from your fork of the repo, to ours!


## Submitting homework

When submitting homework to this repo follow the instructions in the course notes (modules) repository or the homework itself.  
Labs will generally not be submitted as pull-requests to this repository.

## Cloning other repos.
Throughout this course you'll be asked to clone many other repositories (repos).  When you do so, make sure you first `cd ~/dev`.  If you run `git clone` while inside of another repository, or if you copy one repository inside of another it will create a nested repo.  We cannot easily work with nor see the files in nested repos.  

# Command Glossary

* `cd homework/week01` = change directories into the week01 directory in the homework directory.
* `cd ~/dev` = change directories to your dev directory in your home directory.  `~` is a shortcut for your home directory.
* `cp -a from_dir to_dir` = copy everything from `from_dir` to `to_dir`
* `git status` = check which files are changed (red) or changed & staged (green).  Learner's tip: Do this before and after every git command until you are familiar with it.
* `git add solution.md` = stage a change for git.  Staged changes can be committed.
* `git commit -m "completed exercise 2"` = Commit the currently staged changes to git and set the commit-message.
* `git push origin master` = push the commits on branch `master` to the remote `origin`.  Origin is often on github.
