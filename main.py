# serve.py
import requests
import os
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify

# creates a Flask application, named app
app = Flask(__name__)

# a route where we will display a welcome message via an HTML template
@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/proxy1")
def fetcher():
    codeme = request.args.get("filter")
    resp=requests.get(f"http://fsg.gel.webfactional.com?filter={codeme}")
    retval = resp.json()
    return jsonify(retval)

@app.route("/proxy2")
def world():
    sseed = request.args.get("struct")
    sclass = request.args.get("class")
    randbiome= request.args.get("randbiome")
    pref = request.args.get("pref")#village and/or shipwreck preference
    cmd = f'./bh {sseed} {sclass} {randbiome} {pref}'
    result = os.popen(cmd).read()
    return result


app.run("0.0.0.0","8080")