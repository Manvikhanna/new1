
"use client"
// components/FaceRecognition.js
import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';



const FaceRecognition = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: {} })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        });
    };

    videoRef.current.addEventListener('loadedmetadata', () => {
      videoRef.current.play();
      detectFace();
    });

    const detectFace = async () => {
      const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
      faceapi.matchDimensions(canvasRef.current, displaySize);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      }, 100);
    };

    loadModels();

    return () => {
      // Clean up the media stream
      if (videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} width="720" height="560" autoPlay muted />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FaceRecognition;
