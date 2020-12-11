# EllieAPI

# Working with live data
To get live data send get request to domain/live/sensorname f.e. (https://interactiveellieapi.herokuapp.com/live/co2)
To update sensor data send put or patch request to domain/live/sensorname f.e. (https://interactiveellieapi.herokuapp.com/live/co2)
To Add a new live sensor send post request with id, title and value to domain/live f.e (https://interactiveellieapi.herokuapp.com/live)

# Save data long term
To post data send post request to domain/sensorname f.e. (https://interactiveellieapi.herokuapp.com/co2)
To get all saved sensor data send get request to domain/sensorname f.e. (https://interactiveellieapi.herokuapp.com/co2)
To delete a post send delete request to domain/sensorname/postid f.e. (https://interactiveellieapi.herokuapp.com/co2/co2postid)
To update a post send put or patch request to domain/sensorname/postid f.e.  (https://interactiveellieapi.herokuapp.com/co2/co2postid)

# Add sensor for long term saving
Create a new route and model with a clear, sensor related name. Copy another model and change or add whatever is necesarry. Then copy a route and change or add whatever is necesarry.

Test thoroughly on local machine before pushing to the production (heroku connected) git!!


# MODELS
# Saved Co2 data (_id = co2)
{
    "title": "(description)"
    "ppm": ""
}

# Saved ppl_count (_id = ppl_count)
{
    "title": "(description)"
    "ppl_count": ""
}

# LIVE MODEL
# Live data
{
    "_id": "Sensorname"
    "title": "(description)"
    "value": "(f.e ppm, ppl_count)"
}

