from flask import Flask,render_template,request,jsonify
app = Flask(__name__,static_folder='assets')
import json

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_model', methods=['GET'])
def data():
    data = request.get_json()
    return render_template("Model/SubmitData.html", data=data)

@app.route('/submit_data', methods=['POST'])
def submit_data():
    data = request.get_json('data')
    return {
            'template': render_template("model/submitModel.html", data=data),
            'data': data,
            "message": "successfully"
        }, 200

    # data = request.get_json('data')
    # # print(data)
    # if data and data[0]['eventName'] == '' and data[0]['eventDate'] == '':
    #     output = "No data is available"
    #     return {
    #     'template': render_template("model/submitModel.html", data=output),
    #     'data': data,
    #     "message": "successfully"
    # }, 200
        
    # else :
    #     return {
    #         'template': render_template("model/submitModel.html", data=data),
    #         'data': data,
    #         "message": "successfully"
    #     }, 200

if __name__ == '__main__':
    app.run(debug=True)
