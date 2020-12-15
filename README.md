# Flask React Docker Compose 🐳

Easily run Flask and React in Docker Compose.

## Usage


Build the containers:
```bash
make build
```

Spin the containers up:
```bash
make up
```

Start the flask server:
```bash
make backend_shell

python -m src.cmd
```

Start the react server:
```bash
make frontend_shell

yarn start
```

Now navigate to https://localhost:3000 in your browser! You should see a request come in on the flask side.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
