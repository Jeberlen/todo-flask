
from flask import Flask, request, jsonify

app = Flask(__name__)

todos = [{'description':'Ar15 till jobb16'}, {'description':'köp mjölk'},{'description':'Kaffe?'},]

@app.route('/todos', methods = ["GET", "POST"])
def get_todos():
    if request.method == "POST":
        todos.append(request.get_json())

    return {'todos': todos}


