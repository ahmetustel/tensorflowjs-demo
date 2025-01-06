# 21 Days TensorFlow.js Journey

This repo was created to document and share my 21 days of learning TensorFlow.js. You can find code examples and notes along with new information I learned every day in this repo.

# Day 1: Login and Setup

## 1. What is TensorFlow.js?
TensorFlow.js is the JavaScript version of the TensorFlow library developed by Google. This library brings the power and flexibility of TensorFlow on the Python side to the JavaScript ecosystem, allowing you to develop deep learning models in both the browser and Node.js environments.

### **Key Advantages**:
1.	**Working in Browser**: You can provide users with machine learning experience directly from the browser without requiring any additional installation.
2.	**Server Side with Node.js**: Since it can also run on Node.js, you can build JavaScript-based ML/AI services in the background.
3.	**Real Time Interaction**: By instantly processing data from the user, you can present predictions and visuals via a web interface.

### **Disadvantages / Limitations**:
1.	**Performance**: When it comes to very large models or massive datasets, TensorFlow in the Python ecosystem may be more limited compared to GPU/TPU accelerations.
2.	**Community and Documentation**: A community as large as that on the Python side may not yet exist, especially for some advanced applications.

## 2.Installation and Environment Preparation

### **2.1. Working in Node.js Environment**

In the following stages, we will create a simple project from scratch, assuming that we will be working on the **Node.js** side. To do this, follow the steps below:

