import json
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import json
import random
import os

app = Flask(__name__)

@app.route('/')
def index():
    return "Contract Deployer"
    
@app.route('/deploy', methods=['POST'])
def deploy():
    """
    Deploy the smart contract
    Request body should follow the structure below:
    {
        chain: "",
        contract: ""
    }
    """
    body = request.get_json()
    # randomized_filename = random.randint(1,100000)
    randomized_filename = body["name"]
    name = "{"+"name:"+"\""+str(randomized_filename)+"\""+"}"
    print("REQUEST BODY:")
    print(body)

    print("WRITING CONTRACT NAME TO CONTRACTNAME.TS:")
    with open(f"scripts/ContractName.ts", "w") as file:
        file.write(f"export const contract_name = {name};")

    print(f"WRITING THE CONTRACT TO {randomized_filename}:")
    with open(f"contracts/{randomized_filename}.sol", "w") as file:
        file.write(body["contract"])
    

    print("DEPLOYING THE CONTRACT:")
    os.system("yarn hardhat run --network goerli scripts/Deployment.ts")

    return ""

if __name__ == '__main__':
    app.run(debug=True)