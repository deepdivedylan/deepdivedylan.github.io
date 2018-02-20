---
layout: post
title:  "Buffer Overflow"
date:   2018-02-19 19:00:00 -0600
categories: insecure-software
---
![XKCD Heartbleed][xkcd]{: .img-fluid}

[XKCD Heartbleed](https://xkcd.com/1354/)

[xkcd]: /assets/images/xkcd-heartbleed.png

## Example Code

```c
#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {
	char buffer[8];
	unsigned short year = 1968;

	strcpy(buffer, "excessive");
	printf("year: %d\n", year);
	return 0;
}
```

The code will copy the string *excessive* to the buffer which exceeds the capacity by two bytes. The last two bytes of the string will overflow into the adjacent `year` variable and `0x6500` will be overwritten into the `year` variable which will evaluate to 25856. This same principle, and indeed same error with the `strcpy` function, is what caused the heartbleed bug in 2014.