1. **Node.js Control**
    - To find out if Node.js is installed on your computer, type the following into the terminal:
        
        ```bash
        node -v
        ```
        
        write. If a version number (e.g. v16.0.0 or v18.0.0) is returned, the installation is available.
        
    - If it is not installed, install the version appropriate for your operating system from the official Node.js [download page](https://nodejs.org/en/).
2. **Created Project Folderr**
    - While working in the console or any terminal:
        
        ```bash
        mkdir tensorflowjs-demo
        cd tensorflowjs-demo
        ```
        
3. **npm / Start with Yarn**
    - You can preferably start a project using npm or yarn.
        
        ```bash
        npm init -y
        
        ```
        
       This command creates a package.json with default settings.
        
4. **Installing TensorFlow.js Package**
    - On the Node.js side, you can install @tensorflow/tfjs-node or @tensorflow/tfjs packages.
    - If you are going to work in the browser, just @tensorflow/tfjs is enough.
    - **For Node.js environment**:
        
        ```bash
        npm install @tensorflow/tfjs @tensorflow/tfjs-node
        ```
        
5. **VS Code or IDE Settings**
    - You can use Visual Studio Code, WebStorm, or another code editor.
    - I recommend **VS Code**. Open the project folder with VS Code; this way you can easily edit the JavaScript codes.

### **2.2. Classic “Hello TensorFlow.js” Example**

1. **Create a Simple JavaScript File**
    - Open a file named index.js in the project folder.
    - Write the following code in it:
        
        ```jsx
        const tf = require('@tensorflow/tfjs');       // If you are only going to use it in the browser import '@tensorflow/tfjs';
        require('@tensorflow/tfjs-node');            // To work in Node.js environment
        
        console.log('Hello TensorFlow.js!');
        
        // TensorFlow.js versiyonunu ekrana yazdıralım
        console.log('TensorFlow.js version:', tf.version.tfjs);
        ```
        
2. **Run**
    - From Terminal:
        
        ```jsx
        node index.js
        ```
        
    - You should see something like this in the output:
        
        ```jsx
        Hello TensorFlow.js!
        TensorFlow.js version: 3.x.x
        ```
        
    - This indicates that TensorFlow.js has been successfully installed and running.
3. **Creating the First Tensor**
    
    ### **What is a Tensor??**
    
    - Tensor refers to a multidimensional numerical data structure and is often used in mathematics, machine learning, and deep learning. Tensors are generalizations of matrices (2-dimensional arrays) and can have the following dimensions:
        1. **Scalar**: A zero-dimensional tensor (a single number, for example: `5`).
        2. **Vector**: A 1-dimensional tensor (a series of numbers, for example: `[1, 2, 3]`).
        3. **Matrix**: A 2-dimensional tensor (a 2D array, for example: `[[1, 2], [3, 4]]`).
        4. **Higher-dimensional tensors**: 3 and above dimensions (for example: a 3D tensor, `[[1], [2]], [[3], [4]]]`).
    - Tensors allow representing data in multiple dimensions, and this feature is especially important in machine learning libraries like **TensorFlow.js**.
    
    ---
    
    ### **`tensor()`, `tensor2d()`, ve `tensor3d()` Functions**
    
    - These functions are used to create tensors of different sizes in TensorFlow.js. The content and dimensions of the tensor are defined through these functions.
    
    ### **1. `tensor()`**
    
    - Creates a general tensor. You can define any size tensor with this function.
    - Data and `shape` must be specified explicitly.
    
    **Example:**
    
    ```jsx
    const t = tf.tensor([1, 2, 3, 4], [2, 2]); // 2x2 matris
    t.print();
    // Output:
    // [[1, 2],
    //  [3, 4]]
    ```
    
    ### **2. `tensor2d()`**
    
    - Used to create a 2D tensor (matrix).
    - The `shape` parameter is optional. If not specified, it is calculated automatically according to the length and layout of the data.
    
    **Example:**
    
    ```jsx
    const t2d = tf.tensor2d([1, 2, 3, 4], [2, 2]); // 2x2 matris
    t2d.print();
    // Output:
    // [[1, 2],
    //  [3, 4]]
    ```
    
    If the `shape` does not match you will get an error:
    
    ```jsx
    const invalid = tf.tensor2d([1, 2, 3, 4], [3, 2]); // Hata: Shape uyumsuz
    ```
    
    ### **3. `tensor3d()`**
    
    - Used to create a 3D tensor (e.g. a set of matrices).
    - Data must be organized in 3 dimensions.
    - The `shape` parameter must be an array of 3 elements.
    
    **Example:**
    
    ```jsx
    const t3d = tf.tensor3d([1, 2, 3, 4, 5, 6], [2, 3, 1]); // Boyut: 2x3x1
    t3d.print();
    // Output:
    // [[[1], [2], [3]],
    //  [[4], [5], [6]]]
    ```
    
    If `shape` is specified incorrectly, you will get an error.
    
    ### **Areas of Use**
    
    - **`tensor()`**: Suitable for creating a general tensor. It has a flexible structure.
    - **`tensor2d()`**: Optimized for two-dimensional tensors (such as matrices, image processing).
    - **`tensor3d()`**: Used for three-dimensional tensors (such as color images, video processing).
    
    Tensors are commonly used in machine learning models to represent numerical data such as weights, inputs, and outputs. For example, image data is often represented as 3D (height, width, color channels) or 4D tensors (including number of samples).    

### 2.3. **Points to Consider and Tips**

1. **Node.js Version**: For some new features to work smoothly, a current (at least LTS) version of Node.js is recommended (e.g. 16 and above).

2. **Package Versions**: Make sure @tensorflow/tfjs and @tensorflow/tfjs-node versions in package.json are compatible with each other. Usually, the same versions work better.

3. **If You Will Be Using a Browser**:
- You can also use TensorFlow.js by adding a script tag like <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script> in an HTML file.
- GPU acceleration on the browser side is automatically managed via WebGL.

4. **Follow Updates**: TensorFlow.js is updated frequently. Some functions may be deprecated or new additions may be made. The official [documentation](https://www.tensorflow.org/js) and [GitHub repo](https://github.com/tensorflow/tfjs) will guide you.

### 2.4. **End of Day Task**

1. **Installation Check**: I installed TensorFlow.js packages and Node.js environment on your computer, is everything working properly? - YES
2. **Create Tensor and Output**: Try simple tensor creation (e.g. tf.tensor(), tf.tensor1d(), tf.tensor2d()). Print them to the screen and examine their shapes.
3. **Take Short Notes**: Write down any installation or version issues you experienced today and your solutions. These notes will be very useful as the project grows in the future.

On this first day, our main goal was to install TensorFlow.js and get it up and running in a simple way. If you're okay with that, we'll continue with data structures, basic math, and tensor manipulations in the next few days.

# How to Contribute?

1. If you have any questions or feedback, you can create an issue.
2. Feel free to submit a pull request to share different tips about TensorFlow.js.

Note: This repo is created as a personal documentation for my TensorFlow.js learning. The codes and notes are based on the experiences I have gathered during my learning journey.
