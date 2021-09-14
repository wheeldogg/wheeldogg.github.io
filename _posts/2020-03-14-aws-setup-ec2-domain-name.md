---
layout: post
title: Setup AWS EC2 and domain name.
categories: Programming
tags:
  - AWS
---

![ec2](https://versioneye.files.wordpress.com/2015/01/ec2.png)

## Overview:

Amazon EC2 (Elastic compute cloud) is an excellent infrastructure as a service tool, offering users the ability to rent virtual computers on which to run your application or website.

I find it an excellent and intuitive service to allow you to get started on sharing your application to the world.

The objective of this post is to get you and your domain up and running on an EC2 instance.

- Look at how to setup a EC2 instance on amazon web services (AWS)
- Register a domain on namecheap.com
- Link your domain to your EC2 instance

## EC2 setup and creating running instance

Create account on Amazon and access the EC2 dashboard.

![Hosted](/public/img/aws/aws_ec2.png)

Next spin up an instance.

It's worthwhile selecting the free tier, you can always scale this machine later if you need to.

![Hosted](/public/img/aws/launch_instance.png)

When launching an instance, you may have to choose and existing key pair to connect securely or you will need to create one.

**Note:** you will need to select a key pair at this point or create a new one to be asociated with the EC2 instance for connection via ssh.

### Successfully running instance

Now you will have a sucessfully running instance

![Hosted](/public/img/aws/running_instance.png)

### Authentication

When you download the YOUR_AWS_USERNAME.pem from setting up your EC2 instance, you should add this to the folder ~/.ssh on your machine.

This means you can login using the .pem file when needed to setup your public key propertly. [generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

i.e. to setup public key properly, ssh-keygen and copy the id_rsa.pub to your new server instance.

If you have any issues SSH to the server, please check below security groups on your instance.

![Hosted](/public/img/aws/ec2_security_groups.png)

You will need to add this ti ~/.ssh folder on your laptop.

## Create elastic IP address to associate with your EC2 instance.

Go to the elastic IPs section on EC2.

![Hosted](/public/img/aws/elastic_ip.png)

You are essentially creating a static IP address that you will always be able to find your EC2 instance

If you setup the authentication properly, you should be able to ssh directly to this elastic IP address.

```
ssh YOUR_ELASTIC_IP
```

## Obtain a domain name on Namecheap.com

Simply look for a domain name that is not in use on [namecheap.com](namecheap.com) and is a reflection of what you will be buiding on your EC2 instance.

You can buy a domain name for a year for as little as 8 euros and namecheap offers a great dashboard to manage your domain names.

## Setup hosted zone on AWS

Find route 53 in the services on AWS.

![Hosted](/public/img/aws/route_53.png)

Create a new hosted zone on there.

![Hosted](/public/img/aws/hosted_zone.png)

You need to set it up like above by creating records and adding the elastic IP address.

The purpose of the hosted zone is that you now access on www.YOURHOSTNAME.com and YOURHOSTNAME.com

## Setup custom DNS on namecheap.com

Login to namecheap.com

Click on dashboad and then click on Domain.

Click manage on your new domain name.

Select the custom DNS option and copy over the options from your AWS hosted zone for the same domain name as per below.

![Hosted](/public/img/aws/custom_dns.png)

## SSH directly to your hostname.

To allow to ssh directly using the hostname, and no longer the IP address or EC2 public DBS.

Add your hostname to the /etc/hosts file on your EC2 instance.

ssh YOUR_HOSTNAME

# Run example Metabase image

First install docker on your EC2 instance.
[running-docker-on-aws-ec2](https://hackernoon.com/running-docker-on-aws-ec2-83a14b780c56)

A nice example webserver to run is Metabase.
[docker-metabase-example](https://www.metabase.com/docs/latest/operations-guide/running-metabase-on-docker.html)

```
docker run -d -p 80:3000 --name metabase metabase/metabase
```

observe the metabase server running on YOURDOMAINNAME.com and www.YOURDOMAINNAME.com

![Hosted](/public/img/aws/metabase.png)

## Success and conclusion.

It's a nice feeling to have your domain name running with actualy webserver in this case a metabase docker container.

Now when you access your domain name you are connecting directly to the EC2 instance and you can work on building your application.
