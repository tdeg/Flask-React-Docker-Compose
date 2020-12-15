from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello_world():
    response = jsonify({'name': 'helloworld'})
    return response

if __name__ == "__main__":
    app.run(host ='0.0.0.0', port = 5001, debug=True)