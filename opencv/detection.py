# Assuming you have a YOLOv5 or YOLOv7 model for plant detection
from yolov5 import YOLO

# Load the model
model = YOLO('best.pt')  # Replace 'best.pt' with your trained plant detection model

while True:
    ret, frame = camera.read()
    
    if not ret:
        break

    # Run the model for detection
    results = model(frame)

    # Visualize results
    results.render()  # This will draw bounding boxes on the plants

    # Display the frame with detections
    cv2.imshow('Camera Feed with Detections', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

camera.release()
cv2.destroyAllWindows()

