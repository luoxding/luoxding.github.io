#!/bin/sh

LOCALDIR=/var/www/hugo/
USER=root
HOST=23.94.38.114
SERVERDIR=/var/opt/blog/   # local dir the directory where your web site files should go

sudo rsync -avz --delete ${LOCALDIR} ${USER}@${HOST}:${SERVERDIR} # this will delete everything on the server that's not in the local public folder 
# sudo hugo && rsync -avz --delete ./public/ ${DIR} # this will delete everything on the server that's not in the local public folder 

exit 0



# sudo rsync -avz --delete /var/www/hugo/ root@23.94.38.114:/var/opt/blog/