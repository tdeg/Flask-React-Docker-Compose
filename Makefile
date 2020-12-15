build:
	docker-compose build --no-cache

up:
	docker-compose up

down:
	docker-compose down --remove-orphans

backend_shell:
	docker-compose exec backend bash

frontend_shell:
	docker-compose exec frontend bash

.PHONY: build up down backend_shell frontend_shell