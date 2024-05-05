#!/bin/sh
USER=root
HOST=23.94.38.114
DIR=/var/www/hugo/   # the directory where your web site files should go

hugo && rsync -avz --delete public/ ${USER}@${HOST}:${DIR} # this will delete everything on the server that's not in the local public folder 
# sudo hugo && rsync -avz --delete ./public/ ${DIR} # this will delete everything on the server that's not in the local public folder 

exit 0
