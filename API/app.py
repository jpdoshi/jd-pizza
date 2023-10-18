from flask import Flask, request

app = Flask(__name__)

todos = {
	1 : 'go to bank',
	2 : 'initiate heist'
}

@app.route('/')
def index():
	return {'message': 'hello, world!'}

@app.route('/todos/<int:id>', methods=['GET', 'POST'])
def todo(id):
	if request.method == 'GET':
		return {id: todos[id]}

	if request.method == 'POST':
		todos[id] = request.form['task']
		return {id: todos[id]}

if __name__ == '__main__':
    app.run(debug=True)
