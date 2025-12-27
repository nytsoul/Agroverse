import os
import json
import joblib
import pandas as pd
import sys

model_dir = os.path.join(os.getcwd(), 'model')

try:
    model = joblib.load(os.path.join(model_dir, 'tamilnadu_crop_price_predictor.joblib'))
    model_columns = joblib.load(os.path.join(model_dir, 'model_columns.joblib'))
    print("Model and columns loaded successfully")
except Exception as e:
    print(f"Error loading model: {e}")
    sys.exit(1)

# Sample data
data = {'district': 'Thanjavur', 'soil_type': 'Deltaic Alluvial', 'crop': 'Rice', 'rainfall': 1200, 'temperature': 28}

try:
    district = data.get('district')
    soil_type = data.get('soil_type')
    crop = data.get('crop')
    rainfall = data.get('rainfall', 1200)
    temperature = data.get('temperature', 28)

    SOIL_PROPS = {
        "Deltaic Alluvial": {"sqi": 0.92, "ph": 6.8, "n": 0.85, "p": 0.80, "k": 0.75},
        "Coastal Saline": {"sqi": 0.45, "ph": 8.2, "n": 0.40, "p": 0.35, "k": 0.50},
        "Black": {"sqi": 0.88, "ph": 7.5, "n": 0.75, "p": 0.85, "k": 0.90},
        "Red": {"sqi": 0.72, "ph": 6.0, "n": 0.60, "p": 0.55, "k": 0.65},
        "Laterite": {"sqi": 0.58, "ph": 5.5, "n": 0.50, "p": 0.45, "k": 0.55},
        "Mixed Red and Yellow": {"sqi": 0.78, "ph": 6.2, "n": 0.70, "p": 0.65, "k": 0.70},
        "Mixed Red and Black": {"sqi": 0.82, "ph": 6.8, "n": 0.75, "p": 0.75, "k": 0.80},
        "Brown Forest": {"sqi": 0.68, "ph": 5.8, "n": 0.65, "p": 0.60, "k": 0.62}
    }
    
    soil_props = SOIL_PROPS.get(soil_type, {"sqi": 0.7, "ph": 6.5, "n": 0.6, "p": 0.6, "k": 0.6})

    input_data = pd.DataFrame([{
        'District': district,
        'Soil_Type': soil_type,
        'Crop': crop,
        'Rainfall': rainfall,
        'Temperature': temperature,
        'Soil_Quality_Index': soil_props['sqi'],
        'pH': soil_props['ph'],
        'Nitrogen': soil_props['n'],
        'Phosphorus': soil_props['p'],
        'Potassium': soil_props['k']
    }])
    
    input_encoded = pd.get_dummies(input_data)
    
    for col in model_columns:
        if col not in input_encoded.columns:
            input_encoded[col] = 0
            
    input_encoded = input_encoded[model_columns]
    
    prediction = model.predict(input_encoded)[0]
    print(f"Prediction success: {prediction}")

except Exception as e:
    import traceback
    print("Prediction failed!")
    traceback.print_exc()
