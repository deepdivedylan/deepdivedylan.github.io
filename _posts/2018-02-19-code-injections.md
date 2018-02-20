---
layout: post
title:  "Code Injections"
date:   2018-02-19 18:00:00 -0600
categories: insecure-software
---
## Cross Site Scripting (XSS)

XSS is the act of putting new HTML tags into a page even though the software developer did not intend the HTML to be there. The impact of this attack is the web server can then become a launching point for other attacks. The impact of XSS is that it's very easy to pull off and can be use to very deadly ends.

To see a demonstration of XSS, try the [XSS Game Area](https://xss-game.appspot.com).

## Shell Injection

The following code, when used as designed, will display a random quote from the Unix `fortune` program. However, an attacker can stop the command with a ; character to chain another command when asked for a "random" topic for their fortune.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char **argv) {
	char choice;
	char topic[256];
	char topicCommand[256];
	const char *command = "/usr/games/fortune";

	puts("* * * QUOTE OF THE DAY * * *\n");
	puts("[R]andom quote");
	puts("[S]elect topic");
	puts("[Q]uit\n");

	do {
		printf("Choice? ");
		scanf("%c", &choice);

		if(choice == 'r' || choice == 'R') {
			system(command);
		}

		if(choice == 's' || choice == 'S') {
			memset(topic, 0, 256);
			printf("Topic? ");
			while(strlen(topic) == 0) {
				fgets(topic, 256, stdin);
				topic[strlen(topic) - 1] = 0;
			}

			sprintf(topicCommand, "%s %s", command, topic);
			system(topicCommand);
		}

		fflush(stdin);
	} while(choice != 'q' && choice != 'Q');

	return 0;
}
```
