# EllieAPI

# Working with live data
To get live data send get request to domain/live/sensorname f.e. (https://interactiveellieapi.herokuapp.com/live/co2)
To update sensor data send put or patch request to domain/live/sensorname f.e. (https://interactiveellieapi.herokuapp.com/live/co2)
To Add a new live sensor send post request with id, title and value to domain/live f.e (https://interactiveellieapi.herokuapp.com/live)

# Save data long term
To post data send post request to domain/sensorname f.e. (https://interactiveellieapi.herokuapp.com/co2)
To get all saved sensor data send get request to domain/sensorname f.e. (https://interactiveellieapi.herokuapp.com/co2)
To delete a post send delete request to domain/sensorname/postid f.e. (https://interactiveellieapi.herokuapp.com/co2/postid)
To update a post send put or patch request to domain/sensorname/postid f.e.  (https://interactiveellieapi.herokuapp.com/co2/postid)

