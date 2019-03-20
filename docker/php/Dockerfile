FROM php:7.2-fpm

RUN apt-get update \
  && apt-get install -y libzip-dev libpng-dev zlib1g-dev libmagickwand-dev --no-install-recommends \
  && apt-get clean

RUN docker-php-ext-install pdo pdo_mysql bcmath mysqli gd

RUN pecl install imagick xdebug-2.6.1 && \
    docker-php-ext-enable xdebug && \
    docker-php-ext-enable imagick && \
    rm -rf /tmp/pear

COPY php-custom.ini /usr/local/etc/php/conf.d/php-custom.ini

WORKDIR /app
