---
layout: post
title:  "DOJ vs Apple"
date:   2017-04-25 20:00:00 -0600
categories: secure-messaging
---
On 9 February 2016, the FBI ordered Apple to unlock an iPhone 5C that belonged
to a terrorist. Using the All Writs Act of 1789, the FBI ordered Apple to
develop software such that:

1. it will bypass or disable the auto-erase function whether or not it has been
enabled" (this user-configurable feature of iOS 8 automatically deletes keys
needed to read encrypted data after ten consecutive incorrect attempts)
2. it will enable the FBI to submit passcodes to the SUBJECT DEVICE for testing
electronically via the physical device port, Bluetooth, Wi-Fi, or other protocol
available
3. it will ensure that when the FBI submits passcodes to the SUBJECT DEVICE,
software running on the device will not purposefully introduce any additional
delay between passcode attempts beyond what is incurred by Apple hardware

The order also specifies that Apple's assistance may include providing software
to the FBI that will be coded by Apple with a unique identifier of the phone so
that the software would only load and execute on the SUBJECT DEVICE.

## Opposition

Apple immediately opposed this order citing that it would not compromise the
security of its products and put its end users at risk. CEO Tim Cook then
[wrote a letter](https://www.apple.com/customer-letter/) explaining the
opposition to the FBI's order to the public. In particular, he said:

>The government is asking Apple to hack our own users and undermine decades of
security advancements that protect our customers---including tens of millions of
American citizens---from sophisticated hackers and cybercriminals. The same
engineers who built strong encryption into the iPhone to protect our users
would, ironically, be ordered to weaken those protections and make our users
less safe.

The FBI then urgently petitioned the courts to order Apple to comply with the
order by loading a temporary operating system in memory only. Apple still
refused. Shortly after, the FBI was able to exploit a zero day vulnerability
to unlock the phone without decrypting the phone at all.

## Significance

There are several very important consequences of this incident:

* _Storage of Private Keys:_ the implication of Apple's reply is that Apple
somehow has access to the private keys of iOS devices. Apple then improved the
encryption in iOS 8 (default on iPhone 6 and later).
* _Government Overreach:_ the FBI essentially demanded a new operating system
to comply with a government order. If the order had been granted, encryption
would have been effectively disabled by taking strong encryption from the
hands of law abiding citizens.
* _Preserving the Greater Good:_ if encryption is compromised either legally
or technically, only the terrorists will have strong encryption. The law abiding
world needs encryption to protect their privacy and security.

>Count me in as somebody who is a very strong civil libertarian, who believes
that we can fight terrorism without undermining our constitutional rights and
our privacy rights.
>
--Bernie Sanders
