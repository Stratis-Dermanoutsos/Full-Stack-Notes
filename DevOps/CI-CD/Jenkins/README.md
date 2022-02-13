# Jenkins

- [**Notes**](#jenkins---notes)
- [**Resources**](#jenkins---resources)

## Jenkins - Notes

***Jenkins*** is an open source ***Continuous Integration*** tool written in ***Java***.

***Jenkins*** is used by teams of all sizes, for projects in a wide variety of languages and technologies, including ***.NET***, ***Ruby***, ***PHP*** and more, as well as ***Java***.

<ins>Note</ins>: To install and use Jenkins you have to make sure ***Java*** is installed in your system.

At the heart of the ***Jenkins*** build process are **Build jobs**. Simply put, you can think of a ***Jenkins* build job** as a particular task or step in your build process. This may involve simply *compiling your source code* and *running your unit tests*.

### Setup Jenkins

<ins>Note</ins>: I use Arch Linux (well, Manjaro) at the time of writing this

- Start ***Jenkins***

  ```bash
  sudo systemctl start jenkins
  ```

- Check application status

  ```bash
  systemctl status jenkins
  ```

- Go to [*localhost:8090*](http://localhost:8090) and follow the steps

## Jenkins - Resources

- [Jenkins documentation](https://www.jenkins.io/doc/)
- [Jenkins: The Definitive Guide book](https://www.bogotobogo.com/DevOps/Jenkins/images/Intro_install/jenkins-the-definitive-guide.pdf)
- [Setup and Configure Jenkins on Arch Linux](https://computingforgeeks.com/how-to-install-and-configure-jenkins-on-arch-linux/)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#jenkins)
