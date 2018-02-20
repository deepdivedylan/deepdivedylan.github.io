---
layout: post
title:  "Meltdown and Spectre"
date:   2018-02-19 20:00:00 -0600
categories: insecure-software
---
![XKCD Meltdown and Spectre][xkcd]{: .img-fluid}

[XKCD Meltdown and Spectre](https://xkcd.com/1938/)

## The Problem

Modern processors use *speculative execution* to leverage more performance out of the CPU. CPUs will execute possible outcomes of an `if` block even before the result is known. Consider the following code:

```c
if(answer == 42) {
	year = 1978;
}
```

The `year` variable will be assigned to 1978 in speculative execution. This will cease when the if block is not true. However, the speculative value of 1978 is still in the CPU's cache. Attackers can use this to their advantage by testing the `year` variable and timing the access. Differences in timing can be quite revealing and can be correlated to sensitive data such as keys and passwords.

## Demonstration

<div class="embed-responsive embed-responsive-16by9">
	<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/bs0xswK0eZk" allowfullscreen></iframe>
</div>

[xkcd]: /assets/images/xkcd-meltdown-spectre.png
