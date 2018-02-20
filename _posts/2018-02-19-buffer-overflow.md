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
