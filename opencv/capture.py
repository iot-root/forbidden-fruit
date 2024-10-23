import cv2

# Initialize the camera
camera = cv2.VideoCapture(0)  # Change to the appropriate device index if needed

# Check if the camera is opened
if not camera.isOpened():
    print("Error: Could not open video device.")
    exit()

# Set the camera resolution to match Logitech Brio
camera.set(cv2.CAP_PROP_FRAME_WIDTH, 3840)
camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 2160)

while True:
    # Capture frame-by-frame
    ret, frame = camera.read()

    if not ret:
        print("Failed to grab frame")
        break

    # Display the resulting frame (this will later be processed for plant detection)
    cv2.imshow('Camera Feed', frame)

    # Break the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close windows
camera.release()
cv2.destroyAllWindows()

