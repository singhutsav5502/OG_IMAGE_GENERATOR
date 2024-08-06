# Open Graph Image Generator

## Overview

The Open Graph Image Generator is a web application that allows users to create custom Open Graph images dynamically. Users can input text and images, generate an Open Graph image, and upload it to a CDN. The application ensures the generated image can be used for social media sharing with the appropriate Open Graph meta tags.

## Usage

1. **Enter Content**: Use the Quill editor to input text and images.
2. **Generate Image**: Click the "Generate Image" button to convert the content into an image.
3. **Upload to CDN**: The generated image will be uploaded to Cloudinary.
4. **Shareable Link**: A shareable link with the Open Graph image gets copied to your clipboard automatically.

## Built Using
- **ReactJS**
- **Redux**
- **Cloudinary**
- **Quill**
- **PrimeReact**
- **html-to-image**
- **react-toastify**

## Features
- **Rich Text Editing**: Users can input text and images using the Quill editor.
- **Image Generation**: Convert HTML content to images using `html-to-image`.
- **CDN Upload**: Upload generated images to Cloudinary.
- **Dynamic Meta Tags**: Update Open Graph meta tags dynamically.

## Installation

To get started with the Open Graph Image Generator, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/open-graph-image-generator.git
    cd open-graph-image-generator
    ```

2. **Install dependencies:**

    ```bash
    cd frontend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with your Cloudinary credentials.
    **Note:** you will have to change the cloudinary preset name in PostCreator.jsx

    ```env
    REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
    ```