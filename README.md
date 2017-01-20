# Thames river conditions

PhantomJS script to save screenshot of Thames river conditions.

`phantomjs save-river-conditions.js`

## Digital Ocean set-up

I've created a $5/month Droplet - 512MB RAM / 20GB HDD.

## Install PhantomJS

NOTE. Using `apt-get install phantomjs` installed a version that didn't work. The instructions below came from [PhantomJS GitHub issue 14376](https://github.com/ariya/phantomjs/issues/14376#issuecomment-246310115).

```bash
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
bzip2 -d phantomjs-2.1.1-linux-x86_64.tar.bz2
tar -xvf phantomjs-2.1.1-linux-x86_64.tar
cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/bin/phantomjs
```

## Clone repo

```bash
$ git clone https://github.com/chrisroos/thames-river-conditions.git
```

## Configure crontab

Run every hour.

```
0 */1 * * * cd /root/thames-river-conditions/ && phantomjs save-river-conditions.js
```

## Todo

* Make the images available on the Internet somewhere.
