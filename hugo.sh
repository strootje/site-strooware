#!/usr/bin/env sh

SERVER_NAME=cerberus
BASE_FOLDER="$(basename $(pwd))"

ACTION="$1"
HUGO=/usr/bin/hugo
SCP=/usr/bin/scp
SSH=/usr/bin/ssh

function hugo_deploy() {
	$HUGO -e production
	$SCP -r ./public "$SERVER_NAME:/tmp/$BASE_FOLDER"

	PATH="/home/stroolab/.local/share/strooweb-webserver/caddy-sites/$BASE_FOLDER"
	$SSH "$SERVER_NAME" sudo rm -rf "$PATH"
	$SSH "$SERVER_NAME" sudo mv -f "/tmp/$BASE_FOLDER" "/home/stroolab/.local/share/strooweb-webserver/caddy-sites/"
	$SSH "$SERVER_NAME" sudo chown -R stroolab:stroolab "$PATH"
	$SSH "$SERVER_NAME" sudo ls -la "$PATH"

}

case "$ACTION" in
	deploy) hugo_deploy;;
	*) echo "unsupported";;
esac
