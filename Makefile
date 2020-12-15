build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

backend_shell:
	docker-compose exec backend bash

frontend_shell:
	docker-compose exec frontend bash

.PHONY: build up down backend_shell frontend_shell