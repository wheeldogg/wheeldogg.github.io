---
title: Getting started with R (Rstudio, Rshiny) running in a docker container.
layout: post
categories: Programming
---

### Rstudio setup in Docker.

I'm was having some difficulty getting Rstudio running on windows through the Windows subsystem for linux (WSL). I'd like to build using Docker as then I'll be able to develop in R in a docker image that I can move between windows and ubuntu with no problems.

![docker](https://docs.docker.com/v17.12/engine/images/architecture.svg)

Full documentation for this available from [rstudio](https://github.com/rocker-org/rocker/wiki/Using-the-RStudio-image)

#### rocker and rstudio.

https://hub.docker.com/r/rocker/rstudio/
1st command to start the container as this will ensure we have the correct R setup.

`docker run --rm -ti rocker/r-base`

#### rstudio-server will probably run on ubuntu 18.04.

Try uninstalling and reinstalling it ?

#### create your docker image of

`sudo docker run -d -p 8787:8787 -e PASSWORD=<password> --name rstudio rocker/rstudio`

might take some-time the first time you download it.

#### check the running docker container.

`docker container ls`
and stop it
` docker container stop rstudio`
and start it
`docker start rstudio`

#### Additional

important for tidying up your docker images.
https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

#### Todo.

Check out using more distros on windows.
[windows docker install](https://docs.microsoft.com/en-us/windows/wsl/install-manual)
[Windows and WSL working flawlessly](https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly#ensure-volume-mounts-work)

Building my own dockerfile from the base image from Rocker with additional packages.
https://datawookie.netlify.com/blog/2017/07/rstudio-environment-on-digitalocean-with-docker/

### Rstudio and RShiny running together in Docker.

Inspiration from here
https://bioconductor.org/packages/release/bioc/vignettes/sevenbridges/inst/doc/rstudio.html
`docker pull sevenbridges/sevenbridges-r`

**enter the container.**
`docker exec -it <container-id> bash`

**Mounting your local directory in the docker container.**
docker run -v /c/Users/Shane.Whelan/:/my_mnt -d -p 8787:8787 -p 3838:3838 --name rstudio_shiny_server sevenbridges/sevenbridges-r

**fixing up the django conda environment.**

- install bzip2 for installing anaconda. https://www.howtoinstall.co/en/debian/stretch/bzip2
- download conda run bash installer.
