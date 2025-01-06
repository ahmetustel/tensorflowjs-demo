const tf = require("@tensorflow/tfjs-node"); // Node.js ortamında çalışmak için

// Örnek tensörler
const x1 = tf.tensor([1, 2, 3, 4], [2, 2]);
x1.print();

const x2 = tf.tensor2d([1, 2, 3, 4], [2, 2]);
x2.print();

const x3 = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
x3.print();

console.log("Hello TensorFlow.js!");

// TensorFlow.js versiyonunu ekrana yazdıralım
console.log("TensorFlow.js version:", tf.version.tfjs);
