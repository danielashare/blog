---
slug: how-to-send-multiple-commands-and-receive-output-from-the-same-bash-process
title: How to send multiple commands and receive output from the same bash process
author: Daniel Share
author_title: CTO @ Superbition
author_url: https://twitter.com/danielashare
author_image_url: './img/profile.jpeg'
tags: []
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

These requirements pretty much rule out the use of ```popen``` and ```system``` as they will open a one-time write pipe 
to send your command,the  then they will read output off of the read pipe until the child exits.