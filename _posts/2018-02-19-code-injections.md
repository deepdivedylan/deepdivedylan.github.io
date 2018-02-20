---
layout: post
title:  "Code Injections"
date:   2018-02-19 18:00:00 -0600
categories: insecure-software
---
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
