# Git

- [**Notes**](#git---notes)
- [**Resources**](#git---resources)

## Git - Notes

### Useful commands

- Initialize a repository

  ```bash
  git init
  ```

- Clone a remote repository

  ```bash
  git clone <remoteUrl>
  ```

- Stage files for commit

  ```bash
  git add <relativePathToFile> <relativePathToDirectory>
  ```

- Commit files

  ```bash
  git commit -m "Line 1 description" -m "Line 2 description"
  ```

- Add a remote repository

  ```bash
  git remote add <remoteName> <remoteUrl>
  ```

- Fetch remote changes

  ```bash
  git fetch <remoteName>
  ```

- Fetch and merges remote changes

  ```bash
  git pull <remoteName> <remoteBranch>
  ```

- Reset your local branch

  ```bash
  git reset [--hard]
  ```

- Create a new local branch

  ```bash
  git checkout -b <newBranch/Name>
  # or
  git switch -c <newBranch/Name>
  ```

- Push a local branch to a remote repository

  ```bash
  git push # current branch

  git push -u <remoteName> <branchName> # any branch

  git push --force # overwrite all changes
  ```

- Stash your uncommitted changes

  ```bash
  git stash [pop|drop]
  ```

- Rename a branch

  ```bash
  git branch -m <oldBranchName> <newBranchName> # local

  git branch -m <remoteName> :<oldBranchName> <newBranchName> # remote
  ```

- Show a commit log

  ```bash
  git log
  ```

## Git - Resources

- [Udemy course by Jad Khalili](https://www.udemy.com/share/101tpK2@PkdjVEtSSVIKdkRKBmJNfj4=/)
- [Git for Professionals Tutorial by freeCodeCamp.org](https://youtu.be/Uszj_k0DGsg)
- [w3schools](https://www.w3schools.com/git/default.asp)
- [Connect git to GitHub](https://kbroman.org/github_tutorial/pages/first_time.html)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#git)
