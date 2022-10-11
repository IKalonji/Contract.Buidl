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
    contract_name = body["name"]
    name = "{"+"name:"+"\""+str(contract_name)+"\""+"}"
    print("REQUEST BODY:")
    print(body)

    print("WRITING CONTRACT NAME TO CONTRACTNAME.TS:")
    with open(f"scripts/ContractName.ts", "w") as file:
        file.write(f"export const contract_name = {name};")

    print(f"WRITING THE CONTRACT TO {contract_name}:")
    with open(f"contracts/{contract_name}.sol", "w") as file:
        file.write(body["contract"])
    

    print("DEPLOYING THE CONTRACT:")
    os.system("yarn hardhat run --network testnet scripts/Deployment.ts")

    return ""

if __name__ == '__main__':
    app.run(debug=True)