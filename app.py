from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if (request.method == 'POST'):
        some_json = request.get_json()
        return jsonify({'You sent': some_json}), 201
    else:
        return jsonify({"about":"SNS Index prototype"})

@app.route('/multi/<int:num>', methods=['GET'])
def get_multiply10(num):
    response = jsonify({'result': num*10})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True)
