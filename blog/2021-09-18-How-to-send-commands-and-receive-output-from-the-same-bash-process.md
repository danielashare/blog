---
slug: how-to-send-multiple-commands-to-and-receive-output-from-the-same-bash-process
title: How to send multiple commands to and receive output from the same bash process
author: Daniel Share
author_title: CTO @ Superbition
author_url: https://twitter.com/danielashare
author_image_url: './img/profile.jpeg'
tags: [bash, shell, c++, ipc]
image: './img/hero/hero.png'
description: ""
---

Do you need two-way communication between a parent process and a persistent bash child process? I did when writing the 
agent for [Bakup.io](https://bakup.io) and there weren't many resources out there which detailed a method of doing so.

<!--truncate-->

<div className="hr">
    <span></span><span></span><span></span>
</div>

There are a list of requirements that I needed for the bash process:

- Send multiple commands and be able to read the output from a bash process
- The bash process had to be persistent, not a new process for each command
- Check the success/failure of each command

These requirements pretty much rule out the use of ```popen``` and ```system``` as they will open a one-time write pipe to send your command, then they will read output off of the read pipe until the child exits.

### Where is the code?

To find the code that I'll be referring to, head over to the [Github repo](https://github.com/danielashare/two-way-bash-process-communication/blob/master/main.cpp).

## How does it work?

In order to have two way communication with a shell, we must use the following:

- ```fork``` To spawn a child process
- ```execl``` To start a shell on the child process
- ```pipe``` To connect to the read and write file descriptor of the child process

### Starting a child

The ```startChildShell``` function takes in a reference to two ints which will be assigned values based on file descriptors it gets from creating pipes to the child process. Having these two file descriptors to write to and read from is what is lacking from the ```popen``` or ```system``` methods. It also takes a reference to a childPID, which will be populated with the newly created child's Process ID. This is used to kill the process later.

### Sending commands to the child

Once the child has been setup and we've extracted the file descriptors that allow us to write to and read from the child, we can start sending commands to it. When you send a command using the ```runCommand``` function, it will add two things to the end of the command:

 1. It will add ```echo $?``` which prints the exit code of the previous ran command
 2. A randomly generated, long delimiter

The delimiter is used to detect when the command has finshed excuting. We had a problem with the Agent and long running jobs, such as a ```mysqldump```, which meant that we didn't know when to stop reading the output of the child. The delimiter solves this problem by giving us a string to search for at the end of each line read from the buffer. When we see the delimiter, we know the command has finished (successfully or otherwise).

### How do I compile this code?

You can build this code using the following command: ```g++ -std=c++17 main.cpp -o main```