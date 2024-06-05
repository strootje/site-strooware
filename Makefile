ENVIRONMENT=production
-include .env.local
VERSION=1

serve:
	@hugo --environment="${ENVIRONMENT}" serve

build:
	@podman build --tag "strootje/strooware:${VERSION}" .

test: build
	@podman run --rm -it -p 1313:80 "strootje/strooware:${VERSION}"

publish: build
	@podman push "strootje/strooware:${VERSION}" "docker.io/strootje/strooware:${VERSION}"

apply/%:; @kubectl apply -k .deployment/overlays/$*
delete/%:; @kubectl delete -k .deployment/overlays/$*

