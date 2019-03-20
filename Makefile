COMPOSER_INSTALLED := $(shell command -v composer 2> /dev/null)

.PHONY: clean build
.DEFAULT_GOAL := all

clean:
		--rm composer.lock

all: clean build


build:
ifdef COMPOSER_INSTALLED
		@composer install
else
		@php composer.phar install
endif
	@@cp dev/.env.example wp/.env
	@@cp dev/wp-config.php wp/
	@@test ! -e wp/wp-content/plugins/dynpages-blocks \
		&& ln -s "../../../src/" wp/wp-content/plugins/dynpages-blocks \
		|| true
