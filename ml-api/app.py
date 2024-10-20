from flask import Flask, request, jsonify
from PIL import Image
import torch
import io

app = Flask(__name__)

model = torch.load('trained_model.pt')
model.eval()

def transform_image(image_bytes):
    image = Image.open(io.BytesIO(image_bytes))
    return image

def predict(image_bytes):
    image = transform_image(image_bytes)
    with torch.no_grad():
        output = model(image)
        predicted_label = output.argmax().item()
    return predicted_label

@app.route('/predict', methods=['POST'])
def predict_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    img_bytes = file.read()
    prediction = predict(img_bytes)

    return jsonify({'product_name': f'Product {prediction}'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)