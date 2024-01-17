
deploy:
	@hugo --environment=production --minify -d ./public/strooware.nl
	@kubectl cp -n=strooware ./public/strooware.nl caddy-sites-65d8484f47-lzn4n:/sites
	@kubectl exec -n=strooware -it service/caddy-sites -- caddy reload -fc=/etc/caddy/Caddyfile
